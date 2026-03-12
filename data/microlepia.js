GENUS_TREES["microlepia"] = {
  "start": {
    "question": "葉の分裂度",
    "options": [
      { "text": "葉は<span class=\"key-term\">単羽状複生</span>，羽片は浅〜深裂，羽片の中肋の表面に毛がある", "result": "フモトシダ" },
      { "text": "葉は<span class=\"key-term\">2〜3回羽状複生</span>", "next": "node1" }
    ]
  },
  "node1": {
    "question": "羽片の軸の表面の毛",
    "options": [
      { "text": "羽片の軸の表面に<span class=\"key-term\">毛がある</span>。葉は2回羽状複生", "next": "node1_1" },
      { "text": "羽片の軸の表面は<span class=\"key-term\">無毛</span>，葉は2〜3回羽状複生", "next": "node1_2" }
    ]
  },
  "node1_1": {
    "question": "最下羽片の大きさ",
    "options": [
      { "text": "最下羽片は<span class=\"key-term\">最も大きい</span>", "result": "クジャクフモトシダ" },
      { "text": "最下羽片は<span class=\"key-term\">いくらか短くなる</span>", "result": "フモトカグマ" }
    ]
  },
  "node1_2": {
    "question": "ソーラスの位置",
    "options": [
      { "text": "ソーラスは<span class=\"key-term\">葉縁にごく近くつく</span>", "result": "イシカグマ" },
      { "text": "ソーラスは葉縁から，<span class=\"key-term\">ソーラスの幅の1〜3倍離れている</span>", "next": "node1_2_2" }
    ]
  },
  "node1_2_2": {
    "question": "葉の質と回羽状の程度，包膜の形",
    "options": [
      { "text": "葉は<span class=\"key-term\">洋紙質</span>，2回羽状，包膜は浅いポケット状または腎形", "result": "オドリコカグマ" },
      { "text": "葉は<span class=\"key-term\">草質</span>，3回羽状，包膜はポケット状", "result": "ウスバイシカグマ" }
    ]
  }
};
