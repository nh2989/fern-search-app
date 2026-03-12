GENUS_TREES["cyrtomium"] = {
  "start": {
    "question": "羽片の辺縁の鋸歯とソーラスの位置",
    "options": [
      { "text": "羽片の辺縁には<span class=\"key-term\">刺状の鋸歯がある</span>。ソーラスは羽片の中央部に散在", "next": "node1" },
      { "text": "羽片の辺縁には鋸歯がないか，あっても<span class=\"key-term\">刺状にはならない</span>。ソーラスは羽片の葉縁寄りからつきはじめる（クマヤブソテツは例外）", "next": "node2" }
    ]
  },
  "node1": {
    "question": "包膜の色と中心の色",
    "options": [
      { "text": "包膜は<span class=\"key-term\">大型で，はじめソーラスを完全におおう</span>。側羽片は6〜10対で幅広く，ソーラスは葉縁寄りからつきはじめる", "next": "node1_1" },
      { "text": "包膜は<span class=\"key-term\">小型でソーラスの中心部をおおうのみ</span>。羽片は4〜7対で幅広く，ソーラスは羽軸中心につきはじめる", "result": "クマヤブソテツ" }
    ]
  },
  "node1_1": {
    "question": "羽片の対数と基部，包膜の色",
    "options": [
      { "text": "羽片は広くて<span class=\"key-term\">10対以下</span>，耳垂はまったく発達しない。頂羽片は側羽片より大きいか同大くらい", "next": "node1_1_1" },
      { "text": "羽片は狭くて，<span class=\"key-term\">10〜30対</span>，頂羽片は下部の羽片よりずっと小さい", "next": "node1_1_2" }
    ]
  },
  "node1_1_1": {
    "question": "羽片の基部と包膜の色，側羽片の対数",
    "options": [
      { "text": "羽片の基部は<span class=\"key-term\">円形</span>，包膜は灰白色，側羽片は1〜7対", "result": "ヒロハヤブソテツ" },
      { "text": "羽片の基部は<span class=\"key-term\">くさび形</span>，包膜は中心が黒褐色，側羽片は6〜10対", "result": "ツクシヤブソテツ" },
      { "text": "羽片の基部は上側が切形，<span class=\"key-term\">下側がくさび形</span>，包膜は灰白色", "result": "ヤマヤブソテツ" }
    ]
  },
  "node1_1_2": {
    "question": "包膜の色と羽片の対数・耳垂",
    "options": [
      { "text": "包膜は<span class=\"key-term\">灰白色</span>", "next": "node1_1_2_1" },
      { "text": "包膜の中心は<span class=\"key-term\">黒褐色</span>", "next": "node1_1_2_2" }
    ]
  },
  "node1_1_2_1": {
    "question": "羽片の対数と耳垂",
    "options": [
      { "text": "羽片は<span class=\"key-term\">10〜15対</span>，やや幅広く，基部には多少とも耳垂が顕著", "result": "ヤマヤブソテツ" },
      { "text": "羽片は<span class=\"key-term\">15〜30対，幅狭い</span>。基部の耳垂は発達しない。表面には光沢があり，ソーラスは羽片裏面に広くつく", "result": "ヤブソテツ" },
      { "text": "羽片は<span class=\"key-term\">15〜30対，幅狭い</span>。基部の耳垂は多少とも顕著。表面には光沢がなく，ソーラスは羽片の縁寄りに集まる", "result": "イノウエヤブソテツ" }
    ]
  },
  "node1_1_2_2": {
    "question": "羽片の対数と基部",
    "options": [
      { "text": "羽片は<span class=\"key-term\">7〜10対</span>，基部はくさび形で耳垂がない", "result": "ツクシヤブソテツ" },
      { "text": "羽片は<span class=\"key-term\">10対以上</span>，基部はくさび形から切形", "next": "node1_1_2_2_2" }
    ]
  },
  "node1_1_2_2_2": {
    "question": "羽片基部の耳垂と両側の平行性",
    "options": [
      { "text": "羽片基部に<span class=\"key-term\">耳垂はない</span>。羽片は中部まで両側平行", "result": "イズヤブソテツ" },
      { "text": "羽片基部の<span class=\"key-term\">耳垂はよく発達する</span>。羽片は基部が最も広く，先へ向ってしだいに狭まる", "result": "ミヤコヤブソテツ" }
    ]
  },
  "node2": {
    "question": "葉の質と光沢，包膜の色",
    "options": [
      { "text": "葉は<span class=\"key-term\">厚い革質，濃緑色で美しい光沢</span>がある。羽片先端部には鋭鋸歯がない。包膜はふつう中央が黒い", "result": "オニヤブソテツ" },
      { "text": "葉はやや<span class=\"key-term\">うすい革質から洋紙質</span>，羽片先端部には常に鋭鋸歯がある", "next": "node2_2" }
    ]
  },
  "node2_2": {
    "question": "包膜の大きさとソーラスの始まり",
    "options": [
      { "text": "包膜は小型でソーラスの<span class=\"key-term\">中心部をおおうのみ</span>。羽片は4〜7対。ソーラスは羽軸中心につきはじめる", "result": "クマヤブソテツ" },
      { "text": "包膜は大型で，はじめ<span class=\"key-term\">ソーラスを完全におおう</span>。ソーラスは葉縁寄りからつきはじめる", "next": "node2_2_2" }
    ]
  },
  "node2_2_2": {
    "question": "羽片の対数と幅，耳垂",
    "options": [
      { "text": "羽片は広くて<span class=\"key-term\">10対以下</span>。耳垂はまったく発達しない", "next": "node1_1_1" },
      { "text": "羽片は狭くて<span class=\"key-term\">10〜30対</span>。頂羽片は下部の羽片よりずっと小さい", "next": "node1_1_2" }
    ]
  }
};
