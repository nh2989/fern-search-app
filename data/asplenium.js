/* asplenium 検索ツリーデータ */
GENUS_TREES["asplenium"] = {
  "start": {
    "question": "葉の形態",
    "options": [
      {
        "text": "葉は<span class=\"key-term\">単葉</span>",
        "next": "node1_1"
      },
      {
        "text": "葉は<span class=\"key-term\">1-4回羽状に分裂</span>する",
        "next": "node1_2"
      }
    ]
  },
  "node1_1": {
    "question": "葉脈の結合と芽の有無",
    "options": [
      {
        "text": "葉脈は<span class=\"key-term\">遊離</span>、葉に芽はできない",
        "result": "ホコガタシダ"
      },
      {
        "text": "葉脈は<span class=\"key-term\">網状に結合</span>、葉先は伸びて芽をつける",
        "result": "クモノスシダ"
      }
    ]
  },
  "node1_2": {
    "question": "中軸に芽ができるか",
    "options": [
      {
        "text": "中軸のどこかに<span class=\"key-term\">芽ができる</span>",
        "next": "node1_2_1"
      },
      {
        "text": "中軸上に<span class=\"key-term\">芽がない</span>",
        "next": "node1_2_2"
      }
    ]
  },
  "node1_2_1": {
    "question": "葉の分裂度",
    "options": [
      {
        "text": "葉は<span class=\"key-term\">単羽状複生</span>",
        "next": "node1_2_1_1"
      },
      {
        "text": "葉は<span class=\"key-term\">2回羽状ー複生</span>",
        "next": "node1_2_1_2"
      }
    ]
  },
  "node1_2_1_1": {
    "question": "羽片の形と基部",
    "options": [
      {
        "text": "羽片は<span class=\"key-term\">長い直角三角形</span>、基部は切形",
        "next": "node1_2_1_1_1"
      },
      {
        "text": "羽片は<span class=\"key-term\">長楕円形ー卵状長楕円形</span>、円頭、基部は円形ーくさび形",
        "next": "node1_2_1_1_2"
      },
      {
        "text": "羽片は<span class=\"key-term\">斜三角形から平行四辺形</span>、鈍頭ー鋭頭、芽は2個以上",
        "result": "トキワシダ"
      }
    ]
  },
  "node1_2_1_1_1": {
    "question": "芽の数と位置",
    "options": [
      {
        "text": "芽は中軸の<span class=\"key-term\">上方に2-3個</span>生じる",
        "result": "テンリュウヌリトラノオ"
      },
      {
        "text": "芽は中軸の<span class=\"key-term\">先端に1個</span>生じる",
        "next": "node1_2_1_1_1_1"
      }
    ]
  },
  "node1_2_1_1_1_1": {
    "question": "羽片の分裂度と耳垂",
    "options": [
      {
        "text": "羽片は<span class=\"key-term\">浅裂</span>、基部前側の耳垂はあまり発達しない",
        "result": "ヌリトラノオ"
      },
      {
        "text": "羽片は<span class=\"key-term\">中一深裂</span>、基部前側の耳垂はよく発達する",
        "result": "カミガモシダ"
      }
    ]
  },
  "node1_2_1_1_2": {
    "question": "葉柄と中肋の翼",
    "options": [
      {
        "text": "葉柄と中肋は下面に<span class=\"key-term\">翼がつく</span>",
        "result": "イヌチャセンシダ"
      },
      {
        "text": "葉柄と中肋は下面に<span class=\"key-term\">翼がない</span>",
        "result": "チャセンシダ"
      }
    ]
  },
  "node1_2_1_2": {
    "question": "中軸の伸長と葉の大きさ",
    "options": [
      {
        "text": "中軸は<span class=\"key-term\">つる状に伸びて芽をつける</span>。葉は長さ10cm以上",
        "result": "ヒノキシダ"
      },
      {
        "text": "芽は中軸の<span class=\"key-term\">途中にできる</span>。葉は長さ8cm以下",
        "result": "ヒメイワトラノオ"
      }
    ]
  },
  "node1_2_2": {
    "question": "葉の分裂度",
    "options": [
      {
        "text": "葉は<span class=\"key-term\">単羽状複生</span>",
        "next": "node1_2_2_1"
      },
      {
        "text": "葉身は<span class=\"key-term\">2回以上羽状に分岐</span>する",
        "next": "node1_2_2_2"
      }
    ]
  },
  "node1_2_2_1": {
    "question": "根茎の長さと葉のつき方",
    "options": [
      {
        "text": "根茎は<span class=\"key-term\">短くはうか、斜上から直立</span>。葉を叢生する",
        "next": "node1_2_2_1_1"
      },
      {
        "text": "根茎は<span class=\"key-term\">長く這い</span>、葉をまばらにつける",
        "next": "node1_2_2_1_2"
      }
    ]
  },
  "node1_2_2_1_1": {
    "question": "羽片の形",
    "options": [
      {
        "text": "羽片は<span class=\"key-term\">ネクタイ形</span>、長さが幅よりはるかに大きい",
        "result": "クルマシダ"
      },
      {
        "text": "羽片は長くなく、長さは<span class=\"key-term\">幅の3倍をこえない</span>",
        "next": "node1_2_2_1_1_1"
      }
    ]
  },
  "node1_2_2_1_1_1": {
    "question": "ソーラスのつく羽片の形",
    "options": [
      {
        "text": "ソーラスのつく羽片は<span class=\"key-term\">卵状長楕円形</span>、ほぼ全縁から浅裂程度",
        "next": "node1_2_2_1_1_1_1"
      },
      {
        "text": "ソーラスのつく羽片は<span class=\"key-term\">三角状卵形</span>で、深ー全裂",
        "next": "node1_2_2_1_1_1_2"
      }
    ]
  },
  "node1_2_2_1_1_1_1": {
    "question": "葉身の分裂度と羽片の柄",
    "options": [
      {
        "text": "葉身は<span class=\"key-term\">単羽状</span>、羽片の柄ははっきりしない",
        "next": "node1_2_2_1_1_1_1_1"
      },
      {
        "text": "大形の葉身は<span class=\"key-term\">2回羽状</span>、羽片に柄がある",
        "result": "イチョウシダ"
      }
    ]
  },
  "node1_2_2_1_1_1_1_1": {
    "question": "羽片の大きさ",
    "options": [
      {
        "text": "羽片は長さ<span class=\"key-term\">1.5cmそれ以上</span>。葉は立つ",
        "result": "シモツケヌリトラノオ"
      },
      {
        "text": "羽片は長さ<span class=\"key-term\">約1cm前後</span>。葉は平らに開く",
        "next": "node1_2_2_1_1_1_1_1_1"
      }
    ]
  },
  "node1_2_2_1_1_1_1_1_1": {
    "question": "中肋の色と翼",
    "options": [
      {
        "text": "中肋は<span class=\"key-term\">光沢のない褐色</span>、下面に翼がつく",
        "result": "イヌチャセンシダ"
      },
      {
        "text": "中肋は<span class=\"key-term\">光沢のある褐色</span>で、下面に翼がない",
        "result": "チャセンシダ"
      },
      {
        "text": "葉柄と中肋は<span class=\"key-term\">緑色</span>、翼はない",
        "result": "アオチャセンシダ"
      }
    ]
  },
  "node1_2_2_1_1_1_2": {
    "question": "葉身の質と分裂度",
    "options": [
      {
        "text": "葉身は<span class=\"key-term\">うすく</span>、大形の葉は2回羽状",
        "result": "トラノオシダ"
      },
      {
        "text": "葉身は<span class=\"key-term\">やや厚く</span>、単羽状、羽片は浅ー深裂",
        "result": "トキワシダ"
      }
    ]
  },
  "node1_2_2_1_2": {
    "question": "葉面の透明度とソーラスの位置",
    "options": [
      {
        "text": "葉面は<span class=\"key-term\">不透明</span>、ソーラスは葉縁寄り",
        "result": "ホウビシダ"
      },
      {
        "text": "葉面は<span class=\"key-term\">透明</span>、ソーラスは中肋寄り",
        "result": "ツクシマホウビシダ"
      }
    ]
  },
  "node1_2_2_2": {
    "question": "羽軸の溝の有無",
    "options": [
      {
        "text": "羽軸には<span class=\"key-term\">溝がなく</span>、中心部がまるくもり上がっている",
        "next": "node1_2_2_2_1"
      },
      {
        "text": "羽軸には<span class=\"key-term\">溝がある</span>",
        "next": "node1_2_2_2_2"
      }
    ]
  },
  "node1_2_2_2_1": {
    "question": "葉身の形と葉軸の色",
    "options": [
      {
        "text": "葉身は<span class=\"key-term\">長三角形</span>、葉軸は黒い",
        "result": "クロガネシダ"
      },
      {
        "text": "葉身は<span class=\"key-term\">狭卵形</span>、葉軸は黒くない",
        "next": "node1_2_2_2_1_1"
      }
    ]
  },
  "node1_2_2_2_1_1": {
    "question": "ソーラスの数と位置",
    "options": [
      {
        "text": "ソーラスは1裂片に<span class=\"key-term\">1個つき</span>、葉縁生",
        "result": "コウザキシダ"
      },
      {
        "text": "ソーラスは1裂片に<span class=\"key-term\">(1-)2-数個つき</span>、葉面生",
        "next": "node1_2_2_2_1_1_1"
      }
    ]
  },
  "node1_2_2_2_1_1_1": {
    "question": "鱗片の毛と葉の光沢",
    "options": [
      {
        "text": "鱗片の背に<span class=\"key-term\">毛がない</span>。葉に光沢がとぼしい",
        "result": "コバノヒノキシダ"
      },
      {
        "text": "鱗片の背に<span class=\"key-term\">毛がある</span>。葉の表面には光沢がある",
        "result": "トキワトラノオ"
      }
    ]
  },
  "node1_2_2_2_2": {
    "question": "葉面の質",
    "options": [
      {
        "text": "葉面は<span class=\"key-term\">柔らかく、鮮緑色</span>",
        "next": "node1_2_2_2_2_1"
      },
      {
        "text": "葉面は<span class=\"key-term\">硬質から革質</span>",
        "next": "node1_2_2_2_2_2"
      }
    ]
  },
  "node1_2_2_2_2_1": {
    "question": "葉柄の色と下部羽片の縮小",
    "options": [
      {
        "text": "葉柄は<span class=\"key-term\">褐色</span>。胞子葉の下部の羽片はめだって縮小する",
        "result": "トラノオシダ"
      },
      {
        "text": "葉柄は<span class=\"key-term\">緑色</span>。下部の羽片は縮小しても1/2程度",
        "result": "イワトラノオ"
      }
    ]
  },
  "node1_2_2_2_2_2": {
    "question": "葉面の分岐様式と大きさ",
    "options": [
      {
        "text": "葉面は<span class=\"key-term\">1-10個の卵状楕円形の裂片</span>に分岐し、葉は長さ7cm以下",
        "result": "イチョウシダ"
      },
      {
        "text": "葉面は<span class=\"key-term\">羽状に分岐</span>し、葉は長さ10cm以上",
        "next": "node1_2_2_2_2_2_1"
      }
    ]
  },
  "node1_2_2_2_2_2_1": {
    "question": "葉面の形と分裂度",
    "options": [
      {
        "text": "葉面は<span class=\"key-term\">長三角形から卵状三角形</span>、3-4回羽状",
        "result": "アオガネシダ"
      },
      {
        "text": "葉面は<span class=\"key-term\">広いネクタイ形</span>、両側ほぼ平行、2回羽状複生",
        "result": "オクタマシダ"
      }
    ]
  }
};
