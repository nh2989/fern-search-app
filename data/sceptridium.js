GENUS_TREES["sceptridium"] = {
  "start": {
    "question": "胞子の表面と栄養葉の裂片",
    "options": [
      { "text": "胞子には<span class=\"key-term\">瘤状突起が密生する</span>。栄養葉の裂片は鋭鋸歯をもつ", "next": "node1" },
      { "text": "胞子の表面には<span class=\"key-term\">網目状の模様がある</span>", "next": "node2" }
    ]
  },
  "node1": {
    "question": "胞子葉の長さと栄養葉の枚数",
    "options": [
      { "text": "胞子葉は栄養葉と<span class=\"key-term\">ほぼ同長</span>，共通柄は栄養葉柄とやや同長程度。1胞子葉に2-3枚の葉がつく", "result": "ホウライハナワラビ" },
      { "text": "胞子葉は栄養葉より<span class=\"key-term\">はるかに長く</span>，共通柄はかなり短い。1胞子葉あたり栄養葉は1(-2)枚", "next": "node1_2" }
    ]
  },
  "node1_2": {
    "question": "栄養葉の質と冬の色，鋸歯の先",
    "options": [
      { "text": "栄養葉はやや<span class=\"key-term\">うすく，緑色</span>で冬は縁が多少赤味をおびる。裂片の鋸歯は鋭くとがる", "result": "オオハナワラビ" },
      { "text": "栄養葉は<span class=\"key-term\">厚い草質，深緑色</span>で水々しく，冬は縁が明瞭に赤くなる。裂片の鋸歯はやや鋭い", "result": "シチトウハナワラビ" }
    ]
  },
  "node2": {
    "question": "栄養葉の羽片・小羽片の先端と裂片の鋸歯",
    "options": [
      { "text": "栄養葉の羽片と小羽片は<span class=\"key-term\">鋭尖頭</span>。裂片の鋸歯は鋭い", "next": "node2_1" },
      { "text": "栄養葉の羽片と小羽片は<span class=\"key-term\">円頭から鈍頭</span>。裂片の鋸歯はにぶい", "next": "node2_2" }
    ]
  },
  "node2_1": {
    "question": "小羽片の重なりと葉裏の毛",
    "options": [
      { "text": "栄養葉の小羽片は<span class=\"key-term\">かなり重なりあう</span>", "result": "イブリハナワラビ" },
      { "text": "栄養葉の羽片はあまり，またはほとんど<span class=\"key-term\">重なりあわない</span>", "next": "node2_1_2" }
    ]
  },
  "node2_1_2": {
    "question": "葉裏の毛と羽片の柄",
    "options": [
      { "text": "生長した葉には裏面に<span class=\"key-term\">長い毛がある</span>。羽片には短柄がある", "result": "ウスイハナワラビ" },
      { "text": "生長した葉の裏面は<span class=\"key-term\">無毛かごく短い毛</span>がある。羽片の柄は長く葉は3出状", "result": "アカハナワラビ" }
    ]
  },
  "node2_2": {
    "question": "栄養葉の質と小羽片の柄",
    "options": [
      { "text": "栄養葉は<span class=\"key-term\">草質</span>，小羽片の柄は長い。無毛", "result": "フユノハナワラビ" },
      { "text": "栄養葉は<span class=\"key-term\">厚く</span>，やや有毛。小羽片は無柄または短柄をもつ", "next": "node2_2_2" }
    ]
  },
  "node2_2_2": {
    "question": "植物体の高さと毛の量",
    "options": [
      { "text": "植物体は高さ<span class=\"key-term\">15-30cm</span>，やや多毛。裂片は鈍〜やや鋭頭", "result": "エゾフユノハナワラビ" },
      { "text": "植物体は高さ<span class=\"key-term\">5-15cm</span>，毛は少ない。裂片は円〜鈍頭", "result": "ヤマハナワラビ" }
    ]
  }
};
