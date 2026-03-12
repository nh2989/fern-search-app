GENUS_TREES["lepisorus"] = {
  "start": {
    "question": "ソーラスをおおう楯状鱗片の形と根茎の鱗片の細胞",
    "options": [
      { "text": "楯状鱗片は<span class=\"key-term\">三角状卵形から不斉形</span>。根茎の鱗片の細胞はほとんど透明", "next": "node1" },
      { "text": "楯状鱗片は<span class=\"key-term\">ほぼ円形</span>で，中心でつき，歯牙縁", "next": "node2" }
    ]
  },
  "node1": {
    "question": "葉の質と季節性・分布",
    "options": [
      { "text": "葉は<span class=\"key-term\">革質で常緑</span>，葉脈は見えない。暖地性", "result": "コウラボシ" },
      { "text": "葉は<span class=\"key-term\">草質で夏緑性</span>，葉の主側脈は見える。亜高山性", "result": "トヨグチウラボシ" }
    ]
  },
  "node2": {
    "question": "根茎の鱗片の大きさと脱落性",
    "options": [
      { "text": "根茎の鱗片は小さく，長さ<span class=\"key-term\">0.5mm程</span>，根茎の先端以外では脱落する。葉柄と中肋下部は黒褐色。常緑性", "result": "ミヤマノキシノブ" },
      { "text": "根茎の鱗片は長さ<span class=\"key-term\">1mm以上，宿存性</span>", "next": "node2_2" }
    ]
  },
  "node2_2": {
    "question": "根茎の鱗片の形と大きさ",
    "options": [
      { "text": "根茎の鱗片は<span class=\"key-term\">広卵形，急尾状，長さ1〜2mm</span>，ソーラスは中間生から中肋寄りにつく", "next": "node2_2_1" },
      { "text": "根茎の鱗片は<span class=\"key-term\">線形から広いネクタイ形，長さ2mm以上</span>", "next": "node2_2_2" }
    ]
  },
  "node2_2_1": {
    "question": "季節性と分布，ソーラスの位置",
    "options": [
      { "text": "<span class=\"key-term\">夏緑性</span>，冷涼な地に多い。ソーラスは中間生", "result": "ホテイシダ" },
      { "text": "<span class=\"key-term\">常緑性，暖地性</span>。ソーラスはふつう中肋寄り", "result": "ツクシノキシノブ" }
    ]
  },
  "node2_2_2": {
    "question": "葉裏の宿存性黒色鱗片",
    "options": [
      { "text": "葉裏に<span class=\"key-term\">宿存性の黒色鱗片が多い</span>", "result": "ウロコノキシノブ" },
      { "text": "葉裏には<span class=\"key-term\">宿存性の鱗片はない</span>", "next": "node2_2_2_2" }
    ]
  },
  "node2_2_2_2": {
    "question": "根茎のはい方と葉の密度・先端",
    "options": [
      { "text": "根茎は<span class=\"key-term\">短くはう</span>。葉は接近してつき，鋭尖頭から尾状", "result": "ノキシノブ" },
      { "text": "根茎は<span class=\"key-term\">細長くはう</span>。葉はやや まばらに出て，円頭〜鋭頭", "next": "node2_2_2_2_2" }
    ]
  },
  "node2_2_2_2_2": {
    "question": "葉の長さと幅",
    "options": [
      { "text": "葉は長さ<span class=\"key-term\">8〜17cm，幅9〜15mm</span>", "result": "ハチジョウウラボシ" },
      { "text": "葉は長さ<span class=\"key-term\">3〜10cm，幅2〜5mm</span>", "result": "ヒメノキシノブ" }
    ]
  }
};
