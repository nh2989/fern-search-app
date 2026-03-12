GENUS_TREES["deparia"] = {
  "start": {
    "question": "葉の分裂度",
    "options": [
      { "text": "葉は<span class=\"key-term\">単葉</span>で，下部だけ深〜全裂する", "result": "ヒトツバシケシダ" },
      { "text": "葉は<span class=\"key-term\">1〜4回羽状複生</span>", "next": "node1" }
    ]
  },
  "node1": {
    "question": "ソーラスの形",
    "options": [
      { "text": "ソーラスは<span class=\"key-term\">細長い</span>（線形）", "next": "node1_1" },
      { "text": "ソーラスは<span class=\"key-term\">短く馬蹄形</span>", "next": "node1_2" }
    ]
  },
  "node1_1": {
    "question": "葉の分裂度と裂片の密度",
    "options": [
      { "text": "葉は<span class=\"key-term\">羽状浅〜深裂</span>。裂片は接近してつく", "next": "nodeA" },
      { "text": "羽片は<span class=\"key-term\">羽状深裂</span>し，裂片はかなりへだたってつく", "next": "node1_1_2" }
    ]
  },
  "nodeA": {
    "question": "根茎の向きと葉の出方",
    "options": [
      { "text": "根茎は<span class=\"key-term\">直立して</span>，葉を束状に出す", "next": "nodeA1" },
      { "text": "根茎ははい，葉は<span class=\"key-term\">かなりまばらに</span>出る", "next": "nodeA2" }
    ]
  },
  "nodeA1": {
    "question": "下部の羽片の縮小",
    "options": [
      { "text": "下部の羽片は<span class=\"key-term\">短縮しない</span>", "result": "ヒュウガシケシダ" },
      { "text": "下部の羽片は<span class=\"key-term\">いちじるしく短縮する</span>", "result": "ミヤマシケシダ" }
    ]
  },
  "nodeA2": {
    "question": "葉の質と表面の毛，羽片基部",
    "options": [
      { "text": "葉は<span class=\"key-term\">洋紙質</span>，表面ほぼ無毛，羽片の基部は狭くなる", "result": "アソシケシダ" },
      { "text": "葉は<span class=\"key-term\">草質</span>，表面に多細胞毛がある。羽片の基部は狭くならない", "next": "nodeA2_2" }
    ]
  },
  "nodeA2_2": {
    "question": "若い包膜の縁の形",
    "options": [
      { "text": "若い包膜の縁は<span class=\"key-term\">毛状に細裂する</span>", "next": "nodeA2_2_1" },
      { "text": "包膜の縁は<span class=\"key-term\">全縁</span>。胞子をつける葉は40〜90cm", "next": "nodeA2_2_2" }
    ]
  },
  "nodeA2_2_1": {
    "question": "葉の形と大きさ・2形性",
    "options": [
      { "text": "葉は<span class=\"key-term\">2形</span>。胞子葉は細長く直立。葉柄はやや太く柔らかい", "result": "ホソバシケシダ" },
      { "text": "葉は<span class=\"key-term\">2形</span>。胞子葉は細長く直立。葉柄はほそく硬い", "result": "フモトシケシダ" },
      { "text": "葉はほぼ<span class=\"key-term\">同形</span>。葉はネクタイ形，<span class=\"key-term\">長さ10〜15cm</span>ほど", "result": "コシケシダ" },
      { "text": "葉はほぼ<span class=\"key-term\">同形</span>。葉は広いネクタイ形，<span class=\"key-term\">長さ15〜35cm</span>ほど", "result": "ナチシケシダ" },
      { "text": "葉はほぼ<span class=\"key-term\">同形</span>。葉は<span class=\"key-term\">三角形，幅20cm</span>前後", "result": "ヒロハシケシダ" }
    ]
  },
  "nodeA2_2_2": {
    "question": "葉軸と葉柄の長毛の密度",
    "options": [
      { "text": "葉軸と葉柄の長毛は<span class=\"key-term\">まばら</span>", "result": "セイタカシケシダ" },
      { "text": "葉軸と葉柄には長毛が<span class=\"key-term\">密生する</span>", "result": "ムクゲシケシダ" }
    ]
  },
  "node1_1_2": {
    "question": "羽片の幅と小羽片の形",
    "options": [
      { "text": "羽片は幅<span class=\"key-term\">15〜25mm</span>，小羽片は鈍鋸歯縁", "result": "コウライイヌワラビ" },
      { "text": "羽片は幅<span class=\"key-term\">3〜4cm</span>，小羽片は浅〜中裂", "result": "オオメシダ" }
    ]
  },
  "node1_2": {
    "question": "根茎のはい方と葉の形",
    "options": [
      { "text": "根茎はやや細く<span class=\"key-term\">長くはう</span>。葉は卵状長楕円形〜長楕円形，2回羽状中〜深裂，葉柄と葉軸には黒い鱗片が多い", "result": "オオヘメワラビモドキ" },
      { "text": "根茎は太く<span class=\"key-term\">短くはう</span>。葉は三角形から三角状卵形，3回中〜深裂", "next": "node1_2_2" }
    ]
  },
  "node1_2_2": {
    "question": "小羽片の裂片の縁と小脈，羽軸の翼",
    "options": [
      { "text": "裂片は<span class=\"key-term\">全縁に近い</span>。小脈は単条。羽軸の翼は顕著", "result": "オオヒメワラビ" },
      { "text": "裂片は<span class=\"key-term\">鋸歯がめだつ</span>。小脈は2岐のものをまじえる。羽軸の翼はせまい", "result": "ミドリワラビ" }
    ]
  }
};