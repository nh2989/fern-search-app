GENUS_TREES["diplazium"] = {
  "start": {
    "question": "葉脈の結合",
    "options": [
      { "text": "葉脈の一部は<span class=\"key-term\">網状に結合する</span>", "result": "クワレシダ" },
      { "text": "葉脈は<span class=\"key-term\">すべて遊離</span>", "next": "node1" }
    ]
  },
  "node1": {
    "question": "葉の分裂度",
    "options": [
      { "text": "葉は<span class=\"key-term\">単葉または下部のみ全裂</span>，鋸歯縁から深裂", "next": "node1_1" },
      { "text": "葉は<span class=\"key-term\">単羽状複生</span>", "next": "node1_2" },
      { "text": "葉は<span class=\"key-term\">2回羽状複生またはそれ以上</span>に細かく分裂する", "next": "node1_3" }
    ]
  },
  "node1_1": {
    "question": "葉の裂け方",
    "options": [
      { "text": "葉は<span class=\"key-term\">全縁から鋸歯縁</span>", "result": "ヘラシダ" },
      { "text": "葉は下部<span class=\"key-term\">羽状に深〜全裂する</span>", "result": "ノコギリヘラシダ" }
    ]
  },
  "node1_2": {
    "question": "頂羽片と羽片基部の耳垂",
    "options": [
      { "text": "<span class=\"key-term\">頂羽片が独立する</span>", "result": "フクレギシダ" },
      { "text": "頂羽片がなく，<span class=\"key-term\">羽片基部に著しい耳垂がある</span>", "next": "node1_2_1" },
      { "text": "頂羽片がなく，<span class=\"key-term\">羽片に耳垂がないかはっきりしない</span>", "next": "node1_2_2" }
    ]
  },
  "node1_2_1": {
    "question": "上部の羽片と葉の質，独立羽片の数",
    "options": [
      { "text": "上部の羽片は中軸に<span class=\"key-term\">流れつく</span>。葉は草質。独立羽片は10対以下", "result": "イヨクジャク" },
      { "text": "上部の羽片も<span class=\"key-term\">中軸に流れない</span>。葉は洋紙質", "next": "node1_2_1_2" }
    ]
  },
  "node1_2_1_2": {
    "question": "独立羽片の数と羽片の先・長さ",
    "options": [
      { "text": "独立羽片<span class=\"key-term\">10〜15対</span>，羽片は尾状鋭尖頭，長さ5〜10cm", "result": "ノコギリシダ" },
      { "text": "独立羽片は<span class=\"key-term\">10対以下</span>，羽片は鈍頭，長さ2〜4cm", "result": "ヒメノコギリシダ" }
    ]
  },
  "node1_2_2": {
    "question": "葉の質と季節性",
    "options": [
      { "text": "葉は<span class=\"key-term\">厚い洋紙質，常緑性</span>。羽片はほそいネクタイ形，ソーラスは中肋の各側に1列", "result": "ホソバノコギリシダ" },
      { "text": "葉は<span class=\"key-term\">厚い洋紙質，常緑性</span>。羽片はネクタイ形，ソーラスは中肋の各側に2列以上", "result": "ミヤマノコギリシダ" },
      { "text": "葉は<span class=\"key-term\">草質で柔らかく，夏緑性</span>", "result": "ウスバミヤマノコギリシダ" }
    ]
  },
  "node1_3": {
    "question": "葉柄と葉軸の色・光沢と鱗片の透明度",
    "options": [
      { "text": "葉柄と葉軸は<span class=\"key-term\">赤褐色で光沢がある</span>。葉柄基部の鱗片は透明質", "result": "ヌリワラビ" },
      { "text": "葉柄はそのようでない。葉柄基部の鱗片は<span class=\"key-term\">不透明</span>", "next": "node1_3_2" }
    ]
  },
  "node1_3_2": {
    "question": "包膜の縁の形",
    "options": [
      { "text": "包膜の縁は<span class=\"key-term\">不規則に細裂する</span>", "next": "node1_3_2_1" },
      { "text": "包膜は<span class=\"key-term\">全縁または深くソーラスを巻きこむ</span>", "next": "node1_3_2_2" }
    ]
  },
  "node1_3_2_1": {
    "question": "鱗片の多少と葉裏の毛",
    "options": [
      { "text": "葉柄と葉軸は<span class=\"key-term\">鱗片が多い</span>。葉裏は有毛", "result": "キタノミヤマシダ" },
      { "text": "葉柄基部以外には<span class=\"key-term\">鱗片がほとんどない</span>。葉裏は無毛", "next": "node1_3_2_1_2" }
    ]
  },
  "node1_3_2_1_2": {
    "question": "小羽片の分裂度と小脈",
    "options": [
      { "text": "小羽片は<span class=\"key-term\">深裂し</span>，小脈は2岐のものをまじえる", "result": "オニヒカゲワラビ" },
      { "text": "小羽片は<span class=\"key-term\">鋸歯縁〜中裂</span>，小脈はみな単条", "next": "node1_3_2_1_2_2" }
    ]
  },
  "node1_3_2_1_2_2": {
    "question": "鱗片の縁と根茎のはい方",
    "options": [
      { "text": "葉柄基部の鱗片には<span class=\"key-term\">黒縁がある</span>。根茎は直立", "result": "ヒロハノコギリシダ" },
      { "text": "鱗片には<span class=\"key-term\">黒縁がない</span>。根茎はははう", "result": "ヤクシマワラビ" }
    ]
  },
  "node1_3_2_2": {
    "question": "中軸の鱗片の多少と根茎のはい方",
    "options": [
      { "text": "中軸まで<span class=\"key-term\">鱗片が多い</span>", "next": "node1_3_2_2_1" },
      { "text": "鱗片は<span class=\"key-term\">葉柄の下部に集中</span>し，他はほとんど裸出", "next": "node1_3_2_2_2" }
    ]
  },
  "node1_3_2_2_1": {
    "question": "根茎のはい方と小羽片の分裂度",
    "options": [
      { "text": "根茎は<span class=\"key-term\">短くはう</span>。小羽片は浅〜深裂", "result": "キヨタキシダ" },
      { "text": "根茎は<span class=\"key-term\">長くはう</span>。小羽片は深〜全裂", "result": "ミヤマシダ" }
    ]
  },
  "node1_3_2_2_2": {
    "question": "葉柄基部の鱗片の色と多少",
    "options": [
      { "text": "葉柄基部の鱗片は<span class=\"key-term\">黒色で多数あり，宿存性</span>", "next": "node1_3_2_2_2_1" },
      { "text": "葉柄基部の鱗片は<span class=\"key-term\">少数で，ときに脱落性</span>。ソーラスは中間性", "result": "シロヤマシダ" }
    ]
  },
  "node1_3_2_2_2_1": {
    "question": "ソーラスの位置",
    "options": [
      { "text": "ソーラスは<span class=\"key-term\">中肋寄り</span>", "result": "オキナワコクモウクジャク" },
      { "text": "ソーラスは<span class=\"key-term\">中間性</span>", "result": "コクモウクジャク" },
      { "text": "ソーラスは<span class=\"key-term\">やや縁寄り</span>につく", "result": "ニセコクモウクジャク" }
    ]
  }
};
