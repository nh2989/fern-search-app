// ==============================================
// しだ検索アプリ — メインスクリプト
// ==============================================

// 各属ツリーの格納先（属JSファイルがここに書き込む）
const GENUS_TREES = {};

// ---- 状態変数 ----
let currentGenus = null;
let currentTree  = null;
let currentNode  = null;
let history      = [];
let nodeHistory  = [];

// ---- 初期化 ----
function init() {
    document.getElementById('back-btn').addEventListener('click',  e => { e.preventDefault(); goBack(); });
    document.getElementById('reset-btn').addEventListener('click', e => { e.preventDefault(); reset(); });
    renderGenusSelection();
}

// ---- 属選択画面 ----
function renderGenusSelection() {
    const grid = document.getElementById('genus-grid');
    grid.innerHTML = '';

    GENERA_DATA.forEach(genus => {
        const card = document.createElement('div');
        card.className = genus.hasKey ? 'genus-card' : 'genus-card genus-card-disabled';

        const badgeHTML = genus.hasKey
            ? '<span class="status-badge status-badge-ready">実装済</span>'
            : '<span class="status-badge">準備中</span>';

        const ctaHTML = genus.hasKey
            ? `<button class="start-search-btn">🔍 タップして検索を開始</button>`
            : `<div class="not-ready-msg">⏳ この属は現在準備中です</div>`;

        card.innerHTML = `
            <div class="card-header">
                <div class="card-header-left">
                    <div class="genus-name">${genus.name}</div>
                    <div class="genus-latin">${genus.latin}</div>
                </div>
                <div class="card-header-right">
                    ${badgeHTML}
                    <span class="expand-indicator">▼</span>
                </div>
            </div>
            <div class="genus-examples">
                <div>代表種: ${genus.examples}</div>
                ${ctaHTML}
            </div>
        `;

        const startBtn = card.querySelector('.start-search-btn');
        if (startBtn) {
            startBtn.addEventListener('click', e => {
                e.stopPropagation();
                selectGenus(genus);
            });
        }

        card.addEventListener('click', () => {
            const isExpanded = card.classList.contains('expanded');
            document.querySelectorAll('.genus-card.expanded').forEach(c => {
                if (c !== card) {
                    c.classList.remove('expanded');
                    c.querySelector('.genus-examples').classList.remove('show');
                }
            });
            if (isExpanded) {
                card.classList.remove('expanded');
                card.querySelector('.genus-examples').classList.remove('show');
            } else {
                card.classList.add('expanded');
                card.querySelector('.genus-examples').classList.add('show');
            }
        });

        grid.appendChild(card);
    });

    document.getElementById('genus-selection').style.display = 'block';
    document.getElementById('search-area').style.display     = 'none';
    document.getElementById('breadcrumb').style.display      = 'none';
    document.getElementById('reset-btn').style.display       = 'none';
}

// ---- 属ツリーJSを動的に読み込んで検索開始 ----
function selectGenus(genus) {
    currentGenus = genus;
    history      = [];
    nodeHistory  = [];

    // 既に読み込み済みならそのまま開始
    if (GENUS_TREES[genus.id]) {
        startSearch();
        return;
    }

    // 未読み込みの場合: scriptタグを動的挿入
    const script  = document.createElement('script');
    script.src    = `data/${genus.id}.js`;
    script.onload = () => startSearch();
    script.onerror = () => alert(`${genus.name}のデータ読み込みに失敗しました。`);
    document.head.appendChild(script);
}

function startSearch() {
    const tree = GENUS_TREES[currentGenus.id];
    currentNode = tree.start;
    currentTree = tree;

    document.getElementById('genus-selection').style.display = 'none';
    document.getElementById('search-area').style.display     = 'block';
    document.getElementById('breadcrumb').style.display      = 'block';
    document.getElementById('reset-btn').style.display       = 'inline-block';

    updateBreadcrumb();
    render();
}

// ---- パンくず ----
function updateBreadcrumb() {
    const el = document.getElementById('breadcrumb');
    if (currentGenus) {
        let text = `<strong>現在:</strong> ${currentGenus.name}`;
        if (history.length > 0) text += ` → ${history.join(' → ')}`;
        el.innerHTML = text;
    }
}

// ---- 質問・選択肢を描画 ----
function render() {
    const questionEl = document.getElementById('question-area');
    const optionsEl  = document.getElementById('options-area');
    const resultEl   = document.getElementById('result-area');

    updateBreadcrumb();
    document.getElementById('back-btn').style.display = history.length > 0 ? 'block' : 'none';
    optionsEl.style.display = 'flex';
    resultEl.innerHTML      = '';

    questionEl.innerHTML = `<div class="question">${currentNode.question}</div>`;
    optionsEl.innerHTML  = '';

    currentNode.options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';

        const candidates = collectSpecies(option);
        let html = option.text;
        if (candidates.length > 0) {
            html += `<div class="candidates"><span class="candidates-label">候補:</span> ${candidates.join('、')}</div>`;
        }
        btn.innerHTML = html;

        btn.addEventListener('click', e => {
            e.preventDefault();
            selectOption(option, option.text.replace(/<[^>]*>/g, ''));
        });

        optionsEl.appendChild(btn);
    });
}

// ---- 候補種収集 ----
function collectSpecies(option) {
    const species = [];
    if (option.result) {
        species.push(option.result);
    } else if (option.next && currentTree[option.next]) {
        currentTree[option.next].options.forEach(opt => species.push(...collectSpecies(opt)));
    }
    return species;
}

// ---- 選択肢を選ぶ ----
function selectOption(option, displayText) {
    if (option.result) {
        showResult(option.result, displayText);
    } else if (option.next && currentTree) {
        nodeHistory.push(currentNode);
        history.push(displayText.substring(0, 30) + (displayText.length > 30 ? '...' : ''));
        currentNode = currentTree[option.next];
        render();
    }
}

// ---- 結果表示 ----
function showResult(species, lastChoice) {
    document.getElementById('options-area').style.display = 'none';
    document.getElementById('back-btn').style.display     = 'block';
    document.getElementById('result-area').innerHTML = `
        <div class="result">
            <h2>🎯 ${species}</h2>
            <div class="result-info">
                <strong>最後の選択:</strong> ${lastChoice}
            </div>
        </div>
    `;
}

// ---- 戻る ----
function goBack() {
    if (nodeHistory.length === 0) { reset(); return; }
    history.pop();
    currentNode = nodeHistory.pop();
    document.getElementById('options-area').style.display = 'flex';
    render();
}

// ---- 属選択に戻る ----
function reset() {
    currentGenus = null;
    currentTree  = null;
    currentNode  = null;
    history      = [];
    nodeHistory  = [];
    renderGenusSelection();
}

// ---- 起動 ----
init();

// ---- Service Worker 登録（PWAオフライン対応）----
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('SW registered:', reg.scope))
            .catch(err => console.warn('SW registration failed:', err));
    });
}