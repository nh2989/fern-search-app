GENUS_TREES["crypsinus"] = {
  "start": {
    "question": "葉の形",
    "options": [
      { "text": "葉は<span class=\"key-term\">単葉</span>（基部がときに耳状に広がることもある）", "next": "node1" },
      { "text": "葉は<span class=\"key-term\">2〜3裂するか，まれに鳥足状に5〜6裂</span>する", "result": "ミツデウラボシ" },
      { "text": "葉は<span class=\"key-term\">羽状に深裂〜全裂する</span>", "next": "node2" }
    ]
  },
  "node1": {
    "question": "葉身の形とソーラスの位置",
    "options": [
      { "text": "葉身の両側は<span class=\"key-term\">ほぼ平行</span>，ソーラスは葉面と同じ平面につく", "result": "タカノハウラボシ" },
      { "text": "葉身は<span class=\"key-term\">ネクタイ形</span>，中央より少し下が最も広い。ソーラスは葉面の深いくぼみ中にできる", "result": "ヒメタカノハウラボシ" },
      { "text": "葉身は<span class=\"key-term\">基部が最も広い</span>。ソーラスは葉面と同じ平面につく", "result": "ミツデウラボシ" }
    ]
  },
  "node2": {
    "question": "ソーラスの位置と葉縁",
    "options": [
      { "text": "ソーラスは<span class=\"key-term\">辺縁よりにつく</span>。主側脈間に小さいくぼみがある", "result": "ヤクシマウラボシ" },
      { "text": "ソーラスは<span class=\"key-term\">中間生</span>。葉縁には低い鋸歯がある", "result": "ミヤマウラボシ" }
    ]
  }
};
