GENUS_TREES["ophioglossum"] = {
  "start": {
    "question": "栄養葉の有無",
    "options": [
      { "text": "<span class=\"key-term\">栄養葉がない</span>", "result": "サクラジマハナヤスリ" },
      { "text": "<span class=\"key-term\">栄養葉がある</span>", "next": "node1" }
    ]
  },
  "node1": {
    "question": "胞子の表面と葉脈の網目",
    "options": [
      { "text": "胞子には<span class=\"key-term\">大きい網目模様</span>があり縁は瘤状。栄養葉の葉脈の網目は細長く二次細脈が分化", "next": "node1_1" },
      { "text": "胞子には<span class=\"key-term\">細かい網目</span>があって縁はなめらかか波うつ程度。葉はふつう2-3本ずつ出て晩秋枯れるか常緑性", "next": "node1_2" }
    ]
  },
  "node1_1": {
    "question": "栄養葉の形",
    "options": [
      { "text": "栄養葉は<span class=\"key-term\">広卵形〜長楕円形</span>", "result": "ヒロハハナヤスリ" },
      { "text": "栄養葉は<span class=\"key-term\">広いネクタイ形</span>", "result": "ナガバノハルハナヤスリ" }
    ]
  },
  "node1_2": {
    "question": "栄養葉の大きさ",
    "options": [
      { "text": "栄養葉は小型で，ふつう長さ<span class=\"key-term\">1-2cm，3-7mm</span>", "result": "チャボハナヤスリ" },
      { "text": "栄養葉は長さ<span class=\"key-term\">2.5cm以上</span>", "next": "node1_2_2" }
    ]
  },
  "node1_2_2": {
    "question": "栄養葉の厚みと脈",
    "options": [
      { "text": "栄養葉はうすく，<span class=\"key-term\">脈がすけてみえる</span>。基部は短柄状となる", "result": "コヒロハハナヤスリ" },
      { "text": "栄養葉はより厚く，<span class=\"key-term\">脈はすかしてもよく見えない</span>", "next": "node1_2_2_2" }
    ]
  },
  "node1_2_2_2": {
    "question": "栄養葉の基部と広い部分",
    "options": [
      { "text": "栄養葉の基部は短柄となる。<span class=\"key-term\">基部近くが最も広い</span>", "next": "node1_2_2_2_1" },
      { "text": "栄養葉は無柄，<span class=\"key-term\">中央部か，もっと上が広い</span>", "result": "ハマハナヤスリ" }
    ]
  },
  "node1_2_2_2_1": {
    "question": "葉脚の形と二次細脈",
    "options": [
      { "text": "栄養葉は<span class=\"key-term\">広いくさび脚</span>，葉脈には二次細脈が分化する", "result": "トネハナヤスリ" },
      { "text": "栄養葉は<span class=\"key-term\">くさび脚</span>，二次細脈は分化しない", "result": "コハナヤスリ" }
    ]
  }
};
