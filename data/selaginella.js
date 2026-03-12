GENUS_TREES["selaginella"] = {
  "start": {
    "question": "葉の形と配列",
    "options": [
      { "text": "葉はみな<span class=\"key-term\">同形</span>，放射状につき，多列にならぶ", "next": "node1" },
      { "text": "葉は<span class=\"key-term\">2形</span>あって4列にならぶ", "next": "node2" }
    ]
  },
  "node1": {
    "question": "胞子をつける葉の配列と葉の硬さ",
    "options": [
      { "text": "胞子をつける葉は<span class=\"key-term\">放射状</span>につき，多列にならぶ。葉は柔らかい", "result": "コケスギラン" },
      { "text": "胞子をつける葉は<span class=\"key-term\">4列</span>にならび，胞子嚢穂は四角柱状。葉は硬い", "next": "node1_2" }
    ]
  },
  "node1_2": {
    "question": "乾燥した茎の径と葉先端の付属物の長さ",
    "options": [
      { "text": "乾燥した茎は葉とともに径<span class=\"key-term\">1.5-2mm</span>，葉の先端にある白色毛状の付属物の長さは葉の長さの1/3", "result": "エゾノヒモカズラ" },
      { "text": "乾燥した茎は葉とともに径<span class=\"key-term\">約1mm</span>，葉の先端の付属物の長さは葉の長さの1/5", "result": "ヒモカズラ" }
    ]
  },
  "node2": {
    "question": "胞子嚢穂の分化",
    "options": [
      { "text": "胞子嚢をつける部分はとくに異なった形をしていない（<span class=\"key-term\">胞子嚢穂のまとまりがない</span>）", "next": "node2_1" },
      { "text": "胞子嚢をつける部分の葉は栄養葉と異形（<span class=\"key-term\">胞子嚢穂が分化している</span>）で，小枝に頂生する", "next": "node2_2" }
    ]
  },
  "node2_1": {
    "question": "胞子嚢のつく場所",
    "options": [
      { "text": "胞子嚢は<span class=\"key-term\">地表や岩上をはう茎の先</span>につく", "result": "ヤマクラマゴケ" },
      { "text": "胞子嚢は<span class=\"key-term\">直立した枝</span>につく", "next": "node2_1_2" }
    ]
  },
  "node2_1_2": {
    "question": "腹葉の形と大きさ",
    "options": [
      { "text": "腹葉は<span class=\"key-term\">広卵形，鋭頭，長さ2-2.5mm</span>", "result": "タチクラマゴケ" },
      { "text": "腹葉は<span class=\"key-term\">卵形から卵状楕円形，鋭頭，長さ1.5mm</span>", "result": "エゾノヒメクラマゴケ" }
    ]
  },
  "node2_2": {
    "question": "胞子葉の形と茎のはい方",
    "options": [
      { "text": "胞子葉はみな<span class=\"key-term\">同形で4列</span>（胞子嚢穂は四角柱状になる）", "next": "node2_2_1" },
      { "text": "胞子葉に<span class=\"key-term\">2形あり</span>，背側のものが大きい", "result": "ヒメクラマゴケ" }
    ]
  },
  "node2_2_1": {
    "question": "茎のはい方",
    "options": [
      { "text": "茎は<span class=\"key-term\">長く地表をはう</span>", "next": "node2_2_1_1" },
      { "text": "茎は<span class=\"key-term\">地表をはわない</span>", "next": "node2_2_1_2" }
    ]
  },
  "node2_2_1_1": {
    "question": "葉面の色と背葉の縁",
    "options": [
      { "text": "葉面は<span class=\"key-term\">鮮緑色から黄緑色</span>，背葉の縁には浅い鋸歯がある", "result": "クラマゴケ" },
      { "text": "葉面には<span class=\"key-term\">青緑色の光沢がある</span>。背葉は全縁", "result": "コンテリクラマゴケ" }
    ]
  },
  "node2_2_1_2": {
    "question": "草姿",
    "options": [
      { "text": "草姿は<span class=\"key-term\">小樹木状</span>", "result": "イワヒバ" },
      { "text": "草姿は<span class=\"key-term\">樹木状でない</span>", "next": "node2_2_1_2_2" }
    ]
  },
  "node2_2_1_2_2": {
    "question": "茎の分岐と基部",
    "options": [
      { "text": "直立茎は<span class=\"key-term\">上半部のみ分岐</span>し，葉面状。基部から匍匐枝を出す", "result": "カタヒバ" },
      { "text": "茎は斜上し，多くの太い根（根持体）でさされる。<span class=\"key-term\">匍匐枝はない</span>", "result": "オニクラマゴケ" }
    ]
  }
};
