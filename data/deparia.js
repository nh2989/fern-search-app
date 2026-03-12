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
      { "text": "ソーラスは<span class=\"key-term\">細長い</span>", "next": "node1_1" },
      { "text": "ソーラスは<span class=\"key-term\">短く馬蹄形</span>", "next": "node1_2" }
    ]
  },
  "node1_1": {
    "question": "葉の分裂度と羽片の形",
    "options": [
      { "text": "葉は<span class=\"key-term\">羽状浅〜深裂</span>。深裂の場合，裂片は接近してつく", "next": "node1_1_1" },
      { "text": "羽片は<span class=\"key-term\">羽状深裂し</span>，裂片はかなりへだたってつく", "next": "node1_1_2" }
    ]
  },
  "node1_1_1": {
    "question": "根茎の向きと下部羽片の縮小",
    "options": [
      { "text": "根茎は<span class=\"key-term\">直立して</span>，葉を束状に出す", "next": "node1_1_1_1" },
      { "text": "根茎ははい，葉は<span class=\"key-term\">かなりまばらに</span>出る", "next": "node1_1_1_2" }
    ]
  },
  "node1_1_1_1": {
    "question": "下部の羽片の縮小",
    "options": [
      { "text": "下部の羽片は<span class=\"key-term\">短縮しない</span>", "result": "ヒュウガシケシダ" },
      { "text": "下部の羽片は<span class=\"key-term\">いちじるしく短縮する</span>", "result": "ミヤマシケシダ" }
    ]
  },
  "node1_1_1_2": {
    "question": "葉の質と表面の毛，羽片基部",
    "options": [
      { "text": "葉は<span class=\"key-term\">洋紙質</span>，表面ほぼ無毛，羽片の基部は狭くなる", "result": "アソシケシダ" },
      { "text": "葉は<span class=\"key-term\">草質</span>，表面に多細胞毛がある。羽片の基部は狭くならない", "next": "node1_1_1_2_2" }
    ]
  },
  "node1_1_1_2_2": {
    "question": "若い包膜の縁の形と葉の長さ",
    "options": [
      { "text": "若い包膜の縁は<span class=\"key-term\">毛状に細裂する</span>。葉は葉柄を含め長さ40cmほど", "next": "node1_1_1_2_2_1" },
      { "text": "包膜の縁は<span class=\"key-term\">全縁</span>。胞子をつける葉は葉柄を含め40〜90cm", "next": "node1_1_1_2_2_2" }
    ]
  },
  "node1_1_1_2_2_1": {
    "question": "包膜の表面の毛",
    "options": [
      { "text": "包膜の表面は<span class=\"key-term\">無毛</span>", "next": "node_deparia_hosoba" },
      { "text": "若い包膜の縁は毛状に細裂する。葉は葉柄を含め長さ40cmほど。包膜表面：次の選択肢へ", "next": "node1_1_1_2_2" }
    ]
  },
  "node_deparia_hosoba": {
    "question": "葉がはっきり2形か，葉柄の太さ",
    "options": [
      { "text": "葉ははっきりと<span class=\"key-term\">2形となり</span>，胞子をつける葉は細長く直立する。葉柄はやや太くて柔らかい", "result": "ホソバシケシダ" },
      { "text": "葉ははっきり2形とならず。葉柄は<span class=\"key-term\">ほそくて，やや硬い</span>", "result": "フモトシケシダ" }
    ]
  },
  "node1_1_1_2_2_2": {
    "question": "葉軸と葉柄の長毛の密度",
    "options": [
      { "text": "葉軸と葉柄の長毛は<span class=\"key-term\">まばらである</span>", "result": "セイタカシケシダ" },
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
    "question": "根茎と葉の形，鱗片",
    "options": [
      { "text": "根茎はやや細く長くはう。葉は卵状長楕円形〜長楕円形，<span class=\"key-term\">2回羽状中〜深裂</span>，葉柄と葉軸には黒い鱗片が多くのこる", "result": "オオヘメワラビモドキ" },
      { "text": "根茎は太く，短くはう。葉は三角形から三角状卵形，<span class=\"key-term\">3回中〜深裂</span>", "next": "node1_2_2" }
    ]
  },
  "node1_2_2": {
    "question": "小羽片の裂片の縁と小脈，羽軸の翼",
    "options": [
      { "text": "小羽片の裂片は<span class=\"key-term\">全縁に近い</span>。小脈は単条。羽軸の翼は顕著", "result": "オオヒメワラビ" },
      { "text": "小羽片の裂片は<span class=\"key-term\">鋸歯がめだつ</span>。小脈は2岐のものをまじえる。羽軸の翼はせまい", "result": "ミドリワラビ" }
    ]
  }
};
