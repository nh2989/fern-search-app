GENUS_TREES["crepidomanes"] = {
  "start": {
    "question": "葉に偽脈があるか",
    "options": [
      { "text": "葉に<span class=\"key-term\">偽脈がある</span>", "next": "node1" },
      { "text": "葉に<span class=\"key-term\">偽脈がない</span>", "next": "node2" }
    ]
  },
  "node1": {
    "question": "裂片の先端と翼の波うち",
    "options": [
      { "text": "裂片の先端は<span class=\"key-term\">鋭尖形</span>，翼はやや波うつ", "result": "コケホラゴケ" },
      { "text": "裂片の先端は<span class=\"key-term\">鋭形</span>，翼はほとんど平坦", "result": "アオホラゴケ" }
    ]
  },
  "node2": {
    "question": "葉身の形",
    "options": [
      { "text": "葉身は<span class=\"key-term\">掌状に拡がり</span>，長さ・幅ともに1cm内外", "result": "ウチワゴケ" },
      { "text": "葉身は<span class=\"key-term\">羽状に分岐する</span>", "next": "node2_2" }
    ]
  },
  "node2_2": {
    "question": "根茎の性質",
    "options": [
      { "text": "根茎は<span class=\"key-term\">つる状で岩壁や樹幹をはい上り</span>，左右に葉をひらく", "result": "ツルホラゴケ" },
      { "text": "根茎ははうが，<span class=\"key-term\">つる状ではない</span>。葉は上向きに出る", "next": "node2_2_2" }
    ]
  },
  "node2_2_2": {
    "question": "葉面の透け方",
    "options": [
      { "text": "葉面は<span class=\"key-term\">格子状に透きとおって見える</span>", "result": "ニセアミホラゴケ" },
      { "text": "葉面は<span class=\"key-term\">暗緑色で</span>，とくに透きとおって見えることはない", "next": "node2_2_2_2" }
    ]
  },
  "node2_2_2_2": {
    "question": "裂片の重なり",
    "options": [
      { "text": "裂片は<span class=\"key-term\">互いに重なり合う</span>", "next": "node2_2_2_2_1" },
      { "text": "裂片は<span class=\"key-term\">ほとんど重なり合わない</span>", "next": "node2_2_2_2_2" }
    ]
  },
  "node2_2_2_2_1": {
    "question": "裂片の幅と分裂度",
    "options": [
      { "text": "裂片は数多く，<span class=\"key-term\">幅0.7mm以下</span>，3回羽状深裂", "result": "ヒメハイホラゴケ" },
      { "text": "裂片は少なく，<span class=\"key-term\">幅1-1.5mm</span>，2回羽状深裂", "result": "チチブホラゴケ" }
    ]
  },
  "node2_2_2_2_2": {
    "question": "葉軸の翼と小羽片の切れこみ",
    "options": [
      { "text": "葉軸の翼は裂片より<span class=\"key-term\">狭く</span>，小羽片の切れこみが深い", "result": "リュウキュウホラゴケ" },
      { "text": "葉軸の翼は裂片の幅と<span class=\"key-term\">ほぼ同じ</span>。小羽片の切れこみは浅い", "next": "node2_2_2_2_2_2" }
    ]
  },
  "node2_2_2_2_2_2": {
    "question": "葉身の長さと根茎の径",
    "options": [
      { "text": "葉身の長さ<span class=\"key-term\">25cm以上</span>，根茎の径1-1.5mm", "result": "オオハイホラゴケ" },
      { "text": "葉身の長さ<span class=\"key-term\">7-20cm</span>，根茎の径0.5-1mm", "result": "ハイホラゴケ" },
      { "text": "葉身の長さ<span class=\"key-term\">6cm以下</span>，根茎の径0.3-0.5mm，裂片は幅0.4mm以下", "result": "コハイホラゴケ" }
    ]
  }
};
