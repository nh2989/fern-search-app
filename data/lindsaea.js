GENUS_TREES["lindsaea"] = {
  "start": {
    "question": "葉柄と中軸の断面",
    "options": [
      { "text": "葉柄と中軸は<span class=\"key-term\">円柱形</span>，断面は丸い", "next": "node1" },
      { "text": "葉柄と中軸は<span class=\"key-term\">四角柱状</span>，断面はしたがって四角形", "next": "node2" }
    ]
  },
  "node1": {
    "question": "葉頂の形と葉柄の色，葉身の長さ",
    "options": [
      { "text": "葉頂には<span class=\"key-term\">くさび形の頂羽片がある</span>。葉柄はほぼ全長紫褐色。葉身3〜7cm", "result": "サイゴクホングウシダ" },
      { "text": "羽片は上方に向かってしだいに小さくなり，<span class=\"key-term\">葉頂にはふつう頂羽片がない</span>。葉柄は下部のみ赤褐色。葉身7〜25cm", "result": "ホングウシダ" }
    ]
  },
  "node2": {
    "question": "胞子をつける葉の分裂度と頂羽片",
    "options": [
      { "text": "胞子をつける葉は<span class=\"key-term\">単羽状</span>。もしごく一部2回羽状であっても，頂羽片をもつ", "result": "マルバホングウシダ" },
      { "text": "胞子をつける葉は<span class=\"key-term\">2回羽状</span>。まれに単羽状であっても，頂羽片は不明瞭", "next": "node2_2" }
    ]
  },
  "node2_2": {
    "question": "葉縁のソーラスの連続性",
    "options": [
      { "text": "葉縁のソーラスは<span class=\"key-term\">連続して，長い</span>", "result": "シンエダウチホングウシダ" },
      { "text": "葉縁のソーラスは<span class=\"key-term\">分断されて，短い</span>", "result": "エダウチホングウシダ" }
    ]
  }
};
