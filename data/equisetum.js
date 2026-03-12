GENUS_TREES["equisetum"] = {
  "start": {
    "question": "観察する茎の種類（ツクシか緑の茎か）",
    "options": [
      { "text": "<span class=\"key-term\">ツクシ（緑色でない胞子茎）</span>を調べる", "next": "tsukushi" },
      { "text": "<span class=\"key-term\">緑色の地上茎</span>（胞子嚢穂をつけていてもよい）を調べる", "next": "green" }
    ]
  },
  "tsukushi": {
    "question": "葉鞘の歯片の状態",
    "options": [
      { "text": "葉鞘の歯片は<span class=\"key-term\">すべて分離している</span>", "next": "tsukushi_1" },
      { "text": "葉鞘の歯片は<span class=\"key-term\">くっつきあって3-4片にまとまる</span>", "result": "フサスギナ" }
    ]
  },
  "tsukushi_1": {
    "question": "歯片の色",
    "options": [
      { "text": "葉鞘の歯片は<span class=\"key-term\">暗褐色</span>，茎は枝をださない", "result": "スギナ" },
      { "text": "葉鞘の歯片は<span class=\"key-term\">白膜縁</span>，茎はやがて緑色の枝をだす", "result": "ヤチスギナ" }
    ]
  },
  "green": {
    "question": "主茎の葉鞘の歯片の数",
    "options": [
      { "text": "主茎の葉鞘の歯片は<span class=\"key-term\">3個</span>。茎は不規則に波状に屈曲し，径約1mm", "result": "ヒメドクサ" },
      { "text": "主茎の葉鞘の歯片は<span class=\"key-term\">5個以上</span>。茎は柱状で屈曲しない", "next": "green_2" }
    ]
  },
  "green_2": {
    "question": "髄腔の大きさと茎の壁",
    "options": [
      { "text": "髄腔は茎の直径の<span class=\"key-term\">4/5以上</span>を占めるから茎の壁はうすい。葉鞘の歯片は黒色で白縁部がない", "result": "ミズドクサ" },
      { "text": "髄腔は茎の直径の<span class=\"key-term\">3/5以下</span>で茎の壁はあつい", "next": "green_3" }
    ]
  },
  "green_3": {
    "question": "茎の枝のだし方",
    "options": [
      { "text": "茎は枝をださないか，<span class=\"key-term\">不規則に少数の枝</span>をだす", "next": "green_3_1" },
      { "text": "茎は<span class=\"key-term\">規則正しく枝を輪生</span>する", "next": "green_3_2" }
    ]
  },
  "green_3_1": {
    "question": "茎の径と高さ",
    "options": [
      { "text": "茎は不規則に少数の枝をだす。<span class=\"key-term\">径3-4mm</span>程度", "result": "イヌドクサ" },
      { "text": "茎はふつう枝をださない。<span class=\"key-term\">径5-8mm，高さ30cm以上</span>", "result": "トクサ" },
      { "text": "茎はふつう枝をださない。<span class=\"key-term\">径0.5-1mm，高さ25cm以下</span>", "result": "チシマヒメドクサ" }
    ]
  },
  "green_3_2": {
    "question": "葉鞘の歯片のまとまり方",
    "options": [
      { "text": "葉鞘の歯片は<span class=\"key-term\">くっつきあって3-4片にまとまる</span>。枝はさらに小枝を輪生", "result": "フサスギナ" },
      { "text": "葉鞘の歯片は上部が<span class=\"key-term\">すべて独立分離し5個以上</span>。枝は再分岐しない", "next": "green_3_2_2" }
    ]
  },
  "green_3_2_2": {
    "question": "主茎の隆条の表面と歯片の色",
    "options": [
      { "text": "主茎の隆条上に<span class=\"key-term\">小刺がある</span>。葉鞘の歯片は中肋部だけ濃色", "result": "ヤチスギナ" },
      { "text": "主茎の隆条は<span class=\"key-term\">平滑</span>", "next": "green_3_2_2_2" }
    ]
  },
  "green_3_2_2_2": {
    "question": "枝の最下節間の長さと歯片の色",
    "options": [
      { "text": "枝の最下の節間は，その枝のつく主軸の節の葉鞘<span class=\"key-term\">よりも長い</span>。葉鞘の歯片は濃褐色から黒色", "result": "スギナ" },
      { "text": "枝の最下の節間は，その枝のつく主軸の節の葉鞘<span class=\"key-term\">よりも短い</span>。葉鞘の歯片は白膜縁をもつ", "result": "イヌスギナ" }
    ]
  }
};
