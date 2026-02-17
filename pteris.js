/* pteris 検索ツリーデータ */
GENUS_TREES["pteris"] = {
  "start": {
    "question": "葉柄と中軸の鱗片と側羽片の数",
    "options": [
      {
        "text": "葉柄と中軸には<span class=\"key-term\">細い鱗片が多くつく</span>。側羽片はふつう<span class=\"key-term\">20対以上</span>",
        "result": "モエジマシダ"
      },
      {
        "text": "葉柄は基部にだけ鱗片が密生し、他はほぼ裸出。側羽片は<span class=\"key-term\">15対以下</span>",
        "next": "node1"
      }
    ]
  },
  "node1": {
    "question": "頂羽片の分裂様式",
    "options": [
      {
        "text": "頂羽片は規則正しく<span class=\"key-term\">櫛歯状に深ー全裂</span>する",
        "next": "node1_1"
      },
      {
        "text": "羽片は<span class=\"key-term\">全縁から浅裂程度</span>",
        "next": "node1_2"
      }
    ]
  },
  "node1_1": {
    "question": "栄養葉の葉縁",
    "options": [
      {
        "text": "栄養葉（ソーラスのつかない葉）の葉縁には<span class=\"key-term\">鋸歯がある</span>",
        "next": "node1_1_1"
      },
      {
        "text": "栄養葉は<span class=\"key-term\">全縁</span>で、小脈は葉縁に達する",
        "next": "node1_1_2"
      }
    ]
  },
  "node1_1_1": {
    "question": "葉の大きさと分岐様式",
    "options": [
      {
        "text": "葉は<span class=\"key-term\">大型で、鳥足状に5-7岐</span>する",
        "result": "ナチシダ"
      },
      {
        "text": "葉は中ー大型、<span class=\"key-term\">2回羽状に分裂</span>する",
        "next": "node1_1_1_1"
      }
    ]
  },
  "node1_1_1_1": {
    "question": "羽軸表側の刺状突起",
    "options": [
      {
        "text": "羽軸の表側の裂片中肋が分岐するところに<span class=\"key-term\">刺状突起がない</span>。裸葉の小脈は葉縁に達する",
        "result": "アマクサシダ"
      },
      {
        "text": "羽軸の表側の裂片中肋が分岐するところに<span class=\"key-term\">大きな刺状突起がある</span>。裸葉の小脈は葉縁に達しない",
        "next": "node1_1_1_1_1"
      }
    ]
  },
  "node1_1_1_1_1": {
    "question": "葉柄の色と葉の大きさ",
    "options": [
      {
        "text": "葉柄は下部を除き<span class=\"key-term\">緑色からワラ色</span>、葉は大型",
        "next": "node1_1_1_1_1_1"
      },
      {
        "text": "葉柄は全体<span class=\"key-term\">紫褐色で光沢</span>がある。葉は中型",
        "next": "node1_1_1_1_1_2"
      }
    ]
  },
  "node1_1_1_1_1_1": {
    "question": "羽片の分裂様式",
    "options": [
      {
        "text": "羽片は<span class=\"key-term\">両側ともよく分裂</span>する",
        "result": "オオバノハチジョウシダ"
      },
      {
        "text": "羽片は<span class=\"key-term\">上側がほとんど分裂しない</span>",
        "result": "オオバノアマクサシダ"
      }
    ]
  },
  "node1_1_1_1_1_2": {
    "question": "小脈の網目",
    "options": [
      {
        "text": "小脈は羽軸の両側に<span class=\"key-term\">各側1列の網目</span>をつくる",
        "result": "ヒノタニシダ"
      },
      {
        "text": "網目はないか、<span class=\"key-term\">不規則に一部結合</span>するのみ",
        "result": "ヒカゲアマクサシダ"
      }
    ]
  },
  "node1_1_2": {
    "question": "羽片の白斑の有無",
    "options": [
      {
        "text": "羽片は羽軸にそって<span class=\"key-term\">白斑がある</span>",
        "result": "アルギレア（園芸品）"
      },
      {
        "text": "羽片には<span class=\"key-term\">白斑がない</span>",
        "next": "node1_1_2_1"
      }
    ]
  },
  "node1_1_2_1": {
    "question": "羽片基部の形",
    "options": [
      {
        "text": "羽片は<span class=\"key-term\">基部でせまくなる</span>",
        "next": "node1_1_2_1_1"
      },
      {
        "text": "羽片の<span class=\"key-term\">基部はせまくならない</span>",
        "next": "node1_1_2_1_2"
      }
    ]
  },
  "node1_1_2_1_1": {
    "question": "羽片基部の形と鱗片の残り方",
    "options": [
      {
        "text": "羽片の基部は<span class=\"key-term\">広いくさび形</span>で、短い柄状になる。葉柄基部に鱗片が多く残る",
        "next": "node1_1_2_1_1_1"
      },
      {
        "text": "羽片の基部は<span class=\"key-term\">ほとんど切形</span>、最下羽片以外は無柄。葉柄基部には少数の鱗片があるのみ",
        "result": "ヤワラハチジョウシダ"
      }
    ]
  },
  "node1_1_2_1_1_1": {
    "question": "葉の質と中肋の刺",
    "options": [
      {
        "text": "葉は<span class=\"key-term\">硬く、やや革質</span>、中肋上に刺はあまりない",
        "result": "ハチジョウシダ"
      },
      {
        "text": "葉は<span class=\"key-term\">草質</span>、中肋上の刺はめだつ",
        "result": "ヤクシマハチジョウシダ"
      }
    ]
  },
  "node1_1_2_1_2": {
    "question": "羽片のつき方と小羽片の数",
    "options": [
      {
        "text": "羽片は羽軸に<span class=\"key-term\">ほぼ直角</span>につき、基部は切形、無柄。基部羽片は下向きに<span class=\"key-term\">(1-)2-3小羽片</span>をだす",
        "result": "ニシノコハチジョウシダ"
      },
      {
        "text": "羽片は羽軸に<span class=\"key-term\">斜めにつき</span>、もしくは有柄、無柄のとき基部は広いくさび形",
        "next": "node1_1_2_1_2_1"
      }
    ]
  },
  "node1_1_2_1_2_1": {
    "question": "羽片の柄と小羽片の数",
    "options": [
      {
        "text": "羽片は<span class=\"key-term\">短柄があり</span>、長い下向小羽片は1個",
        "result": "ハチジョウシダモドキ"
      },
      {
        "text": "羽片は<span class=\"key-term\">無柄</span>、基部は広いくさび形、長い下向小羽片は1-2個",
        "result": "アイコハチジョウシダ"
      }
    ]
  },
  "node1_2": {
    "question": "偽脈の有無",
    "options": [
      {
        "text": "小脈に平行して、<span class=\"key-term\">はっきりとした偽脈</span>がある",
        "result": "キドイノモトソウ"
      },
      {
        "text": "<span class=\"key-term\">偽脈はない</span>",
        "next": "node1_2_1"
      }
    ]
  },
  "node1_2_1": {
    "question": "栄養葉の小脈が葉縁に達するか",
    "options": [
      {
        "text": "栄養葉の小脈は<span class=\"key-term\">葉縁に達する</span>",
        "next": "node1_2_1_1"
      },
      {
        "text": "栄養葉の小脈は<span class=\"key-term\">葉縁に達しない</span>",
        "next": "node1_2_1_2"
      }
    ]
  },
  "node1_2_1_1": {
    "question": "側羽片の数と分岐",
    "options": [
      {
        "text": "側羽片<span class=\"key-term\">1-2対</span>、楕円形で再分岐しない",
        "result": "クマガワイノモトソウ"
      },
      {
        "text": "羽片は裸葉では<span class=\"key-term\">しばしば分岐</span>し、長楕円形から線形",
        "next": "node1_2_1_1_1"
      }
    ]
  },
  "node1_2_1_1_1": {
    "question": "栄養葉の色と白斑、羽片の数",
    "options": [
      {
        "text": "栄養葉は<span class=\"key-term\">濃緑色</span>、しばしば羽軸にそって白斑がある。羽片は1-2対、長楕円形から広いネクタイ型",
        "result": "マツザカシダ"
      },
      {
        "text": "栄養葉は<span class=\"key-term\">黄緑色</span>、白斑はない。側羽片<span class=\"key-term\">(2-)3-5対</span>、ネクタイ形から線形",
        "result": "オオバノイノモトソウ"
      }
    ]
  },
  "node1_2_1_2": {
    "question": "上部羽片の葉軸への翼の有無",
    "options": [
      {
        "text": "上部の羽片の基部は<span class=\"key-term\">葉軸に流れて翼</span>となる",
        "next": "node1_2_1_2_1"
      },
      {
        "text": "葉軸には<span class=\"key-term\">翼がない</span>",
        "next": "node1_2_1_2_2"
      }
    ]
  },
  "node1_2_1_2_1": {
    "question": "根茎の鱗片と葉の質",
    "options": [
      {
        "text": "根茎の鱗片は長さ<span class=\"key-term\">4-7mm</span>、帯黒色。葉はやや硬く、あまり2形にならない",
        "result": "イツキイノモトソウ"
      },
      {
        "text": "根茎の鱗片は<span class=\"key-term\">ずっと短く</span>、濃褐色。葉は柔らかく、2形になる",
        "result": "イノモトソウ"
      }
    ]
  },
  "node1_2_1_2_2": {
    "question": "側羽片の数と分岐",
    "options": [
      {
        "text": "側羽片は<span class=\"key-term\">3対以上</span>、ふつうさらに羽状に分岐する",
        "next": "node1_2_1_2_2_1"
      },
      {
        "text": "側羽片は<span class=\"key-term\">1-3対</span>、大きな葉では最下羽片のみ1個の小羽片をつける",
        "next": "node1_2_1_2_2_2"
      }
    ]
  },
  "node1_2_1_2_2_1": {
    "question": "葉の白斑の有無",
    "options": [
      {
        "text": "葉には<span class=\"key-term\">白斑がない</span>",
        "result": "ホコシダ"
      },
      {
        "text": "葉は<span class=\"key-term\">白斑があり、美しい</span>",
        "result": "フィリイノモトソウ"
      }
    ]
  },
  "node1_2_1_2_2_2": {
    "question": "裸葉の羽片の幅",
    "options": [
      {
        "text": "裸葉の羽片は幅<span class=\"key-term\">5mm程度</span>",
        "result": "ヒメイノモトソウ"
      },
      {
        "text": "裸葉の羽片は幅<span class=\"key-term\">8mm以上</span>",
        "next": "node1_2_1_2_2_2_1"
      }
    ]
  },
  "node1_2_1_2_2_2_1": {
    "question": "胞子葉の羽片の幅",
    "options": [
      {
        "text": "胞子葉の羽片は幅<span class=\"key-term\">5mm前後</span>",
        "result": "リュウキュウイノモトソウ"
      },
      {
        "text": "胞子葉の羽片は幅<span class=\"key-term\">8mm以上</span>",
        "result": "マツザカシダ"
      }
    ]
  }
};
