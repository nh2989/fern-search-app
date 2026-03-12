GENUS_TREES["adiantum"] = {
  "start": {
    "question": "小葉の両面の毛",
    "options": [
      { "text": "小葉の両面に<span class=\"key-term\">剛毛がある</span>。葉は最下の羽片のみ大きく，三出状", "result": "スキヤクジャク" },
      { "text": "小葉の両面は<span class=\"key-term\">無毛</span>。葉形はそのようでない", "next": "node1" }
    ]
  },
  "node1": {
    "question": "葉の分裂度",
    "options": [
      { "text": "葉は<span class=\"key-term\">単羽状複生</span>", "next": "node1_1" },
      { "text": "葉は<span class=\"key-term\">2〜4回羽状複生</span>", "next": "node1_2" },
      { "text": "葉は<span class=\"key-term\">扇形に分岐する</span>", "result": "クジャクシダ" }
    ]
  },
  "node1_1": {
    "question": "羽片の形",
    "options": [
      { "text": "羽片は<span class=\"key-term\">半月形から平行四辺形</span>", "result": "オトメジャク" },
      { "text": "羽片は<span class=\"key-term\">ほぼ円形</span>", "result": "ホウライジャク" }
    ]
  },
  "node1_2": {
    "question": "各葉片のソーラスの数",
    "options": [
      { "text": "各葉片には<span class=\"key-term\">2〜5個</span>のソーラスがつく", "result": "ホウライシダ" },
      { "text": "各葉片には<span class=\"key-term\">1(-2)個</span>のソーラスがつく", "result": "ハコネシダ" }
    ]
  }
};
