GENUS_TREES["polypodium"] = {
  "start": {
    "question": "葉脈の結合",
    "options": [
      { "text": "葉脈は<span class=\"key-term\">すべて遊離</span>", "next": "node1" },
      { "text": "葉脈は<span class=\"key-term\">規則正しく網状に結合する</span>", "next": "node2" }
    ]
  },
  "node1": {
    "question": "葉の裏面の毛",
    "options": [
      { "text": "葉の裏面は<span class=\"key-term\">無毛</span>", "next": "node1_1" },
      { "text": "葉の裏面には<span class=\"key-term\">灰色の長い軟毛がある</span>", "result": "オシャグジデンダ" }
    ]
  },
  "node1_1": {
    "question": "ソーラスの位置",
    "options": [
      { "text": "ソーラスは羽片の<span class=\"key-term\">中肋と辺縁の中間につく</span>", "result": "オオエゾデンダ" },
      { "text": "ソーラスは<span class=\"key-term\">辺縁に近くつく</span>", "result": "エゾデンダ" }
    ]
  },
  "node2": {
    "question": "羽片の縁と根茎の鱗片",
    "options": [
      { "text": "羽片には<span class=\"key-term\">鋸歯がある</span>。根茎には鱗片が多い", "result": "ミョウギシダ" },
      { "text": "羽片は<span class=\"key-term\">全縁</span>，根茎はほぼ裸出して，緑色をおびる", "next": "node2_2" }
    ]
  },
  "node2_2": {
    "question": "葉の裏面の毛",
    "options": [
      { "text": "葉の裏面は<span class=\"key-term\">ほとんど無毛</span>", "result": "タイワンアオネカズラ" },
      { "text": "葉の裏面には<span class=\"key-term\">密毛がある</span>", "result": "アオネカズラ" }
    ]
  }
};
