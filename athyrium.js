/* athyrium 検索ツリーデータ */
GENUS_TREES["athyrium"] = {
  "start": {
    "id": "start",
    "question": "根茎の形態",
    "options": [
      {
        "text": "根茎は<span class=\"key-term\">地中を長くはう</span>",
        "next": "node1"
      },
      {
        "text": "根茎は<span class=\"key-term\">短く、直立または斜上</span>し、葉を叢生する",
        "next": "node2"
      }
    ]
  },
  "node1": {
    "question": "葉の形態と裂片の配置",
    "options": [
      {
        "text": "葉は<span class=\"key-term\">2回羽状全裂から複生</span>。葉頂や羽片頂は急尾状。ソーラスは細長い",
        "result": "イヌワラビ"
      },
      {
        "text": "葉は<span class=\"key-term\">3−4回羽状複生</span>。ソーラスは短いか丸い",
        "next": "node1_1"
      }
    ]
  },
  "node1_1": {
    "question": "葉の形と小羽片のつき方",
    "options": [
      {
        "text": "葉は<span class=\"key-term\">広三角形</span>で、小羽片は外（下）先につく",
        "result": "カラフトミヤマシダ"
      },
      {
        "text": "葉は<span class=\"key-term\">卵形</span>。小羽片は内（上）先につく",
        "result": "テバコワラビ"
      }
    ]
  },
  "node2": {
    "question": "包膜の大きさとソーラスの量",
    "options": [
      {
        "text": "包膜は<span class=\"key-term\">ごく小型</span>で、ソーラスに埋もれる。3回羽状",
        "result": "オクヤマワラビ"
      },
      {
        "text": "包膜は<span class=\"key-term\">よく発達</span>し、宿存する",
        "next": "node2_1"
      }
    ]
  },
  "node2_1": {
    "question": "包膜の縁の形態",
    "options": [
      {
        "text": "包膜の縁は<span class=\"key-term\">辺毛状に裂ける</span>",
        "next": "node2_1_1"
      },
      {
        "text": "包膜の縁は<span class=\"key-term\">辺毛状には裂けない</span>",
        "next": "node2_1_2"
      }
    ]
  },
  "node2_1_1": {
    "question": "葉の下部の羽片の縮小度",
    "options": [
      {
        "text": "葉の下部の羽片は<span class=\"key-term\">多少とも短くなる</span>",
        "next": "node2_1_1_1"
      },
      {
        "text": "下部の羽片は<span class=\"key-term\">縮小しない</span>",
        "next": "node2_1_1_2"
      }
    ]
  },
  "node2_1_1_1": {
    "question": "葉身の長さ",
    "options": [
      {
        "text": "葉身は長さ<span class=\"key-term\">10−40cm</span>",
        "next": "node2_1_1_1_1"
      },
      {
        "text": "葉身は長さ<span class=\"key-term\">40−60cm</span>",
        "next": "node2_1_1_1_2"
      }
    ]
  },
  "node2_1_1_1_1": {
    "question": "羽片の向きと裂片の独立性",
    "options": [
      {
        "text": "羽片は<span class=\"key-term\">斜上</span>する",
        "result": "ミヤマヘビノネゴザ"
      },
      {
        "text": "下部の羽片は<span class=\"key-term\">逆向して下を向く</span>",
        "next": "node2_1_1_1_1_1"
      }
    ]
  },
  "node2_1_1_1_1_1": {
    "question": "羽片の裂片の独立性",
    "options": [
      {
        "text": "羽片の<span class=\"key-term\">基部付近の裂片は独立して小羽片状</span>",
        "result": "サカバサトメシダ"
      },
      {
        "text": "羽片は全体に<span class=\"key-term\">浅裂程度</span>、裂片は独立しない",
        "result": "サカバイヌワラビ"
      }
    ]
  },
  "node2_1_1_1_2": {
    "question": "葉柄の長さと鱗片の色・質",
    "options": [
      {
        "text": "葉柄は葉身の約1/2。鱗片は<span class=\"key-term\">光沢のある黒色</span>でやや硬い",
        "result": "ミヤマメシダ"
      },
      {
        "text": "葉柄は葉身と等長程度。鱗片は<span class=\"key-term\">暗褐色で膜質</span>",
        "result": "エゾメシダ"
      }
    ]
  },
  "node2_1_1_2": {
    "question": "葉柄や中軸の色",
    "options": [
      {
        "text": "中軸は<span class=\"key-term\">淡紫色</span>をおびる",
        "result": "オオメシダ"
      },
      {
        "text": "葉柄や中軸は<span class=\"key-term\">淡緑色からわら色</span>",
        "next": "node2_1_1_2_1"
      }
    ]
  },
  "node2_1_1_2_1": {
    "question": "葉身の形",
    "options": [
      {
        "text": "葉身は<span class=\"key-term\">卵形から楕円形</span>",
        "next": "node2_1_1_2_1_1"
      },
      {
        "text": "葉身は<span class=\"key-term\">卵形から広卵形</span>。葉柄はふつう葉身より多少長い。ソーラスは小羽片の各裂片に1−2個つく",
        "next": "node2_1_1_2_1_2"
      }
    ]
  },
  "node2_1_1_2_1_1": {
    "question": "葉柄の長さとソーラスの数",
    "options": [
      {
        "text": "葉柄は葉身とほぼ等長。ソーラスは小羽片の<span class=\"key-term\">各裂片に数個</span>つく",
        "result": "サトメシダ"
      },
      {
        "text": "葉柄はふつう葉身より多少長い。ソーラスは小羽片の各裂片に<span class=\"key-term\">1−2個</span>つく",
        "next": "node2_1_1_2_1_2"
      }
    ]
  },
  "node2_1_1_2_1_2": {
    "question": "中部羽片の基部小羽片のつき方",
    "options": [
      {
        "text": "中部羽片の小羽片は<span class=\"key-term\">外（下）先</span>につく",
        "result": "タカネサトメシダ"
      },
      {
        "text": "中部羽片の基部小羽片は<span class=\"key-term\">対生状</span>",
        "result": "コシノサトメシダ"
      }
    ]
  },
  "node2_1_2": {
    "question": "小羽片の中肋上に直立する軟刺毛があるか",
    "options": [
      {
        "text": "小羽片の<span class=\"key-term\">中肋上には直立する軟刺毛</span>がある",
        "next": "node2_1_2_1"
      },
      {
        "text": "小羽片の中肋の表には軟刺毛がないか、ほとんどめだたない",
        "next": "node2_1_2_2"
      }
    ]
  },
  "node2_1_2_1": {
    "question": "小羽片のつき方",
    "options": [
      {
        "text": "小羽片は<span class=\"key-term\">いちじるしく内（上）先</span>につく",
        "result": "シマイヌワラビ"
      },
      {
        "text": "小羽片は<span class=\"key-term\">外（下）先または対生状</span>",
        "next": "node2_1_2_1_1"
      }
    ]
  },
  "node2_1_2_1_1": {
    "question": "葉の質と鋸歯の形、軟刺毛の長さ",
    "options": [
      {
        "text": "葉は<span class=\"key-term\">厚い草質</span>。鋸歯は鈍頭から鋭頭。軟刺毛は短い",
        "result": "タカサゴイヌワラビ"
      },
      {
        "text": "葉は<span class=\"key-term\">うすい草質</span>。鋸歯は鋭尖形から芒状。軟刺毛は長い",
        "next": "node2_1_2_1_1_1"
      }
    ]
  },
  "node2_1_2_1_1_1": {
    "question": "小羽片の形と左右対称性、羽軸裏面の毛",
    "options": [
      {
        "text": "小羽片は<span class=\"key-term\">長楕円形で左右相称</span>。羽軸裏面は無毛",
        "result": "ミヤコイヌワラビ"
      },
      {
        "text": "小羽片は<span class=\"key-term\">長三角形で左右不相称</span>。羽軸裏面に細毛が多い",
        "next": "node2_1_2_1_1_1_1"
      }
    ]
  },
  "node2_1_2_1_1_1_1": {
    "question": "葉の形と裂片の密度、芽の有無",
    "options": [
      {
        "text": "葉は<span class=\"key-term\">細長く</span>、裂片はこみあってつく。<span class=\"key-term\">葉先には秋に芽</span>がつく",
        "result": "ホソバイヌワラビ"
      },
      {
        "text": "葉は<span class=\"key-term\">卵形から広卵形</span>。裂片はまばらにつく。葉先に芽がつかない",
        "result": "トガリバイヌワラビ"
      }
    ]
  },
  "node2_1_2_2": {
    "question": "葉の形態と羽片の柄の長さ",
    "options": [
      {
        "text": "葉は<span class=\"key-term\">垂れる</span>。葉は単羽状。羽片は羽状中裂する",
        "result": "イワイヌワラビ"
      },
      {
        "text": "葉は<span class=\"key-term\">斜上から直立</span>。2回羽状ー4回羽状、まれに単羽状",
        "next": "node2_1_2_2_1"
      }
    ]
  },
  "node2_1_2_2_1": {
    "question": "羽片の柄の長さ",
    "options": [
      {
        "text": "羽片には<span class=\"key-term\">4mm、それ以上の柄</span>がつく",
        "next": "node2_1_2_2_1_1"
      },
      {
        "text": "羽片は<span class=\"key-term\">無柄か、短柄</span>があっても長さ2−3mm程度",
        "next": "node2_1_2_2_1_2"
      }
    ]
  },
  "node2_1_2_2_1_1": {
    "question": "羽片の柄の長さと最基部小羽片の縮小度",
    "options": [
      {
        "text": "羽片の柄は<span class=\"key-term\">かなり短い</span>。最下羽片の最基部の小羽片は、最長のものの1/3程度に短縮する",
        "result": "ヤマイヌワラビ"
      },
      {
        "text": "羽片の柄は<span class=\"key-term\">かなり長い</span>。最基部の小羽片は短縮しても1/2程度",
        "next": "node2_1_2_2_1_1_1"
      }
    ]
  },
  "node2_1_2_2_1_1_1": {
    "question": "葉柄基部の鱗片の縞と葉の質、羽軸裏面の毛、小羽片の耳垂",
    "options": [
      {
        "text": "葉柄基部の鱗片は<span class=\"key-term\">ネクタイ形で、濃褐色の縞</span>がはいる。葉はうすい草質、羽軸裏面は無毛。小羽片の耳垂は大きい",
        "result": "カラクサイヌワラビ"
      },
      {
        "text": "葉柄基部の鱗片は<span class=\"key-term\">せまいネクタイ形で小さい</span>。葉は厚い草質、羽軸裏面はふつう細毛が密。小羽片の耳垂は小さい",
        "result": "ヒロハイヌワラビ"
      }
    ]
  },
  "node2_1_2_2_1_2": {
    "question": "ソーラスの位置と羽軸の溝",
    "options": [
      {
        "text": "ソーラスは<span class=\"key-term\">中間生か辺寄り</span>につく。羽軸表の小羽軸との分岐点には刺がない",
        "next": "node2_1_2_2_1_2_1"
      },
      {
        "text": "ソーラスは<span class=\"key-term\">下端が中肋に接する</span>。羽軸と小羽軸の分岐点にはふつう刺がある",
        "next": "node2_1_2_2_1_2_2"
      }
    ]
  },
  "node2_1_2_2_1_2_1": {
    "question": "葉柄基部の鱗片の形と葉身の分裂度",
    "options": [
      {
        "text": "葉柄基部の鱗片には<span class=\"key-term\">広いネクタイ形で長さ15mm</span>程のものが多い。葉身は2−3回羽状",
        "result": "キリシマヘビノネゴザ"
      },
      {
        "text": "葉柄基部の鱗片は<span class=\"key-term\">せまいネクタイ形から線形</span>",
        "next": "node2_1_2_2_1_2_1_1"
      }
    ]
  },
  "node2_1_2_2_1_2_1_1": {
    "question": "葉の質と鱗片の長さ",
    "options": [
      {
        "text": "葉は<span class=\"key-term\">うすい草質</span>。鱗片は長さ15mm程のものがまじる",
        "result": "ウスバヘビノネゴザ"
      },
      {
        "text": "葉は<span class=\"key-term\">草質</span>。鱗片はふつう長さ7−10(−12)mm",
        "next": "node2_1_2_2_1_2_1_1_1"
      }
    ]
  },
  "node2_1_2_2_1_2_1_1_1": {
    "question": "葉の下方の幅と葉柄の色",
    "options": [
      {
        "text": "葉は<span class=\"key-term\">下方がせまくなる</span>。葉柄はふつう葉身より短く、<span class=\"key-term\">紫色</span>をおびる",
        "result": "タカネヘビノネゴザ"
      },
      {
        "text": "葉は<span class=\"key-term\">下方がせまくならない</span>。葉柄はふつう葉身と同長位、<span class=\"key-term\">紫色をおびない</span>ことが多い",
        "result": "ヘビノネゴザ"
      }
    ]
  },
  "node2_1_2_2_1_2_2": {
    "question": "葉の質と小羽片の大きさ・形、鱗片の色",
    "options": [
      {
        "text": "葉は<span class=\"key-term\">やや硬い草質</span>。小羽片は小さくて鈍頭。鱗片は黒い",
        "result": "オトメイヌワラビ"
      },
      {
        "text": "葉は<span class=\"key-term\">硬紙質からやや革質</span>",
        "next": "node2_1_2_2_1_2_2_1"
      }
    ]
  },
  "node2_1_2_2_1_2_2_1": {
    "question": "小羽片の独立性と葉の分裂度",
    "options": [
      {
        "text": "小羽片は<span class=\"key-term\">独立せず</span>、基部が羽軸に流れるか、葉は単羽状",
        "next": "node2_1_2_2_1_2_2_1_1"
      },
      {
        "text": "小羽片は<span class=\"key-term\">羽軸から完全に独立</span>する",
        "next": "node2_1_2_2_1_2_2_1_2"
      }
    ]
  },
  "node2_1_2_2_1_2_2_1_1": {
    "question": "葉柄基部の鱗片の色",
    "options": [
      {
        "text": "葉柄基部の鱗片は<span class=\"key-term\">黒褐色</span>",
        "next": "node2_1_2_2_1_2_2_1_1_1"
      },
      {
        "text": "葉柄基部の鱗片は<span class=\"key-term\">明褐色ー濃褐色</span>",
        "result": "ツクシイヌワラビ"
      }
    ]
  },
  "node2_1_2_2_1_2_2_1_1_1": {
    "question": "葉面の形と分裂度",
    "options": [
      {
        "text": "葉面は<span class=\"key-term\">広いネクタイ形</span>。単羽状ー単羽状浅裂",
        "result": "ヘイケイヌワラビ"
      },
      {
        "text": "葉面は<span class=\"key-term\">卵形から長楕円状三角形</span>。2回羽状深裂",
        "result": "シビイヌワラビ"
      }
    ]
  },
  "node2_1_2_2_1_2_2_1_2": {
    "question": "葉柄基部の鱗片の色と羽軸表の刺",
    "options": [
      {
        "text": "葉柄基部の鱗片は<span class=\"key-term\">黒褐色から黒色</span>。羽軸の表の刺は顕著",
        "next": "node2_1_2_2_1_2_2_1_2_1"
      },
      {
        "text": "葉柄基部の鱗片は<span class=\"key-term\">褐色から明褐色</span>",
        "next": "node2_1_2_2_1_2_2_1_2_2"
      }
    ]
  },
  "node2_1_2_2_1_2_2_1_2_1": {
    "question": "葉面の形と小羽片の質・形",
    "options": [
      {
        "text": "葉面は<span class=\"key-term\">卵状三角形から卵状長楕円形</span>。小羽片はやや<span class=\"key-term\">うすく硬く、鋭頭</span>",
        "result": "タニイヌワラビ"
      },
      {
        "text": "葉面は<span class=\"key-term\">三角形から卵状三角形</span>。小羽片はやや<span class=\"key-term\">厚ぼったくて軟く、鈍頭</span>",
        "result": "サキモリイヌワラビ"
      }
    ]
  },
  "node2_1_2_2_1_2_2_1_2_2": {
    "question": "葉柄と中軸の色",
    "options": [
      {
        "text": "葉柄と中軸の中部以下は<span class=\"key-term\">淡緑色</span>",
        "result": "アオグキイヌワラビ"
      },
      {
        "text": "葉柄と中軸は<span class=\"key-term\">淡紫色</span>",
        "result": "ツクシイヌワラビ"
      }
    ]
  }
};
