/* arachniodes 検索ツリーデータ */
GENUS_TREES["arachniodes"] = {
  "start": {
    "question": "葉の質と毛の有無",
    "options": [
      {
        "text": "葉は<span class=\"key-term\">うすい紙質</span>、表裏両面に毛が多い",
        "next": "node1"
      },
      {
        "text": "葉は<span class=\"key-term\">洋紙質から革質</span>、表面は無毛",
        "next": "node2"
      }
    ]
  },
  "node1": {
    "question": "包膜の縁毛と中軸の鱗片",
    "options": [
      {
        "text": "包膜の辺縁に<span class=\"key-term\">縁毛がない</span>。中軸や羽軸には鱗片が多く残る",
        "result": "ナライシダ"
      },
      {
        "text": "包膜の辺縁に<span class=\"key-term\">縁毛がある</span>。中軸や羽軸には鱗片がほとんど残らない",
        "result": "ヒロハナライシダ"
      }
    ]
  },
  "node2": {
    "question": "葉の分裂度",
    "options": [
      {
        "text": "葉は<span class=\"key-term\">単羽状複生もしくは最下部の羽片のみ全裂</span>する。羽片や小羽片には耳垂がない",
        "result": "オトコシダ"
      },
      {
        "text": "葉は<span class=\"key-term\">2回羽状複生</span>",
        "next": "node2_1"
      }
    ]
  },
  "node2_1": {
    "question": "葉柄と中軸の鱗片",
    "options": [
      {
        "text": "葉柄と中軸には<span class=\"key-term\">茶褐色ー黒褐色の鱗片が密生</span>する",
        "result": "シノブカグマ"
      },
      {
        "text": "葉柄上部と中軸は<span class=\"key-term\">ほとんど裸出</span>",
        "next": "node2_1_1"
      }
    ]
  },
  "node2_1_1": {
    "question": "側羽片の数とソーラスの位置",
    "options": [
      {
        "text": "側羽片のうち大型のものは<span class=\"key-term\">10対以上</span>。ソーラスは葉の下部からつく",
        "result": "リョウメンシダ"
      },
      {
        "text": "側羽片のうち大型のものは<span class=\"key-term\">10対以下</span>。ソーラスは葉の上部からつく",
        "next": "node2_1_1_1"
      }
    ]
  },
  "node2_1_1_1": {
    "question": "葉の分裂度",
    "options": [
      {
        "text": "葉は<span class=\"key-term\">2回羽状複生</span>",
        "next": "node2_1_1_1_1"
      },
      {
        "text": "葉は<span class=\"key-term\">3-4回羽状複生</span>",
        "next": "node2_1_1_1_2"
      }
    ]
  },
  "node2_1_1_1_1": {
    "question": "頂羽片の有無",
    "options": [
      {
        "text": "<span class=\"key-term\">頂羽片がある</span>",
        "next": "node2_1_1_1_1_1"
      },
      {
        "text": "頂羽片は<span class=\"key-term\">はっきりしない</span>",
        "next": "node2_1_1_1_1_2"
      }
    ]
  },
  "node2_1_1_1_1_1": {
    "question": "ソーラスの位置",
    "options": [
      {
        "text": "ソーラスは<span class=\"key-term\">中間生</span>",
        "result": "シビカナワラビ"
      },
      {
        "text": "ソーラスは<span class=\"key-term\">縁生</span>",
        "result": "オオカナワラビ"
      }
    ]
  },
  "node2_1_1_1_1_2": {
    "question": "葉の質",
    "options": [
      {
        "text": "葉は<span class=\"key-term\">柔らかく、洋紙質</span>",
        "result": "ヒュウガカナワラビ"
      },
      {
        "text": "葉は<span class=\"key-term\">硬紙質からうすい革質</span>",
        "result": "ツルタカナワラビ"
      }
    ]
  },
  "node2_1_1_1_2": {
    "question": "根茎の長さと葉のつき方",
    "options": [
      {
        "text": "根茎は<span class=\"key-term\">長くはい</span>、葉をまばらに出す",
        "next": "node2_1_1_1_2_1"
      },
      {
        "text": "根茎は<span class=\"key-term\">短くはい</span>、葉を密に出す",
        "next": "node2_1_1_1_2_2"
      }
    ]
  },
  "node2_1_1_1_2_1": {
    "question": "葉先の形",
    "options": [
      {
        "text": "葉先は<span class=\"key-term\">急に狭くなって、頂羽片状</span>",
        "result": "ホソバカナワラビ"
      },
      {
        "text": "葉先は<span class=\"key-term\">なだらかに狭くなる</span>",
        "result": "ミヤコカナワラビ"
      }
    ]
  },
  "node2_1_1_1_2_2": {
    "question": "成葉の葉柄の色",
    "options": [
      {
        "text": "葉柄は成葉でも<span class=\"key-term\">紫色をおびる</span>",
        "result": "ミドリカナワラビ"
      },
      {
        "text": "成葉の葉柄は<span class=\"key-term\">淡紅色から緑色</span>、またはわら色",
        "next": "node2_1_1_1_2_2_1"
      }
    ]
  },
  "node2_1_1_1_2_2_1": {
    "question": "葉の質",
    "options": [
      {
        "text": "葉は<span class=\"key-term\">洋紙質</span>",
        "next": "node2_1_1_1_2_2_1_1"
      },
      {
        "text": "葉は<span class=\"key-term\">硬紙質から革質</span>",
        "next": "node2_1_1_1_2_2_1_2"
      }
    ]
  },
  "node2_1_1_1_2_2_1_1": {
    "question": "小羽片の分裂度",
    "options": [
      {
        "text": "最下の小羽片のほかは<span class=\"key-term\">2回羽状複生</span>",
        "next": "node2_1_1_1_2_2_1_1_1"
      },
      {
        "text": "<span class=\"key-term\">完全3回羽状</span>か、それ以上に切れこむ",
        "next": "node2_1_1_1_2_2_1_1_2"
      }
    ]
  },
  "node2_1_1_1_2_2_1_1_1": {
    "question": "葉先とソーラスの位置",
    "options": [
      {
        "text": "葉先は<span class=\"key-term\">急に狭くなって、頂羽片状</span>。ソーラスは中間生",
        "result": "ハガクレカナワラビ"
      },
      {
        "text": "葉頂には<span class=\"key-term\">頂羽片がある</span>。ソーラスは縁生",
        "result": "オオカナワラビ"
      }
    ]
  },
  "node2_1_1_1_2_2_1_1_2": {
    "question": "葉辺の鋸歯",
    "options": [
      {
        "text": "葉辺の鋸歯は<span class=\"key-term\">芭状に突出</span>する。葉は4回羽状",
        "result": "イツキカナワラビ"
      },
      {
        "text": "葉辺の鋸歯は<span class=\"key-term\">短い</span>。葉は3回ー4回羽状",
        "result": "サンヨウカナワラビ"
      }
    ]
  },
  "node2_1_1_1_2_2_1_2": {
    "question": "葉の分裂度",
    "options": [
      {
        "text": "最下の小羽片のほかは<span class=\"key-term\">2回羽状</span>",
        "next": "node2_1_1_1_2_2_1_2_1"
      },
      {
        "text": "葉は<span class=\"key-term\">完全3-4回羽状</span>",
        "result": "コバノカナワラビ"
      }
    ]
  },
  "node2_1_1_1_2_2_1_2_1": {
    "question": "葉先の形",
    "options": [
      {
        "text": "葉先は<span class=\"key-term\">頂羽片状</span>",
        "result": "ハカタシダ"
      },
      {
        "text": "葉先は<span class=\"key-term\">なだらかに狭くなる</span>",
        "result": "オニカナワラビ"
      }
    ]
  }
};
