/* polystichum 検索ツリーデータ */
GENUS_TREES["polystichum"] = {
  "start": {
    "id": "start",
    "question": "葉の先端の特徴",
    "options": [
      {
        "text": "一部の葉の先は<span class=\"key-term\">つる状に伸びて芽</span>をつける。葉は必ず単羽状複生",
        "next": "node1"
      },
      {
        "text": "葉は芽をつけても中軸上で、つる状には伸びない。葉は単羽状ー3回羽状",
        "next": "node2"
      }
    ]
  },
  "node1": {
    "question": "葉の長さと鱗片の圧着性",
    "options": [
      {
        "text": "葉長<span class=\"key-term\">25cm以上</span>。葉軸や葉裏の鱗片は<span class=\"key-term\">圧着性</span>。包膜は早落性",
        "result": "オリヅルシダ"
      },
      {
        "text": "葉長<span class=\"key-term\">20cm以下</span>のことが多い。鱗片は圧着しない。包膜は宿存性",
        "result": "ツルデンダ"
      }
    ]
  },
  "node2": {
    "question": "羽片や小羽片の左右対称性",
    "options": [
      {
        "text": "羽片は<span class=\"key-term\">ほぼ左右同形</span>。高所に生じる",
        "result": "タカネシダ"
      },
      {
        "text": "羽片や小羽片は<span class=\"key-term\">左右不対称</span>",
        "next": "node2_1"
      }
    ]
  },
  "node2_1": {
    "question": "葉の形態",
    "options": [
      {
        "text": "葉は<span class=\"key-term\">十字状に3岐</span>し、各部は単羽状",
        "result": "ジュウモンジシダ"
      },
      {
        "text": "葉は十字状にならず、単羽状",
        "next": "node2_1_1"
      }
    ]
  },
  "node2_1_1": {
    "question": "中軸に芽ができるか",
    "options": [
      {
        "text": "<span class=\"key-term\">中軸に芽ができる</span>",
        "result": "センジョウデンダ"
      },
      {
        "text": "中軸に芽はできない",
        "next": "node2_1_1_1"
      }
    ]
  },
  "node2_1_1_1": {
    "question": "生育地",
    "options": [
      {
        "text": "<span class=\"key-term\">高山</span>にはえる",
        "next": "node2_1_1_1_1"
      },
      {
        "text": "高山にはえない",
        "next": "node2_1_1_1_2"
      }
    ]
  },
  "node2_1_1_1_1": {
    "question": "葉の長さと羽片の形",
    "options": [
      {
        "text": "葉は長さ<span class=\"key-term\">4−8cm</span>。羽片は<span class=\"key-term\">深ー全裂</span>",
        "result": "イナデンダ"
      },
      {
        "text": "葉は長さ<span class=\"key-term\">15−35cm</span>。羽片は<span class=\"key-term\">刺状歯牙縁</span>",
        "result": "ヒイラギシダ"
      }
    ]
  },
  "node2_1_1_1_2": {
    "question": "葉柄の鱗片の形と羽片の裂け方",
    "options": [
      {
        "text": "葉柄の鱗片は<span class=\"key-term\">卵形ー長楕円形</span>で長さ10mmに達する。羽片は浅ー深裂",
        "result": "ジュウモンジシダ"
      },
      {
        "text": "葉柄の鱗片は<span class=\"key-term\">ネクタイ型</span>、長さ6mm以下。羽片は鋸歯縁",
        "result": "タチデンダ"
      }
    ]
  },
  "node2_2": {
    "question": "包膜の有無",
    "options": [
      {
        "text": "包膜が<span class=\"key-term\">ない</span>。葉先は急尾状",
        "result": "キュウシュウイノデ"
      },
      {
        "text": "包膜が<span class=\"key-term\">ある</span>。葉先はなだらかに細くなる",
        "next": "node2_2_1"
      }
    ]
  },
  "node2_2_1": {
    "question": "葉の下部の羽片の縮小",
    "options": [
      {
        "text": "葉の下部の羽片は<span class=\"key-term\">縮小</span>し、中部の羽片の約1/3長か、それ以下",
        "next": "node2_2_1_1"
      },
      {
        "text": "葉の下部の羽片は<span class=\"key-term\">縮小しない</span>か、やや短い程度",
        "next": "node2_2_1_2"
      }
    ]
  },
  "node2_2_1_1": {
    "question": "ソーラスの位置",
    "options": [
      {
        "text": "ソーラスは<span class=\"key-term\">小羽片の中肋寄り</span>につく",
        "next": "node2_2_1_1_1"
      },
      {
        "text": "ソーラスは<span class=\"key-term\">中間生または辺縁に近く</span>つく",
        "next": "node2_2_1_1_2"
      }
    ]
  },
  "node2_2_1_1_1": {
    "question": "小羽片の形と裂片の深さ",
    "options": [
      {
        "text": "小羽片は羽軸から<span class=\"key-term\">独立して鈍頭</span>。浅い鋸歯縁",
        "result": "ホソイノデ"
      },
      {
        "text": "小羽片の基部は<span class=\"key-term\">いくらか羽軸に沿着</span>し、先は鋭頭。辺縁は中ー深裂",
        "result": "カラクサイノデ"
      }
    ]
  },
  "node2_2_1_1_2": {
    "question": "ソーラスの位置と鱗片の質",
    "options": [
      {
        "text": "ソーラスは<span class=\"key-term\">中間生</span>。鱗片は褐色でやや硬い",
        "result": "フジイノデ"
      },
      {
        "text": "ソーラスは<span class=\"key-term\">辺縁寄り</span>。鱗片は淡褐色、とくに中部のみ濃色で、膜質",
        "result": "トヨグチイノデ"
      }
    ]
  },
  "node2_2_1_2": {
    "question": "葉の質と小羽片のつき方",
    "options": [
      {
        "text": "葉は<span class=\"key-term\">硬い</span>。小羽片は上先につく",
        "next": "node2_2_1_2_1"
      },
      {
        "text": "葉は<span class=\"key-term\">洋紙質から草質</span>。中部の羽片では小羽片は下先につく",
        "next": "node2_2_1_2_2"
      }
    ]
  },
  "node2_2_1_2_1": {
    "question": "葉柄の太さと長さ、葉の厚さ",
    "options": [
      {
        "text": "葉柄は<span class=\"key-term\">太くて短く</span>、葉身の1/3以下。葉は厚い",
        "result": "ヤシャイノデ"
      },
      {
        "text": "葉柄は細く、葉身の3/4か、それ以上",
        "next": "node2_2_1_2_1_1"
      }
    ]
  },
  "node2_2_1_2_1_1": {
    "question": "葉軸の鱗片の幅と葉の厚さ",
    "options": [
      {
        "text": "葉軸の鱗片は幅<span class=\"key-term\">1.5mm</span>に達する。葉は厚い",
        "result": "オニイノデ"
      },
      {
        "text": "葉軸の鱗片はほそく、<span class=\"key-term\">幅1mm以下</span>。葉はややうすい",
        "next": "node2_2_1_2_1_1_1"
      }
    ]
  },
  "node2_2_1_2_1_1_1": {
    "question": "小羽片の独立性と葉柄鱗片の色、ソーラスの位置",
    "options": [
      {
        "text": "小羽片は<span class=\"key-term\">多少羽軸に沿着</span>する。葉柄鱗片は褐色。ソーラスは葉の上部からつきはじめる",
        "result": "オオキヨズミシダ"
      },
      {
        "text": "小羽片は<span class=\"key-term\">独立</span>する。葉柄の鱗片は黒褐色。ソーラスは葉の下部からつきはじめる",
        "result": "ヒメカナワラビ"
      }
    ]
  },
  "node2_2_1_2_2": {
    "question": "葉軸下面の鱗片の形と生育期",
    "options": [
      {
        "text": "葉軸下面の鱗片は<span class=\"key-term\">幅広く、円状卵形から広卵形</span>。<span class=\"key-term\">夏緑性</span>の植物",
        "next": "node2_2_1_2_2_1"
      },
      {
        "text": "葉軸下面の鱗片は<span class=\"key-term\">線形からネクタイ形</span>。葉柄以外に広い鱗片はない。<span class=\"key-term\">常緑性</span>",
        "next": "node2_2_1_2_2_2"
      }
    ]
  },
  "node2_2_1_2_2_1": {
    "question": "葉軸下面の鱗片の形",
    "options": [
      {
        "text": "葉軸下面の鱗片は<span class=\"key-term\">広卵形</span>",
        "next": "node2_2_1_2_2_1_1"
      },
      {
        "text": "葉軸下面の鱗片は<span class=\"key-term\">長楕円形から広いネクタイ形</span>",
        "next": "node2_2_1_2_2_1_2"
      }
    ]
  },
  "node2_2_1_2_2_1_1": {
    "question": "葉軸下面の鱗片の向きと長さ",
    "options": [
      {
        "text": "葉軸下面の鱗片は<span class=\"key-term\">下向き</span>につき、長さ5mm以下",
        "result": "サカゲイノデ"
      },
      {
        "text": "葉軸下面の鱗片は<span class=\"key-term\">上向きから横向き</span>、長さ7mm以上",
        "result": "ツヤナシイノデ"
      }
    ]
  },
  "node2_2_1_2_2_1_2": {
    "question": "葉柄の黒い鱗片",
    "options": [
      {
        "text": "葉柄には<span class=\"key-term\">黒い鱗片がない</span>か、あっても最下部のみ",
        "result": "イワシロイノデ"
      },
      {
        "text": "葉柄と葉軸には<span class=\"key-term\">黒い鱗片が多い</span>",
        "result": "ミョウコウイノデ"
      }
    ]
  },
  "node2_2_1_2_2_2": {
    "question": "ソーラスのつき方",
    "options": [
      {
        "text": "ソーラスは小羽片の<span class=\"key-term\">耳垂の羽軸寄り（下側）に優占的</span>につく。葉面には光沢がない",
        "result": "サイコクイノデ"
      },
      {
        "text": "ソーラスはそのようなつきかたをしない",
        "next": "node2_2_1_2_2_2_1"
      }
    ]
  },
  "node2_2_1_2_2_2_1": {
    "question": "下部羽片とソーラスの位置、葉面の色",
    "options": [
      {
        "text": "下部羽片はやや縮小する。ソーラスは小羽片の<span class=\"key-term\">耳垂の反羽軸寄り（上側）に優占的</span>につく。葉面は黄緑色で、光沢がない",
        "next": "node2_2_1_2_2_2_1_1"
      },
      {
        "text": "下部の羽片はほとんど、またはまったく縮小しない。葉面には光沢がある",
        "next": "node2_2_1_2_2_2_1_2"
      }
    ]
  },
  "node2_2_1_2_2_2_1_1": {
    "question": "鱗片の質と色、ソーラスの位置",
    "options": [
      {
        "text": "鱗片は<span class=\"key-term\">膜質で淡褐色</span>。ソーラスは葉縁寄りにつく",
        "result": "トヨグチイノデ"
      },
      {
        "text": "鱗片は<span class=\"key-term\">やや硬くて褐色</span>。ソーラスは中間生",
        "result": "フジイノデ"
      }
    ]
  },
  "node2_2_1_2_2_2_1_2": {
    "question": "葉柄の鱗片の色と黒色鱗片の分布",
    "options": [
      {
        "text": "葉柄の少なくとも基部付近には、やや硬い<span class=\"key-term\">黒色ー黒褐色の鱗片</span>がある",
        "next": "node2_2_1_2_2_2_1_2_1"
      },
      {
        "text": "葉柄の鱗片は<span class=\"key-term\">褐色から赤褐色</span>。もし濃色の縞がはいっても、鱗片全体には及ばない",
        "next": "node2_2_1_2_2_2_1_2_2"
      }
    ]
  },
  "node2_2_1_2_2_2_1_2_1": {
    "question": "葉柄から葉軸の黒色鱗片の量と鋸歯の刺の向き",
    "options": [
      {
        "text": "葉柄から葉軸の鱗片は<span class=\"key-term\">黒色で著しい</span>。小羽片の鋸歯の先の刺は<span class=\"key-term\">開出</span>する",
        "result": "サクラジマイノデ"
      },
      {
        "text": "葉軸には黒色鱗片がないか、少数。鋸歯の先の刺は<span class=\"key-term\">葉縁に沿うように</span>出る",
        "next": "node2_2_1_2_2_2_1_2_1_1"
      }
    ]
  },
  "node2_2_1_2_2_2_1_2_1_1": {
    "question": "ソーラスのつき方と黒色鱗片の分布",
    "options": [
      {
        "text": "ソーラスは<span class=\"key-term\">耳垂の上下または上側（反羽軸側）に優先的</span>につく。黒色鱗片はしばしば中軸に及ぶ",
        "result": "ナンピイノデ"
      },
      {
        "text": "ソーラスは葉の上部からつきはじめ、耳垂の上下とは関係しない。黒色（黒栗色）鱗片は葉柄のみ",
        "result": "カタイノデ"
      }
    ]
  },
  "node2_2_1_2_2_2_1_2_2": {
    "question": "葉の長さと斜上度、ソーラスの位置",
    "options": [
      {
        "text": "葉は長さ<span class=\"key-term\">40cm以下</span>で、ロゼット状に地表にひらく。ソーラスは<span class=\"key-term\">ごく縁寄り</span>。葉軸の鱗片は乾くとねじれる",
        "result": "チャボイノデ"
      },
      {
        "text": "葉はふつう長さ50cm以上、斜上してひらく。ソーラスはごく縁寄りということはない",
        "next": "node2_2_1_2_2_2_1_2_2_1"
      }
    ]
  },
  "node2_2_1_2_2_2_1_2_2_1": {
    "question": "ソーラスの位置",
    "options": [
      {
        "text": "ソーラスは<span class=\"key-term\">縁寄り</span>につく",
        "next": "node2_2_1_2_2_2_1_2_2_1_1"
      },
      {
        "text": "ソーラスは少なくとも葉の上部では、<span class=\"key-term\">中間か中肋寄り</span>",
        "next": "node2_2_1_2_2_2_1_2_2_1_2"
      }
    ]
  },
  "node2_2_1_2_2_2_1_2_2_1_1": {
    "question": "葉軸の鱗片の形と葉の向き",
    "options": [
      {
        "text": "葉軸の鱗片は<span class=\"key-term\">糸状</span>で、縁に少し辺毛がある。葉は直立から、やや斜上",
        "result": "アイアスカイノデ"
      },
      {
        "text": "葉軸の鱗片は<span class=\"key-term\">ほそいネクタイ形</span>、縁は毛状細裂する。葉は斜上から平伏",
        "result": "イノデモドキ"
      }
    ]
  },
  "node2_2_1_2_2_2_1_2_2_1_2": {
    "question": "葉柄や葉軸の鱗片に栗色の縞があるか",
    "options": [
      {
        "text": "葉柄や葉軸下部には<span class=\"key-term\">栗色の縞をもつ鱗片</span>がある。包膜の縁にはいちじるしい欠刻がある",
        "result": "シムライノデ"
      },
      {
        "text": "葉柄下部の鱗片は一様に褐色から赤褐色。包膜はほぼ全縁",
        "next": "node2_2_1_2_2_2_1_2_2_1_2_1"
      }
    ]
  },
  "node2_2_1_2_2_2_1_2_2_1_2_1": {
    "question": "葉軸下面の鱗片の形",
    "options": [
      {
        "text": "葉軸下面の鱗片は<span class=\"key-term\">糸状</span>で、乾くとねじれる",
        "result": "アスカイノデ"
      },
      {
        "text": "葉軸下面の鱗片は<span class=\"key-term\">ほそいネクタイ形から狭卵形</span>、不規則に開出し、乾いてもねじれない",
        "result": "イノデ"
      }
    ]
  }
};
