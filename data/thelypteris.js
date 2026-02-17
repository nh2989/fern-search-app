/* thelypteris 検索ツリーデータ */
GENUS_TREES["thelypteris"] = {
  "start": {
    "id": "start",
    "question": "葉脈の状態",
    "options": [
      {
        "text": "葉脈は<span class=\"key-term\">すべて遊離</span>",
        "next": "node1"
      },
      {
        "text": "葉脈は少なくとも一部で<span class=\"key-term\">結合</span>する",
        "next": "node2"
      }
    ]
  },
  "node1": {
    "question": "包膜の有無",
    "options": [
      {
        "text": "包膜が<span class=\"key-term\">ない</span>",
        "next": "node1_1"
      },
      {
        "text": "包膜が<span class=\"key-term\">ある</span>",
        "next": "node1_2"
      }
    ]
  },
  "node1_1": {
    "question": "葉身上部をのぞく中軸の翼",
    "options": [
      {
        "text": "中軸に<span class=\"key-term\">翼がない</span>",
        "next": "node1_1_1"
      },
      {
        "text": "羽片の基部が中軸に流れて<span class=\"key-term\">翼をつくる</span>",
        "next": "node1_1_2"
      }
    ]
  },
  "node1_1_1": {
    "question": "羽片基部の通気孔",
    "options": [
      {
        "text": "羽片基部に<span class=\"key-term\">通気孔がない</span>",
        "result": "タチヒメワラビ"
      },
      {
        "text": "<span class=\"key-term\">通気孔がある</span>",
        "result": "ミゾシダモドキ"
      }
    ]
  },
  "node1_1_2": {
    "question": "葉身の形と羽片の数",
    "options": [
      {
        "text": "葉身は<span class=\"key-term\">広いネクタイ形</span>。羽片は10対以上",
        "result": "ゲジゲジシダ"
      },
      {
        "text": "葉身は<span class=\"key-term\">五角形ー三角状卵形</span>。羽片は10対以下",
        "result": "ミヤマワラビ"
      }
    ]
  },
  "node1_2": {
    "question": "羽片の基部裏側に通気孔があるか",
    "options": [
      {
        "text": "<span class=\"key-term\">通気孔がある</span>",
        "next": "node1_2_1"
      },
      {
        "text": "<span class=\"key-term\">通気孔がない</span>",
        "next": "node1_2_2"
      }
    ]
  },
  "node1_2_1": {
    "question": "葉の長さと葉柄の色",
    "options": [
      {
        "text": "葉の長さ<span class=\"key-term\">1m以下</span>。葉柄は多少とも<span class=\"key-term\">緑色</span>をおびる",
        "result": "イブキシダ"
      },
      {
        "text": "葉の長さ<span class=\"key-term\">1.5−2m</span>。葉柄は<span class=\"key-term\">褐色</span>",
        "result": "オオイブキシダ"
      }
    ]
  },
  "node1_2_2": {
    "question": "小脈が葉縁に達するか",
    "options": [
      {
        "text": "小脈は<span class=\"key-term\">葉縁に達しない</span>",
        "next": "node1_2_2_1"
      },
      {
        "text": "小脈は<span class=\"key-term\">葉縁に達する</span>",
        "next": "node1_2_2_2"
      }
    ]
  },
  "node1_2_2_1": {
    "question": "葉の形態と分裂度",
    "options": [
      {
        "text": "葉は単羽状複生。羽片は浅ー深裂する",
        "result": "ヤワラシダ"
      },
      {
        "text": "葉は2−4回羽状複生",
        "next": "node1_2_2_1_1"
      }
    ]
  },
  "node1_2_2_1_1": {
    "question": "根茎の長さと葉身の形",
    "options": [
      {
        "text": "根茎は<span class=\"key-term\">長くはう</span>。葉身は三角形ー長三角形、中型",
        "next": "node1_2_2_1_1_1"
      },
      {
        "text": "根茎は<span class=\"key-term\">短く斜上</span>する。葉身は卵形ー広卵形、大型",
        "next": "node1_2_2_1_1_2"
      }
    ]
  },
  "node1_2_2_1_1_1": {
    "question": "葉柄の毛と葉面の色",
    "options": [
      {
        "text": "葉柄は<span class=\"key-term\">ネズミ色</span>で、短毛を密生。葉身は<span class=\"key-term\">三角形</span>",
        "result": "ヨコグラヒメワラビ"
      },
      {
        "text": "葉柄は<span class=\"key-term\">淡緑色</span>。毛は上部の前面にしかない",
        "result": "ツクシヤワラシダ"
      }
    ]
  },
  "node1_2_2_1_1_2": {
    "question": "葉面の色と小羽片の柄",
    "options": [
      {
        "text": "葉は<span class=\"key-term\">鮮緑色</span>。小羽片には<span class=\"key-term\">短い柄</span>がつく",
        "result": "ミドリヒメワラビ"
      },
      {
        "text": "葉は<span class=\"key-term\">黄緑色か緑色</span>。小羽片は<span class=\"key-term\">無柄</span>",
        "next": "node1_2_2_1_1_2_1"
      }
    ]
  },
  "node1_2_2_1_1_2_1": {
    "question": "葉裏の毛の長さ",
    "options": [
      {
        "text": "葉裏の毛は<span class=\"key-term\">一細胞長で短い</span>",
        "result": "ヒメワラビ"
      },
      {
        "text": "葉裏の毛は<span class=\"key-term\">2−5細胞からなり、長い</span>",
        "result": "アラゲヒメワラビ"
      }
    ]
  },
  "node1_2_2_2": {
    "question": "小脈の分岐",
    "options": [
      {
        "text": "小脈は<span class=\"key-term\">二叉するもの</span>がある",
        "next": "node1_2_2_2_1"
      },
      {
        "text": "小脈は<span class=\"key-term\">単条</span>",
        "next": "node1_2_2_2_2"
      }
    ]
  },
  "node1_2_2_2_1": {
    "question": "根茎と葉の下部羽片",
    "options": [
      {
        "text": "根茎は<span class=\"key-term\">長くはう</span>。葉の下部の羽片は縮小しない",
        "result": "ヒメシダ"
      },
      {
        "text": "根茎は<span class=\"key-term\">短くはう</span>。葉の下部の羽片はいちじるしく縮小する",
        "result": "オオバショリマ"
      }
    ]
  },
  "node1_2_2_2_2": {
    "question": "葉の下部の羽片の縮小",
    "options": [
      {
        "text": "葉の下部の羽片は<span class=\"key-term\">いちじるしく縮小</span>する",
        "next": "node1_2_2_2_2_1"
      },
      {
        "text": "下部の羽片は<span class=\"key-term\">ほとんど縮小しない</span>",
        "next": "node1_2_2_2_2_2"
      }
    ]
  },
  "node1_2_2_2_2_1": {
    "question": "根茎の長さとソーラスの位置",
    "options": [
      {
        "text": "根茎は<span class=\"key-term\">長くはう</span>。ソーラスは<span class=\"key-term\">葉縁寄り</span>につく",
        "result": "ホソバショリマ"
      },
      {
        "text": "根茎は<span class=\"key-term\">太く短くはう</span>。ソーラスは<span class=\"key-term\">中肋寄り</span>につく",
        "result": "ニッコウシダ"
      }
    ]
  },
  "node1_2_2_2_2_2": {
    "question": "葉柄最基部の毛と包膜",
    "options": [
      {
        "text": "葉柄の最基部には<span class=\"key-term\">長毛が密生</span>する。根茎はやや太く短くはう",
        "result": "オオハシゴシダ"
      },
      {
        "text": "葉柄には短毛と基部に鱗片がある。根茎は細長くはう",
        "next": "node1_2_2_2_2_2_1"
      }
    ]
  },
  "node1_2_2_2_2_2_1": {
    "question": "包膜の大きさと表面の毛",
    "options": [
      {
        "text": "包膜は径<span class=\"key-term\">1mm</span>。葉は柔らかい。夏緑性",
        "next": "node1_2_2_2_2_2_1_1"
      },
      {
        "text": "包膜は径<span class=\"key-term\">0.5mm</span>。葉はやや硬く、光沢がある。常緑性",
        "next": "node1_2_2_2_2_2_1_2"
      }
    ]
  },
  "node1_2_2_2_2_2_1_1": {
    "question": "包膜の背面の毛",
    "options": [
      {
        "text": "包膜の背は<span class=\"key-term\">有毛</span>",
        "result": "ハリガネワラビ"
      },
      {
        "text": "包膜の背は<span class=\"key-term\">無毛</span>",
        "result": "イワハリガネワラビ"
      }
    ]
  },
  "node1_2_2_2_2_2_1_2": {
    "question": "葉の大きさと羽片の形",
    "options": [
      {
        "text": "葉は小さく、ほとんど無毛。羽片は<span class=\"key-term\">卵形−斜卵形</span>で、基部に1−3対の裂片がある",
        "result": "ヒメハシゴシダ"
      },
      {
        "text": "葉は長さ10cm以上、有毛。羽片は<span class=\"key-term\">長三角形からネクタイ形</span>。裂片は6対以上",
        "next": "node1_2_2_2_2_2_1_2_1"
      }
    ]
  },
  "node1_2_2_2_2_2_1_2_1": {
    "question": "羽片の形と先端",
    "options": [
      {
        "text": "羽片は<span class=\"key-term\">長三角形</span>、<span class=\"key-term\">鋭−鈍頭</span>。最下前側の裂片は独立する",
        "result": "コハシゴシダ"
      },
      {
        "text": "羽片は<span class=\"key-term\">ネクタイ形</span>、<span class=\"key-term\">鋭尖頭からやや尾状</span>。裂片は独立しない",
        "result": "ハシゴシダ"
      }
    ]
  },
  "node2": {
    "question": "羽片の基部の形とソーラスの位置",
    "options": [
      {
        "text": "各羽片は<span class=\"key-term\">基部がせばまり</span>、ソーラスは<span class=\"key-term\">辺寄り</span>につく",
        "result": "テツホシダ"
      },
      {
        "text": "各羽片の基部はせばまらない",
        "next": "node2_1"
      }
    ]
  },
  "node2_1": {
    "question": "下部羽片の縮小度",
    "options": [
      {
        "text": "下部の1−2対の羽片は<span class=\"key-term\">いちじるしく縮小</span>する",
        "result": "クシノハシダ"
      },
      {
        "text": "下部の羽片は縮小しないか、ゆっくり縮小する",
        "next": "node2_1_1"
      }
    ]
  },
  "node2_1_1": {
    "question": "根茎の長さと最下羽片の長さ",
    "options": [
      {
        "text": "根茎は<span class=\"key-term\">短く、斜上から直立</span>。最下羽片は中央の羽片の1/2−1/3",
        "result": "イヌケホシダ"
      },
      {
        "text": "根茎は<span class=\"key-term\">長くはう</span>。最下羽片は中央の羽片と等長またはやや短い",
        "next": "node2_1_1_1"
      }
    ]
  },
  "node2_1_1_1": {
    "question": "葉面の毛の多さ",
    "options": [
      {
        "text": "葉面の毛は<span class=\"key-term\">短くて少ないか、見かけ上無毛状</span>",
        "result": "ホシダ"
      },
      {
        "text": "葉面の毛は<span class=\"key-term\">白くて長い</span>から、葉面はビロード状",
        "result": "ケホシダ"
      }
    ]
  }
};
