GENUS_TREES["woodsia"] = {
  "start": {
    "question": "包膜の形と葉柄の関節",
    "options": [
      { "text": "包膜は<span class=\"key-term\">球状のふくろ形</span>，辺毛を欠く。葉柄に関節がない", "result": "フクロシダ" },
      { "text": "包膜は<span class=\"key-term\">皿形からカップ形</span>で，辺毛がある", "next": "node1" }
    ]
  },
  "node1": {
    "question": "関節の位置",
    "options": [
      { "text": "葉柄の<span class=\"key-term\">途中</span>に関節がある", "next": "node1_1" },
      { "text": "関節は葉柄の<span class=\"key-term\">頂端</span>にある", "next": "node1_2" }
    ]
  },
  "node1_1": {
    "question": "鱗片の分布範囲",
    "options": [
      { "text": "鱗片は<span class=\"key-term\">葉柄から葉裏にわたって</span>つく", "next": "node1_1_1" },
      { "text": "鱗片は<span class=\"key-term\">葉柄基部だけ</span>で，他の部分は裸出", "next": "node1_1_2" }
    ]
  },
  "node1_1_1": {
    "question": "関節の位置と葉の分裂度",
    "options": [
      { "text": "柄の<span class=\"key-term\">上部</span>に関節がある。葉は2回羽状中〜深裂", "result": "ヒメデンダ" },
      { "text": "柄の<span class=\"key-term\">下部</span>に関節がある。葉は2回羽状複生", "result": "ミヤマイワデンダ" }
    ]
  },
  "node1_1_2": {
    "question": "鱗片の縁と包膜の裂け方",
    "options": [
      { "text": "鱗片には<span class=\"key-term\">歯牙がある</span>。包膜は不規則に4〜5裂し，先は辺毛状にきれる", "result": "ケンザンデンダ" },
      { "text": "鱗片は<span class=\"key-term\">全縁</span>。包膜は中心まで毛状に切れる", "result": "トガクシデンダ" }
    ]
  },
  "node1_2": {
    "question": "中〜上部の羽片と中軸への流れ",
    "options": [
      { "text": "中〜上部の羽片は<span class=\"key-term\">中軸に流れて独立しない</span>", "next": "node1_2_1" },
      { "text": "羽片は葉の最上部のものを除いて<span class=\"key-term\">独立する</span>", "next": "node1_2_2" }
    ]
  },
  "node1_2_1": {
    "question": "中軸と羽片の毛と鱗片",
    "options": [
      { "text": "中軸と羽片には<span class=\"key-term\">毛だけで鱗片を欠く</span>", "result": "コガネシダ" },
      { "text": "中軸と羽片の裏には<span class=\"key-term\">毛と鱗片がある</span>", "result": "イヌイワデンダ" }
    ]
  },
  "node1_2_2": {
    "question": "羽片の分裂度",
    "options": [
      { "text": "羽片は<span class=\"key-term\">浅〜中裂する</span>", "result": "キタダケデンダ" },
      { "text": "羽片は<span class=\"key-term\">全縁から浅い鋸歯縁</span>", "result": "イワデンダ" }
    ]
  }
};
