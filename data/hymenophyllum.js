GENUS_TREES["hymenophyllum"] = {
  "start": {
    "question": "裂片の縁",
    "options": [
      { "text": "裂片に<span class=\"key-term\">不規則な鋸歯がある</span>", "result": "コウヤコケシノブ" },
      { "text": "裂片は<span class=\"key-term\">全縁</span>", "next": "node1" }
    ]
  },
  "node1": {
    "question": "葉裏の軸上の毛",
    "options": [
      { "text": "葉の裏面の軸上に<span class=\"key-term\">宿存性の毛がつく</span>", "result": "キヨスミコケシノブ" },
      { "text": "葉身は無毛，葉柄や羽軸に毛があっても<span class=\"key-term\">早落性</span>", "next": "node2" }
    ]
  },
  "node2": {
    "question": "葉柄の翼と羽片のひらき方",
    "options": [
      { "text": "葉柄の翼は<span class=\"key-term\">著しく縮み</span>，羽片はかなり立体的にひらく", "result": "リュウキュウコケシノブ" },
      { "text": "葉柄の翼は<span class=\"key-term\">扁平からやや波状</span>，羽片はほぼ平面的にひらく", "next": "node3" }
    ]
  },
  "node3": {
    "question": "裂片の幅と胞子嚢床の形",
    "options": [
      { "text": "裂片は幅<span class=\"key-term\">1.2mm以下</span>，胞子嚢床は棒状", "next": "node3_1" },
      { "text": "裂片は幅<span class=\"key-term\">1.5-2.5mm</span>，胞子嚢床は塊状", "result": "オオコケシノブ" }
    ]
  },
  "node3_1": {
    "question": "裂片の幅・色・軸に対する角度と分布",
    "options": [
      { "text": "裂片は全形の割に<span class=\"key-term\">幅広く0.7-1.2mm</span>で暗緑色，軸に対して30°-45°でつく。涼しい地方に多い", "result": "コケシノブ" },
      { "text": "裂片は<span class=\"key-term\">幅狭く0.5-0.6mm</span>で明緑色〜黄緑色，軸に対して50°-70°でつく。暖かい地方に多い", "result": "ホソバコケシノブ" }
    ]
  }
};
