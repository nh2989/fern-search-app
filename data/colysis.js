GENUS_TREES["colysis"] = {
  "start": {
    "question": "葉の形",
    "options": [
      { "text": "葉は<span class=\"key-term\">単葉で全縁から中裂程度</span>", "next": "node1" },
      { "text": "葉には<span class=\"key-term\">羽片がある</span>", "next": "node2" }
    ]
  },
  "node1": {
    "question": "葉脈の見え方と主側脈",
    "options": [
      { "text": "葉脈はあまりはっきりみえず，<span class=\"key-term\">主側脈は不明</span>", "result": "ヒトツバイワヒトデ" },
      { "text": "葉脈ははっきりみえ，<span class=\"key-term\">主側脈も明瞭</span>", "next": "node1_2" }
    ]
  },
  "node1_2": {
    "question": "葉の形とソーラスの位置",
    "options": [
      { "text": "葉柄の翼は著しく縮み，葉は<span class=\"key-term\">下部が最も広い</span>", "result": "ヤリノホクリハラン" },
      { "text": "葉柄の翼はごく狭い。葉は<span class=\"key-term\">中央が最も広い</span>", "result": "シンテンウラボシ" }
    ]
  },
  "node2": {
    "question": "下部の羽片のつき方",
    "options": [
      { "text": "葉身の下部は<span class=\"key-term\">不規則に1〜3対の羽片</span>をつける", "next": "node2_1" },
      { "text": "葉身は<span class=\"key-term\">規則正しく羽状に分岐</span>し，中軸の上部にはやや狭い翼がある", "next": "node2_2" }
    ]
  },
  "node2_1": {
    "question": "葉脈の見え方",
    "options": [
      { "text": "葉脈ははっきりみえ，<span class=\"key-term\">主側脈も明瞭</span>", "result": "シンテンウラボシ" },
      { "text": "葉脈はあまりはっきりみえず，<span class=\"key-term\">主側脈も不明</span>", "result": "ヒトツバイワヒトデ" }
    ]
  },
  "node2_2": {
    "question": "葉裏の色と根茎の太さ",
    "options": [
      { "text": "葉裏は<span class=\"key-term\">粉白色をおびる</span>", "result": "コマチイワヒトデ" },
      { "text": "葉裏は<span class=\"key-term\">粉白でない</span>", "next": "node2_2_2" }
    ]
  },
  "node2_2_2": {
    "question": "根茎の太さと羽片の側脈",
    "options": [
      { "text": "根茎は太くて径<span class=\"key-term\">1cmほど</span>。羽片の側脈ははっきりみえる", "result": "オオイワヒトデ" },
      { "text": "根茎は細くて径<span class=\"key-term\">3mmほど</span>。羽片の側脈はあまりみえない", "result": "イワヒトデ" }
    ]
  }
};
