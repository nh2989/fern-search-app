GENUS_TREES["osmunda"] = {
  "start": {
    "question": "葉の分裂度と季節性",
    "options": [
      { "text": "葉は<span class=\"key-term\">単羽状</span>，羽片は羽状深裂または大きな鋸歯をもつ", "next": "node1" },
      { "text": "葉は完全<span class=\"key-term\">2回羽状</span>，夏緑性", "next": "node2" }
    ]
  },
  "node1": {
    "question": "羽片の質と季節性",
    "options": [
      { "text": "羽片は<span class=\"key-term\">革質</span>，大きな鋸歯がある。常緑性", "result": "シロヤマゼンマイ" },
      { "text": "羽片は<span class=\"key-term\">草質</span>，羽状に深裂する。夏緑性", "next": "node1_2" }
    ]
  },
  "node1_2": {
    "question": "胞子葉の形と綿毛の色",
    "options": [
      { "text": "胞子葉は<span class=\"key-term\">異形</span>で夏には枯れる。綿毛は赤褐色", "result": "ヤマドリゼンマイ" },
      { "text": "胞子嚢は葉の<span class=\"key-term\">下部の羽片につき</span>，その部分だけ夏に枯れる。綿毛は灰白色から帯褐灰色", "result": "オニゼンマイ" }
    ]
  },
  "node2": {
    "question": "小羽片の基部と柄",
    "options": [
      { "text": "小羽片の基部は<span class=\"key-term\">切形で無柄</span>", "result": "ゼンマイ" },
      { "text": "小羽片の基部は<span class=\"key-term\">くさび形</span>，ふつう短柄がある", "result": "ヤシャゼンマイ" }
    ]
  }
};
