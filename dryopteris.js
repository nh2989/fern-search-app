/* dryopteris 検索ツリーデータ */
GENUS_TREES["dryopteris"] = {
  "start": {
    "id": "start",
    "question": "羽軸や小羽軸の下面の鱗片の形状",
    "options": [
      {
        "text": "基部が丸くふくれた<span class=\"key-term\">袋状の鱗片</span>がつく",
        "next": "node1"
      },
      {
        "text": "袋状の鱗片はつかない",
        "next": "node2"
      }
    ]
  },
  "node1": {
    "question": "最下羽片の下向第1小羽片の大きさ",
    "options": [
      {
        "text": "縮小する（単羽状のとき、ソーラスは中肋寄り）",
        "next": "node1_1"
      },
      {
        "text": "最大",
        "next": "node1_2"
      }
    ]
  },
  "node1_1": {
    "question": "葉の形態",
    "options": [
      {
        "text": "単羽状。羽片は鈍鋸歯縁から中裂程度",
        "result": "ナチクジャク"
      },
      {
        "text": "2回羽状から4回羽状複生",
        "next": "node1_1_1"
      }
    ]
  },
  "node1_1_1": {
    "question": "小羽片のつき方",
    "options": [
      {
        "text": "内（上）先につく",
        "result": "ムカシベニシダ"
      },
      {
        "text": "外（下）先につく",
        "next": "node1_1_1_1"
      }
    ]
  },
  "node1_1_1_1": {
    "question": "葉柄の鱗片の縁",
    "options": [
      {
        "text": "<span class=\"key-term\">顕著なギザギザ</span>がある",
        "next": "node1_1_1_1_1"
      },
      {
        "text": "突起がまばらに出るか、全縁",
        "next": "node1_1_1_1_2"
      }
    ]
  },
  "node1_1_1_1_1": {
    "question": "鱗片の密度とソーラスの位置",
    "options": [
      {
        "text": "葉柄から羽軸にかけて鱗片が<span class=\"key-term\">密生</span>。ソーラスは縁寄りから中間生",
        "result": "サイコクベニシダ"
      },
      {
        "text": "鱗片は<span class=\"key-term\">かなりまばら</span>。ソーラスは中間生、ときに中肋寄り",
        "result": "ギフベニシダ"
      }
    ]
  },
  "node1_1_1_1_2": {
    "question": "包膜の有無",
    "options": [
      {
        "text": "包膜が<span class=\"key-term\">ない</span>。ソーラスは葉の下部からつきはじめる",
        "result": "ヌカイタチシダ"
      },
      {
        "text": "包膜が<span class=\"key-term\">ある</span>。ソーラスは葉の上部からつきはじめる",
        "next": "node1_1_1_1_2_1"
      }
    ]
  },
  "node1_1_1_1_2_1": {
    "question": "ソーラスの位置",
    "options": [
      {
        "text": "中間生または辺寄り",
        "next": "node1_1_1_1_2_1_1"
      },
      {
        "text": "中肋寄り",
        "next": "node1_1_1_1_2_1_2"
      }
    ]
  },
  "node1_1_1_1_2_1_1": {
    "question": "羽片の柄と葉軸へのつき方",
    "options": [
      {
        "text": "羽片は<span class=\"key-term\">無柄</span>で、葉軸に直角またはほぼ直角につく。葉軸と羽軸には袋状鱗片が多い",
        "next": "node1_1_1_1_2_1_1_1"
      },
      {
        "text": "羽片は<span class=\"key-term\">小柄</span>があり、葉軸と傾いてつく。袋状鱗片はごくまばら。葉面は浅緑色ー黄緑色",
        "result": "オオベニシダ"
      }
    ]
  },
  "node1_1_1_1_2_1_1_1": {
    "question": "ソーラスの位置と葉柄・葉軸の色",
    "options": [
      {
        "text": "ソーラスは<span class=\"key-term\">辺寄りからやや中間生</span>。葉柄と葉軸、若葉は<span class=\"key-term\">美しい紫色</span>。鱗片は黒い",
        "result": "ムラサキベニシダ"
      },
      {
        "text": "ソーラスは<span class=\"key-term\">中間生</span>。葉柄と葉軸は紫色でない",
        "next": "node1_1_1_1_2_1_1_1_1"
      }
    ]
  },
  "node1_1_1_1_2_1_1_1_1": {
    "question": "葉柄基部の鱗片の色と形",
    "options": [
      {
        "text": "黒色ー黒褐色で、<span class=\"key-term\">ほそいネクタイ形</span>",
        "result": "ヌカイタチシダモドキ"
      },
      {
        "text": "褐色ー淡褐色で、<span class=\"key-term\">広いネクタイ形</span>",
        "next": "node1_1_1_1_2_1_1_1_1_1"
      }
    ]
  },
  "node1_1_1_1_2_1_1_1_1_1": {
    "question": "葉柄から羽軸の鱗片の密度",
    "options": [
      {
        "text": "葉柄の上部から羽軸にかけて鱗片は<span class=\"key-term\">まばら</span>",
        "next": "node1_1_1_1_2_1_1_1_1_1_1"
      },
      {
        "text": "葉柄から葉軸には鱗片が<span class=\"key-term\">密生</span>する",
        "result": "アツギノヌカイタチシダマガイ"
      }
    ]
  },
  "node1_1_1_1_2_1_1_1_1_1_1": {
    "question": "小羽片のつき方と包膜の色",
    "options": [
      {
        "text": "小羽片は羽軸に<span class=\"key-term\">傾いて</span>つく。包膜は<span class=\"key-term\">必ず赤い</span>",
        "result": "オワセベニシダ"
      },
      {
        "text": "小羽片は羽軸に<span class=\"key-term\">直角</span>につく。包膜はふつう灰白色",
        "result": "ヌカイタチシダマガイ"
      }
    ]
  },
  "node1_1_1_1_2_1_2": {
    "question": "小羽片と葉柄鱗片の形態",
    "options": [
      {
        "text": "小羽片は<span class=\"key-term\">円頭から鈍頭</span>。葉柄の鱗片は<span class=\"key-term\">赤褐色</span>",
        "next": "node1_1_1_1_2_1_2_1"
      },
      {
        "text": "小羽片は<span class=\"key-term\">鋭頭</span>、ときに鈍頭。葉柄の鱗片は<span class=\"key-term\">暗褐色</span>",
        "next": "node1_1_1_1_2_1_2_2"
      }
    ]
  },
  "node1_1_1_1_2_1_2_1": {
    "question": "小羽片や羽片のつき方",
    "options": [
      {
        "text": "軸に<span class=\"key-term\">傾いて</span>つく",
        "result": "マルバベニシダ"
      },
      {
        "text": "軸に<span class=\"key-term\">直角</span>につく",
        "result": "マルバヌカイタチシダモドキ"
      }
    ]
  },
  "node1_1_1_1_2_1_2_2": {
    "question": "葉先の形と最下羽片の下向第1小羽片の裂け方",
    "options": [
      {
        "text": "葉先は<span class=\"key-term\">漸尖</span>し、尾状にならない。最下羽片の下向第1小羽片は鋸歯縁から浅裂程度",
        "result": "ベニシダ"
      },
      {
        "text": "葉先は<span class=\"key-term\">尾状</span>。下向第1小羽片はふつう中ー深裂する",
        "next": "node1_1_1_1_2_1_2_2_1"
      }
    ]
  },
  "node1_1_1_1_2_1_2_2_1": {
    "question": "小羽片の形と包膜の色",
    "options": [
      {
        "text": "小羽片は<span class=\"key-term\">ほそいネクタイ形から線形</span>。包膜はふつう<span class=\"key-term\">赤い</span>",
        "next": "node1_1_1_1_2_1_2_2_1_1"
      },
      {
        "text": "小羽片は<span class=\"key-term\">広いネクタイ形</span>。包膜はふつう<span class=\"key-term\">灰白色</span>",
        "result": "トウゴクシダ"
      }
    ]
  },
  "node1_1_1_1_2_1_2_2_1_1": {
    "question": "羽片の先端と下向小羽片の裂け方",
    "options": [
      {
        "text": "羽片の先は<span class=\"key-term\">急に尾状</span>となる。下向小羽片は<span class=\"key-term\">深裂</span>する",
        "result": "ハチジョウベニシダ"
      },
      {
        "text": "羽片の先は<span class=\"key-term\">鋭尖頭</span>。下向小羽片は<span class=\"key-term\">中裂程度</span>",
        "result": "ホコザキベニシダ"
      }
    ]
  },
  "node1_2": {
    "question": "葉の質",
    "options": [
      {
        "text": "洋紙質",
        "next": "node1_2_1"
      },
      {
        "text": "厚く、革質",
        "next": "node1_2_2"
      }
    ]
  },
  "node1_2_1": {
    "question": "葉柄の鱗片と包膜の色",
    "options": [
      {
        "text": "葉柄の鱗片は<span class=\"key-term\">褐色</span>。包膜は<span class=\"key-term\">赤い</span>",
        "result": "オワセベニシダ"
      },
      {
        "text": "葉柄の鱗片は<span class=\"key-term\">黒褐色</span>。包膜は<span class=\"key-term\">灰白色</span>",
        "result": "タカサゴシダ"
      }
    ]
  },
  "node1_2_2": {
    "question": "鱗片の向き",
    "options": [
      {
        "text": "鱗片は<span class=\"key-term\">開出</span>する",
        "result": "イワイタチシダ"
      },
      {
        "text": "鱗片は<span class=\"key-term\">斜上</span>する",
        "next": "node1_2_2_1"
      }
    ]
  },
  "node1_2_2_1": {
    "question": "葉柄下部の鱗片の色",
    "options": [
      {
        "text": "葉柄下部の鱗片に<span class=\"key-term\">赤褐色のもの</span>がある。羽片は深ー全裂し、基部から中央部まで両側平行",
        "result": "ナンカイイタチシダ"
      },
      {
        "text": "葉柄の鱗片は黒色から黒褐色",
        "next": "node1_2_2_1_1"
      }
    ]
  },
  "node1_2_2_1_1": {
    "question": "葉柄の鱗片の縁と最下羽片の柄の長さ",
    "options": [
      {
        "text": "葉柄の鱗片は<span class=\"key-term\">黒色</span>で、縁に<span class=\"key-term\">白い部分</span>がある。最下羽片の柄は<span class=\"key-term\">長い</span>",
        "result": "ヒメイタチシダ"
      },
      {
        "text": "葉柄の鱗片に白い縁どりはない。最下羽片の柄はやや短い",
        "next": "node1_2_2_1_1_1"
      }
    ]
  },
  "node1_2_2_1_1_1": {
    "question": "葉柄の鱗片の色と葉身の形、最下第1小羽片の長さ",
    "options": [
      {
        "text": "葉柄の鱗片は<span class=\"key-term\">黒褐色</span>。葉身は<span class=\"key-term\">広卵形から卵形</span>。最下第1小羽片は<span class=\"key-term\">とくに長い</span>",
        "result": "オオイタチシダ"
      },
      {
        "text": "葉柄の鱗片は<span class=\"key-term\">黒褐色から褐色</span>。最下第1小羽片等は<span class=\"key-term\">等長もしくはやや長い</span>",
        "result": "シビイタチシダ"
      },
      {
        "text": "葉柄の鱗片は<span class=\"key-term\">ほぼ黒色</span>。葉身は<span class=\"key-term\">長卵形から卵状楕円形</span>。最下第1小羽片は<span class=\"key-term\">やや長いか、顕著に長い</span>",
        "result": "ヤマイタチシダ"
      }
    ]
  },
  "node2": {
    "question": "最下羽片の下向第1小羽片の大きさ（袋状鱗片なしグループ）",
    "options": [
      {
        "text": "最大",
        "next": "node2_1"
      },
      {
        "text": "等長または縮小",
        "next": "node2_2"
      }
    ]
  },
  "node2_1": {
    "question": "鱗片の形態と圧着度",
    "options": [
      {
        "text": "鱗片は<span class=\"key-term\">ほそく</span>、柄から羽軸まで<span class=\"key-term\">密に圧着</span>する。最下羽片の柄は長い",
        "next": "node2_1_1"
      },
      {
        "text": "鱗片はあまり圧着しない",
        "next": "node2_1_2"
      }
    ]
  },
  "node2_1_1": {
    "question": "包膜の大きさと鱗片の色",
    "options": [
      {
        "text": "包膜は<span class=\"key-term\">大きく</span>、永くのこる。鱗片は<span class=\"key-term\">黒褐色</span>",
        "result": "ヨゴレイタチシダ"
      },
      {
        "text": "包膜は<span class=\"key-term\">小さく</span>、めだたない。鱗片は<span class=\"key-term\">褐色</span>",
        "result": "ニセヨゴレイタチシダ"
      }
    ]
  },
  "node2_1_2": {
    "question": "鱗片の色と幅、胞子をつける葉の形",
    "options": [
      {
        "text": "鱗片は<span class=\"key-term\">褐色</span>で、<span class=\"key-term\">広い</span>。胞子をつける葉は<span class=\"key-term\">卵状長楕円形</span>",
        "result": "ミヤマイタチシダ"
      },
      {
        "text": "鱗片は<span class=\"key-term\">黒褐色</span>で、<span class=\"key-term\">狭い</span>。葉はすべて<span class=\"key-term\">五角形</span>",
        "result": "ミサキカグマ"
      }
    ]
  },
  "node2_2": {
    "question": "鱗片の縁と小羽片の独立性",
    "options": [
      {
        "text": "鱗片の縁には<span class=\"key-term\">顕著なギザギザ</span>がある。小羽片は<span class=\"key-term\">多く独立</span>する",
        "result": "ギフベニシダ"
      },
      {
        "text": "鱗片は<span class=\"key-term\">全縁</span>、もしくはまばらに突起がでる。小羽片は<span class=\"key-term\">羽片基部のものだけ独立</span>する",
        "next": "node2_2_1"
      }
    ]
  },
  "node2_2_1": {
    "question": "葉柄の鱗片の色とソーラスのつく羽片",
    "options": [
      {
        "text": "葉柄の鱗片は<span class=\"key-term\">黒褐色から黒色</span>。ソーラスのつく羽片は縮小しない",
        "next": "node2_2_1_1"
      },
      {
        "text": "葉柄の鱗片は<span class=\"key-term\">赤褐色</span>。ソーラスのつく羽片は縮小する",
        "result": "クマワラビ"
      }
    ]
  },
  "node2_2_1_1": {
    "question": "羽片の数と腺毛、ソーラスの位置",
    "options": [
      {
        "text": "羽片は約<span class=\"key-term\">10対</span>。<span class=\"key-term\">短腺毛</span>をもつ。ソーラスは<span class=\"key-term\">裏全体</span>につく",
        "result": "メズラシクマワラビ"
      },
      {
        "text": "大きな羽片は<span class=\"key-term\">12−20対</span>。<span class=\"key-term\">腺毛がない</span>。ソーラスは<span class=\"key-term\">葉の上部</span>につく",
        "result": "オクマワラビ"
      }
    ]
  }
};
