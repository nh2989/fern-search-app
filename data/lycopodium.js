GENUS_TREES["lycopodium"] = {
  "start": {
    "question": "茎の分岐のしかた",
    "options": [
      { "text": "茎は<span class=\"key-term\">規則正しく二叉状</span>に分岐して，主軸と側枝の区別がない", "next": "node1" },
      { "text": "茎は<span class=\"key-term\">一部不等</span>に分岐して，主軸と側枝の別がある", "next": "node2" }
    ]
  },
  "node1": {
    "question": "葉の縁と生育地",
    "options": [
      { "text": "葉縁には<span class=\"key-term\">不規則な鋸歯</span>がある", "result": "トウゲシバ" },
      { "text": "葉は<span class=\"key-term\">全縁</span>", "next": "node1_2" }
    ]
  },
  "node1_2": {
    "question": "生育場所と茎の向き",
    "options": [
      { "text": "<span class=\"key-term\">地上または岩上</span>にはえる。茎は斜上し，上部にむかごをつける", "next": "node1_2_1" },
      { "text": "<span class=\"key-term\">樹上または岩上</span>にはえる。茎は垂れるか斜上し，むかごをつけない", "next": "node1_2_2" }
    ]
  },
  "node1_2_1": {
    "question": "葉の形",
    "options": [
      { "text": "葉はネクタイ形，<span class=\"key-term\">基部からしだいに細くなる</span>", "result": "ヒメスギラン" },
      { "text": "葉はやや広いネクタイ形，<span class=\"key-term\">ほぼ中央まで両側が平行</span>", "result": "コスギラン" }
    ]
  },
  "node1_2_2": {
    "question": "葉の形",
    "options": [
      { "text": "葉は<span class=\"key-term\">鱗片状</span>，茎に圧着し，茎はひも状で垂れる", "result": "ヒモラン" },
      { "text": "葉は鱗片状でなく，<span class=\"key-term\">茎から開出する</span>", "next": "node1_2_2_2" }
    ]
  },
  "node1_2_2_2": {
    "question": "葉の形と茎の向き",
    "options": [
      { "text": "葉は<span class=\"key-term\">針形</span>，中央から先はやや内曲する", "result": "ムカデカズラ" },
      { "text": "葉はより広く，<span class=\"key-term\">内曲しない</span>", "next": "node1_2_2_2_2" }
    ]
  },
  "node1_2_2_2_2": {
    "question": "茎の向きと胞子嚢穂",
    "options": [
      { "text": "茎は<span class=\"key-term\">直立から倒伏</span>，葉はネクタイ形で基部がやや狭くなる。胞子嚢穂をつくらない", "result": "スギラン" },
      { "text": "茎は<span class=\"key-term\">垂れる</span>。葉は広いネクタイ形，ほぼ中央が最も広い。胞子嚢穂ははっきりしない", "result": "ナンカクラン" },
      { "text": "茎は<span class=\"key-term\">垂れる</span>。葉は三角状卵形。分岐したひも状の胞子嚢穂を茎の先端につける", "result": "ヨウラクヒバ" }
    ]
  },
  "node2": {
    "question": "主軸のはい方と葉のつき方",
    "options": [
      { "text": "主軸は<span class=\"key-term\">地表または地中を長くはう</span>。茎は何回も分岐する", "next": "node2_1" },
      { "text": "主軸は<span class=\"key-term\">地表をはうが短く</span>，また分岐も少ない。胞子嚢穂は直立する枝の先に1個つく。湿原に限られる", "next": "node2_2" }
    ]
  },
  "node2_1": {
    "question": "葉の配列と形",
    "options": [
      { "text": "葉は枝に<span class=\"key-term\">放射状</span>にならび，みなほぼ同形，茎に合着する部分は少ない", "next": "node2_1_1" },
      { "text": "葉は枝に<span class=\"key-term\">4列</span>にならび，2形あり，基部は広く枝に合着する", "next": "node2_1_2" }
    ]
  },
  "node2_1_1": {
    "question": "主軸のはい方と側枝",
    "options": [
      { "text": "主軸は<span class=\"key-term\">地中をはい</span>，そこから直立性の樹木状の側枝を出す", "result": "マンネンスギ" },
      { "text": "主軸は<span class=\"key-term\">地表をはい</span>，側枝は基部斜上し，樹木状でない", "next": "node2_1_1_2" }
    ]
  },
  "node2_1_1_2": {
    "question": "胞子嚢穂の有無と葉縁",
    "options": [
      { "text": "胞子嚢穂は，葉をまばらにつけた<span class=\"key-term\">長い総梗</span>の上に1-数個つく。葉は全縁", "next": "node2_1_1_2_1" },
      { "text": "胞子嚢穂は<span class=\"key-term\">無梗</span>。側枝は規則正しく1-2回二叉に分岐するだけ。ふつう葉縁に鋸歯がある", "result": "スギカズラ" }
    ]
  },
  "node2_1_1_2_1": {
    "question": "側枝の分化",
    "options": [
      { "text": "側枝にも<span class=\"key-term\">主軸と側軸が分化する</span>", "result": "ヒカゲノカズラ" },
      { "text": "側枝はほぼ規則正しく<span class=\"key-term\">二叉にわかれ</span>，主軸と側軸の分化は不明瞭", "result": "タカネヒカゲノカズラ" }
    ]
  },
  "node2_1_2": {
    "question": "枝の扁平度と葉",
    "options": [
      { "text": "枝は<span class=\"key-term\">多少扁平</span>，腹葉と背葉は側葉より多少小さい", "result": "ミヤマヒカゲノカズラ" },
      { "text": "枝は<span class=\"key-term\">ひどく扁平</span>で葉状，腹葉は側葉よりいちじるしく小さい", "result": "アスヒカズラ" }
    ]
  },
  "node2_2": {
    "question": "胞子嚢穂の梗と胞子葉",
    "options": [
      { "text": "胞子嚢穂の梗は葉を<span class=\"key-term\">密生し</span>，胞子葉の形や大きさは栄養葉に似ている", "result": "ヤチスギラン" },
      { "text": "胞子嚢穂の梗は葉を<span class=\"key-term\">まばらにつけ</span>，胞子葉は広卵形", "result": "イヌヤチスギラン" }
    ]
  }
};
