/* dryopteris 検索ツリーデータ（完全版）*/
/* PDFより：ナガサキシダ〜ヤマイタチシダ 約60種 */
GENUS_TREES["dryopteris"] = {

  // ============================================================
  // スタート：袋状鱗片の有無
  // ============================================================
  "start": {
    "question": "羽軸や小羽軸の下面の鱗片の形状",
    "options": [
      {
        "text": "下面に基部が丸くふくれた<span class=\"key-term\">袋状の小型鱗片</span>がつく",
        "next": "node1"
      },
      {
        "text": "<span class=\"key-term\">袋状の鱗片はない</span>（もし鱗片があれば基部は扁平）",
        "next": "node2"
      }
    ]
  },

  // ============================================================
  // node2 系：袋状鱗片なしグループ（大幅拡充）
  // ============================================================
  "node2": {
    "question": "頂羽片の状態",
    "options": [
      {
        "text": "頂羽片は<span class=\"key-term\">明瞭に独立</span>する",
        "next": "node2a"
      },
      {
        "text": "頂羽片は<span class=\"key-term\">ないか、不明</span>",
        "next": "node2b"
      }
    ]
  },

  // --- 頂羽片あり ---
  "node2a": {
    "question": "羽片の縁の形態",
    "options": [
      {
        "text": "羽片は<span class=\"key-term\">全縁から浅い鋸歯縁</span>",
        "result": "ナガサキシダ"
      },
      {
        "text": "羽片は<span class=\"key-term\">羽状に中ー深裂</span>する",
        "result": "ナガサキシダモドキ"
      }
    ]
  },

  // --- 頂羽片なし・不明 ---
  "node2b": {
    "question": "葉の切れ込み方（小羽片の独立性）",
    "options": [
      {
        "text": "<span class=\"key-term\">単羽状複生</span>。小羽片は独立しない",
        "next": "node2b1"
      },
      {
        "text": "<span class=\"key-term\">完全2回羽状複生かそれ以上</span>。小羽片は独立する",
        "next": "node2b2"
      }
    ]
  },

  // ---- 単羽状複生グループ ----
  "node2b1": {
    "question": "羽片の切れ込み方",
    "options": [
      {
        "text": "羽片は<span class=\"key-term\">鋸歯縁から羽状中裂</span>まで",
        "next": "node2b1a"
      },
      {
        "text": "羽片は<span class=\"key-term\">羽状深ー全裂</span>だが、裂片は羽軸に流れてつき独立はしない",
        "next": "node2b1b"
      }
    ]
  },

  "node2b1a": {
    "question": "裂片の主脈の曲がりと耳垂状裂片",
    "options": [
      {
        "text": "裂片の主脈は羽軸から<span class=\"key-term\">いちじるしく弓状にまがって</span>出る。各羽片の最下の裂片はとくに大きく<span class=\"key-term\">耳垂状</span>",
        "next": "node2b1a1"
      },
      {
        "text": "裂片の主脈はあまり曲ってつかない。最下の裂片は<span class=\"key-term\">耳垂状でない</span>",
        "next": "node2b1a2"
      }
    ]
  },

  "node2b1a1": {
    "question": "根茎の形態と下部羽片の縮小",
    "options": [
      {
        "text": "根茎は<span class=\"key-term\">直立</span>。下部の羽片は<span class=\"key-term\">著しく縮小</span>する",
        "result": "タニヘゴ"
      },
      {
        "text": "根茎は<span class=\"key-term\">はう</span>。下部の羽片は<span class=\"key-term\">いくらか縮小</span>する",
        "result": "タニヘゴモドキ"
      }
    ]
  },

  "node2b1a2": {
    "question": "側羽片の数と支脈の分岐",
    "options": [
      {
        "text": "側羽片は<span class=\"key-term\">8-15対</span>。羽片は基部のみしばしば深裂し、支脈は<span class=\"key-term\">2岐</span>する。葉は厚い",
        "result": "オオミネイワヘゴ"
      },
      {
        "text": "側羽片は<span class=\"key-term\">15対以上</span>。支脈はほぼ<span class=\"key-term\">単条</span>",
        "next": "node2b1a2a"
      }
    ]
  },

  "node2b1a2a": {
    "question": "ソーラスの位置と葉脈のくぼみ",
    "options": [
      {
        "text": "ソーラスは<span class=\"key-term\">葉縁寄り</span>につく。葉脈は表面でいちじるしく<span class=\"key-term\">くぼむ</span>",
        "next": "node2b1a2a1"
      },
      {
        "text": "ソーラスは<span class=\"key-term\">羽軸寄り、または中間生</span>。葉脈はあまりくぼまない。葉柄下部の鱗片は黒褐色から黒色、辺縁には突起がでる",
        "next": "node2b1a2a2"
      }
    ]
  },

  "node2b1a2a1": {
    "question": "葉柄下部の鱗片の色と縁",
    "options": [
      {
        "text": "<span class=\"key-term\">黒褐色</span>、ふちに<span class=\"key-term\">刺状突起</span>がある。ソーラスはやや辺縁から離れるが規則正しく2-3列につく",
        "result": "ツツイイワヘゴ"
      },
      {
        "text": "<span class=\"key-term\">淡褐色から褐色</span>で<span class=\"key-term\">全縁</span>",
        "next": "node2b1a2a1a"
      }
    ]
  },

  "node2b1a2a1a": {
    "question": "ソーラスの配列と羽片の形",
    "options": [
      {
        "text": "ソーラスはいちじるしく<span class=\"key-term\">辺縁寄りにつき2-3列</span>にならぶ。羽片は基部から<span class=\"key-term\">2/3まで両側平行</span>",
        "result": "ツクシオオクジャク"
      },
      {
        "text": "ソーラスは<span class=\"key-term\">辺縁から羽軸との中間部まで広くちらばる</span>。羽片は基部から<span class=\"key-term\">中部まで両側平行</span>",
        "next": "node2b1a2a1a1"
      }
    ]
  },

  "node2b1a2a1a1": {
    "question": "裂片中肋の間隔と最下裂片の独立性",
    "options": [
      {
        "text": "裂片中肋の間隔は<span class=\"key-term\">3-5mm</span>。最下裂片は<span class=\"key-term\">独立しない</span>",
        "result": "オオクジャクシダ"
      },
      {
        "text": "裂片中肋の間隔は<span class=\"key-term\">2-3mm</span>。最下裂片は<span class=\"key-term\">しばしば独立</span>",
        "result": "エビノオオクジャク"
      }
    ]
  },

  "node2b1a2a2": {
    "question": "下部羽片の縮小と葉脈のくぼみ",
    "options": [
      {
        "text": "下部の羽片は<span class=\"key-term\">はっきり縮小</span>する。葉脈は表面にあきらかにくぼむ",
        "next": "node2b1a2a2a"
      },
      {
        "text": "下部の羽片は<span class=\"key-term\">ほとんど縮小しない</span>。脈は表面にわずかにくぼむ程度",
        "next": "node2b1a2a2b"
      }
    ]
  },

  "node2b1a2a2a": {
    "question": "羽片の裂れ方とソーラスの位置",
    "options": [
      {
        "text": "羽片は<span class=\"key-term\">中裂</span>。ソーラスは裂片の中肋の両側に<span class=\"key-term\">羽軸寄り</span>につく",
        "result": "ワカナシダ"
      },
      {
        "text": "羽片は<span class=\"key-term\">鋸歯縁から浅裂</span>",
        "next": "node2b1a2a2a1"
      }
    ]
  },

  "node2b1a2a2a1": {
    "question": "ソーラスの位置",
    "options": [
      {
        "text": "ソーラスは<span class=\"key-term\">中肋寄り</span>",
        "result": "クマイワヘゴ"
      },
      {
        "text": "ソーラスは<span class=\"key-term\">中間生</span>",
        "result": "キヨスミオオクジャク"
      }
    ]
  },

  "node2b1a2a2b": {
    "question": "包膜の大きさと葉質・羽片数",
    "options": [
      {
        "text": "包膜はソーラスにうもれ<span class=\"key-term\">ごく小さい</span>。葉は<span class=\"key-term\">草質</span>、羽片は<span class=\"key-term\">20対前後</span>。最下羽片には短柄がつく",
        "result": "ツクシイワヘゴ"
      },
      {
        "text": "包膜は径<span class=\"key-term\">1mmをこえ</span>、はっきりみえる。葉は<span class=\"key-term\">紙質</span>、羽片は<span class=\"key-term\">20-30対</span>。羽片は無柄。鱗片は黒ー黒褐色",
        "result": "イワヘゴ"
      }
    ]
  },

  // ---- 羽状深-全裂グループ ----
  "node2b1b": {
    "question": "葉の大きさと腺毛・包膜径",
    "options": [
      {
        "text": "葉は<span class=\"key-term\">小さく（全長10-20cm）</span>、腺毛が多い。包膜は大きく径<span class=\"key-term\">2mm以上</span>",
        "result": "ニオイシダ"
      },
      {
        "text": "葉は<span class=\"key-term\">大型（通常50cm以上）</span>、包膜は径<span class=\"key-term\">1.5mm以下</span>",
        "next": "node2b1b1"
      }
    ]
  },

  "node2b1b1": {
    "question": "根茎と葉柄の長さ",
    "options": [
      {
        "text": "根茎は<span class=\"key-term\">ながくはう</span>。葉柄は葉身の<span class=\"key-term\">1/2-3/4長</span>",
        "result": "ミヤマベニシダ"
      },
      {
        "text": "根茎は<span class=\"key-term\">太く直立から斜上</span>。葉柄は葉身の<span class=\"key-term\">1/2以下</span>",
        "next": "node2b1b1a"
      }
    ]
  },

  "node2b1b1a": {
    "question": "葉質と羽片先端・包膜",
    "options": [
      {
        "text": "葉は<span class=\"key-term\">硬紙質</span>。羽片の先は<span class=\"key-term\">尾状</span>にのびる。包膜はのちに<span class=\"key-term\">2裂</span>しやすい",
        "result": "オオヤグルマ"
      },
      {
        "text": "葉は<span class=\"key-term\">草質から軟紙質</span>。羽片は鋭ー鋭尖頭。包膜は裂けない",
        "next": "node2b1b1a1"
      }
    ]
  },

  "node2b1b1a1": {
    "question": "葉面の色と葉柄鱗片の密度",
    "options": [
      {
        "text": "葉面は<span class=\"key-term\">浅緑色ー黄緑色</span>。葉柄の鱗片は黄褐色で密生しない",
        "result": "カラフトメンマ"
      },
      {
        "text": "葉面は<span class=\"key-term\">濃緑色</span>。葉柄の鱗片は黒色ー濃褐色で密生する",
        "next": "node2b1b1a1a"
      }
    ]
  },

  "node2b1b1a1a": {
    "question": "鱗片の色と裂片の幅・支脈",
    "options": [
      {
        "text": "鱗片は<span class=\"key-term\">黒色ー黒褐色</span>。裂片の幅<span class=\"key-term\">1.5-2.5mm</span>。支脈は<span class=\"key-term\">単条</span>",
        "result": "ミヤマクマワラビ"
      },
      {
        "text": "鱗片は<span class=\"key-term\">濃褐色、ときに褐色</span>。裂片は幅<span class=\"key-term\">3-5mm</span>。基部の支脈は<span class=\"key-term\">2岐をまじえる</span>",
        "result": "オシダ"
      }
    ]
  },

  // ---- 完全2回羽状以上グループ ----
  "node2b2": {
    "question": "葉縁の鋸歯の先の形（夏緑性かどうか）",
    "options": [
      {
        "text": "葉縁の鋸歯の先は<span class=\"key-term\">芭状に伸びる</span>。<span class=\"key-term\">夏緑性</span>の植物",
        "next": "node2b2a"
      },
      {
        "text": "葉縁の鋸歯は<span class=\"key-term\">芭状でない</span>",
        "next": "node2b2b"
      }
    ]
  },

  "node2b2a": {
    "question": "最下羽片の最下下側（後側）の小羽片の大きさ",
    "options": [
      {
        "text": "最下下側の小羽片は<span class=\"key-term\">最大</span>",
        "next": "node2b2a1"
      },
      {
        "text": "最下下側の小羽片は<span class=\"key-term\">縮小</span>する",
        "result": "イワカゲワラビ"
      }
    ]
  },

  "node2b2a1": {
    "question": "根茎と葉柄鱗片の模様",
    "options": [
      {
        "text": "根茎は<span class=\"key-term\">短くはう</span>。葉柄の鱗片には<span class=\"key-term\">濃色の縞</span>がある",
        "result": "シラネワラビ"
      },
      {
        "text": "根茎は<span class=\"key-term\">長くはう</span>。葉柄の鱗片は<span class=\"key-term\">淡色</span>",
        "result": "オクヤマシダ"
      }
    ]
  },

  "node2b2b": {
    "question": "葉軸と羽軸の鱗片の宿存性",
    "options": [
      {
        "text": "葉軸と羽軸には<span class=\"key-term\">鱗片が残らない</span>",
        "next": "node2b2b1"
      },
      {
        "text": "葉柄から羽軸にかけて<span class=\"key-term\">鱗片が宿存</span>する",
        "next": "node2c"
      }
    ]
  },

  // ---- 葉軸に鱗片なし ----
  "node2b2b1": {
    "question": "葉の全体的な形",
    "options": [
      {
        "text": "葉は<span class=\"key-term\">卵状長楕円形から楕円形</span>",
        "next": "node2b2b1a"
      },
      {
        "text": "葉は<span class=\"key-term\">卵状五角形から卵状三角形</span>",
        "next": "node2b2b1b"
      }
    ]
  },

  "node2b2b1a": {
    "question": "ソーラスの分布と葉脈のくぼみ",
    "options": [
      {
        "text": "ソーラスは<span class=\"key-term\">葉の上部の羽片にだけ</span>つく。葉脈はいちじるしくくぼむ。葉柄には鱗片が多くのこる。<span class=\"key-term\">夏緑性</span>",
        "result": "ミヤマイタチシダ"
      },
      {
        "text": "発育のよい葉では<span class=\"key-term\">全面</span>にソーラスがつく。葉脈はわずかにくぼむ。葉柄（とくに上部）の鱗片は落ちやすい",
        "next": "node2b2b1a1"
      }
    ]
  },

  "node2b2b1a1": {
    "question": "羽片の先端と小羽片の独立数・包膜",
    "options": [
      {
        "text": "羽片は<span class=\"key-term\">鋭尖頭</span>、小羽片は<span class=\"key-term\">5対以上独立</span>し、包膜はやや平ら",
        "next": "node2b2b1a1a"
      },
      {
        "text": "羽片の先端は<span class=\"key-term\">尾状</span>、小羽片は<span class=\"key-term\">2-3対独立</span>し、包膜はコウモリ傘状に着き3片に割れやすい",
        "result": "イヌタマシダ"
      }
    ]
  },

  "node2b2b1a1a": {
    "question": "最下の小羽片のつき方",
    "options": [
      {
        "text": "小羽片は<span class=\"key-term\">外（下）先</span>につく",
        "result": "ナガバノイタチシダ"
      },
      {
        "text": "最下の小羽片は<span class=\"key-term\">ほぼ対生</span>する",
        "result": "リュウキュウイタチシダ"
      }
    ]
  },

  "node2b2b1b": {
    "question": "最下羽片の柄の長さと葉柄基部の鱗片の長さ",
    "options": [
      {
        "text": "最下羽片はとくに大きく<span class=\"key-term\">長柄（2cm以上）</span>をもつ。葉柄基部の鱗片は長さ<span class=\"key-term\">5-10mm</span>",
        "result": "サクライカグマ"
      },
      {
        "text": "最下羽片はとくに大きいことはなく、柄は<span class=\"key-term\">1-1.5cm</span>",
        "next": "node2b2b1b1"
      }
    ]
  },

  "node2b2b1b1": {
    "question": "葉柄の色と基部鱗片の長さ・分布",
    "options": [
      {
        "text": "葉柄は<span class=\"key-term\">わら色</span>。葉柄基部の鱗片は長さ<span class=\"key-term\">1.5cmに達する</span>。<span class=\"key-term\">高山性</span>",
        "result": "シロウマイタチシダ"
      },
      {
        "text": "葉柄は<span class=\"key-term\">濃褐色で光沢</span>がある。葉柄基部の鱗片は長さ<span class=\"key-term\">4-10mm</span>。<span class=\"key-term\">暖地</span>にまれ",
        "result": "クロミノイタチシダ"
      }
    ]
  },

  // ============================================================
  // node2c 系：鱗片宿存グループ（旧 node2 の内容）
  // ============================================================
  "node2c": {
    "question": "最下羽片の下向第1小羽片の大きさ",
    "options": [
      {
        "text": "最大",
        "next": "node2c1"
      },
      {
        "text": "等長または縮小",
        "next": "node2c2"
      }
    ]
  },

  "node2c1": {
    "question": "鱗片の形態と圧着度",
    "options": [
      {
        "text": "鱗片は<span class=\"key-term\">ほそく</span>、柄から羽軸まで<span class=\"key-term\">密に圧着</span>する。最下羽片の柄は長い",
        "next": "node2c1a"
      },
      {
        "text": "鱗片はあまり圧着しない",
        "next": "node2c1b"
      }
    ]
  },

  "node2c1a": {
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

  "node2c1b": {
    "question": "鱗片の色と幅、葉の形",
    "options": [
      {
        "text": "鱗片は<span class=\"key-term\">褐色</span>で<span class=\"key-term\">広い</span>。胞子をつける葉は<span class=\"key-term\">卵状長楕円形</span>",
        "result": "ミヤマイタチシダ"
      },
      {
        "text": "鱗片は<span class=\"key-term\">黒褐色</span>で<span class=\"key-term\">狭い</span>。葉はすべて<span class=\"key-term\">五角形</span>",
        "result": "ミサキカグマ"
      }
    ]
  },

  "node2c2": {
    "question": "鱗片の縁と小羽片の独立性",
    "options": [
      {
        "text": "鱗片の縁には<span class=\"key-term\">顕著なギザギザ</span>がある。小羽片は<span class=\"key-term\">多く独立</span>する",
        "result": "ギフベニシダ"
      },
      {
        "text": "鱗片は<span class=\"key-term\">全縁</span>、もしくはまばらに突起がでる。小羽片は<span class=\"key-term\">羽片基部のものだけ独立</span>する",
        "next": "node2c2a"
      }
    ]
  },

  "node2c2a": {
    "question": "葉柄の鱗片の色とソーラスのつく羽片",
    "options": [
      {
        "text": "葉柄の鱗片は<span class=\"key-term\">黒褐色から黒色</span>。ソーラスのつく羽片は縮小しない",
        "next": "node2c2a1"
      },
      {
        "text": "葉柄の鱗片は<span class=\"key-term\">赤褐色</span>。ソーラスのつく羽片は縮小する",
        "result": "クマワラビ"
      }
    ]
  },

  "node2c2a1": {
    "question": "羽片の数と腺毛・ソーラスの位置",
    "options": [
      {
        "text": "羽片は約<span class=\"key-term\">10対</span>、<span class=\"key-term\">短腺毛</span>をもつ。ソーラスは<span class=\"key-term\">裏全体</span>につく",
        "result": "メズラシクマワラビ"
      },
      {
        "text": "大きな羽片は<span class=\"key-term\">12-20対</span>、<span class=\"key-term\">腺毛がない</span>。ソーラスは<span class=\"key-term\">葉の上部</span>につく",
        "result": "オクマワラビ"
      }
    ]
  },

  // ============================================================
  // node1 系：袋状鱗片ありグループ（既存コードを維持）
  // ============================================================
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
        "text": "<span class=\"key-term\">内（上）先</span>につく",
        "result": "ムカシベニシダ"
      },
      {
        "text": "<span class=\"key-term\">外（下）先</span>につく",
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
        "text": "突起がまばらに出るか、<span class=\"key-term\">全縁</span>",
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
        "text": "<span class=\"key-term\">中間生または辺寄り</span>につく",
        "next": "node1_1_1_1_2_1_1"
      },
      {
        "text": "<span class=\"key-term\">中肋寄り</span>につく",
        "next": "node1_1_1_1_2_1_2"
      }
    ]
  },

  "node1_1_1_1_2_1_1": {
    "question": "羽片の柄と葉軸へのつき方",
    "options": [
      {
        "text": "羽片は<span class=\"key-term\">無柄</span>で葉軸に直角またはほぼ直角につく。葉軸と羽軸には袋状鱗片が多い",
        "next": "node1_1_1_1_2_1_1_1"
      },
      {
        "text": "羽片は<span class=\"key-term\">小柄</span>があり葉軸と傾いてつく。袋状鱗片はごくまばら。葉面は浅緑色ー黄緑色",
        "result": "オオベニシダ"
      }
    ]
  },

  "node1_1_1_1_2_1_1_1": {
    "question": "ソーラスの位置と葉柄・葉軸の色",
    "options": [
      {
        "text": "ソーラスは<span class=\"key-term\">辺寄りからやや中間生</span>。葉柄と葉軸・若葉は<span class=\"key-term\">美しい紫色</span>。鱗片は黒い",
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
        "text": "<span class=\"key-term\">黒色ー黒褐色</span>で<span class=\"key-term\">ほそいネクタイ形</span>",
        "result": "ヌカイタチシダモドキ"
      },
      {
        "text": "<span class=\"key-term\">褐色ー淡褐色</span>で<span class=\"key-term\">広いネクタイ形</span>",
        "next": "node1_1_1_1_2_1_1_1_1_1"
      }
    ]
  },

  "node1_1_1_1_2_1_1_1_1_1": {
    "question": "葉柄から羽軸にかけての鱗片の密度",
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
    "question": "小羽片の先端と葉柄鱗片の色",
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
    "question": "小羽片・羽片の軸へのつき方",
    "options": [
      {
        "text": "小羽片や羽片は軸に<span class=\"key-term\">傾いて</span>つく",
        "result": "マルバベニシダ"
      },
      {
        "text": "小羽片や羽片は軸に<span class=\"key-term\">直角</span>につく",
        "result": "マルバヌカイタチシダモドキ"
      }
    ]
  },

  "node1_1_1_1_2_1_2_2": {
    "question": "葉先と下向第1小羽片の形態",
    "options": [
      {
        "text": "葉先は<span class=\"key-term\">漸尖し、尾状にならない</span>。最下羽片の下向第1小羽片は鋸歯縁から浅裂程度",
        "result": "ベニシダ"
      },
      {
        "text": "葉先は<span class=\"key-term\">尾状</span>。下向第1小羽片はふつう中ー深裂する",
        "next": "node1_1_1_1_2_1_2_2_1"
      }
    ]
  },

  "node1_1_1_1_2_1_2_2_1": {
    "question": "小羽片の幅と形・包膜の色",
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
    "question": "羽片の先端と下向小羽片の切れ込み",
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
    "question": "葉質",
    "options": [
      {
        "text": "<span class=\"key-term\">洋紙質</span>",
        "next": "node1_2_1"
      },
      {
        "text": "<span class=\"key-term\">厚く、革質</span>",
        "next": "node1_2_2"
      }
    ]
  },

  "node1_2_1": {
    "question": "葉柄の鱗片の色と包膜の色",
    "options": [
      {
        "text": "葉柄の鱗片は<span class=\"key-term\">褐色</span>、包膜は<span class=\"key-term\">赤い</span>",
        "result": "オワセベニシダ"
      },
      {
        "text": "葉柄の鱗片は<span class=\"key-term\">黒褐色</span>、包膜は<span class=\"key-term\">灰白色</span>",
        "result": "タカサゴシダ"
      }
    ]
  },

  "node1_2_2": {
    "question": "葉軸の鱗片の向き",
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
        "text": "葉柄の鱗片は<span class=\"key-term\">黒色から黒褐色</span>",
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
    "question": "葉柄の鱗片の色と葉身の形・最下第1小羽片の長さ",
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
  }

};