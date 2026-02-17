/* 属一覧データ */
const GENERA_DATA = [
  {
    "id": "lycopodium",
    "name": "ヒカゲノカズラ属",
    "latin": "Lycopodium",
    "examples": "ヒカゲノカズラ、マンネンスギ、スギラン、ヨウラクヒバ",
    "hasKey": false
  },
  {
    "id": "selaginella",
    "name": "クラマゴケ属",
    "latin": "Selaginella",
    "examples": "クラマゴケ、コンテリクラマゴケ、イワヒバ、カタヒバ",
    "hasKey": false
  },
  {
    "id": "equisetum",
    "name": "トクサ属",
    "latin": "Equisetum",
    "examples": "スギナ、トクサ、イヌドクサ、ミズドクサ",
    "hasKey": false
  },
  {
    "id": "ophioglossum",
    "name": "ハナヤスリ属",
    "latin": "Ophioglossum",
    "examples": "ヒロハハナヤスリ、ハマハナヤスリ、コハナヤスリ",
    "hasKey": false
  },
  {
    "id": "sceptridium",
    "name": "オオハナワラビ属",
    "latin": "Sceptridium",
    "examples": "オオハナワラビ、アカハナワラビ、フユノハナワラビ",
    "hasKey": false
  },
  {
    "id": "osmunda",
    "name": "ゼンマイ属",
    "latin": "Osmunda",
    "examples": "ゼンマイ、ヤマドリゼンマイ、オニゼンマイ",
    "hasKey": false
  },
  {
    "id": "hymenophyllum",
    "name": "コケシノブ属",
    "latin": "Hymenophyllum",
    "examples": "コケシノブ、ホソバコケシノブ、オオコケシノブ",
    "hasKey": false
  },
  {
    "id": "crepidomanes",
    "name": "アオホラゴケ属",
    "latin": "Crepidomanes",
    "examples": "アオホラゴケ、ハイホラゴケ、ヒカゲワラビ",
    "hasKey": false
  },
  {
    "id": "microlepia",
    "name": "フモトシダ属",
    "latin": "Microlepia",
    "examples": "フモトシダ、イシカグマ、オドリコカグマ",
    "hasKey": false
  },
  {
    "id": "lindsaea",
    "name": "ホングウシダ属",
    "latin": "Lindsaea",
    "examples": "ホングウシダ、エダウチホングウシダ",
    "hasKey": false
  },
  {
    "id": "adiantum",
    "name": "ホウライシダ属",
    "latin": "Adiantum",
    "examples": "ホウライシダ、ハコネシダ、クジャクシダ",
    "hasKey": false
  },
  {
    "id": "pteris",
    "name": "イノモトソウ属",
    "latin": "Pteris",
    "examples": "イノモトソウ、マツザカシダ、ハチジョウシダ",
    "hasKey": true
  },
  {
    "id": "polystichum",
    "name": "イノデ属",
    "latin": "Polystichum",
    "examples": "イノデ、サカゲイノデ、ジュウモンジシダ、タカネシダ",
    "hasKey": true
  },
  {
    "id": "cyrtomium",
    "name": "ヤブソテツ属",
    "latin": "Cyrtomium",
    "examples": "ヤブソテツ、オニヤブソテツ、ツクシヤブソテツ",
    "hasKey": false
  },
  {
    "id": "arachniodes",
    "name": "カナワラビ属",
    "latin": "Arachniodes",
    "examples": "オオカナワラビ、ホソバカナワラビ、ハカタシダ",
    "hasKey": true
  },
  {
    "id": "dryopteris",
    "name": "オシダ属",
    "latin": "Dryopteris",
    "examples": "オシダ、ベニシダ、イタチシダ、クマワラビ、ナチクジャク",
    "hasKey": true
  },
  {
    "id": "thelypteris",
    "name": "ヒメシダ属",
    "latin": "Thelypteris",
    "examples": "ヒメシダ、ゲジゲジシダ、ミヤマワラビ、ヤワラシダ",
    "hasKey": true
  },
  {
    "id": "athyrium",
    "name": "メシダ属",
    "latin": "Athyrium",
    "examples": "イヌワラビ、ヘビノネゴザ、サトメシダ、ミヤマメシダ",
    "hasKey": true
  },
  {
    "id": "diplazium",
    "name": "ヘラシダ属",
    "latin": "Diplazium",
    "examples": "ヘラシダ、キヨタキシダ、ノコギリシダ、オニヒカゲワラビ",
    "hasKey": false
  },
  {
    "id": "deparia",
    "name": "シケシダ属",
    "latin": "Deparia",
    "examples": "シケシダ、ホソバシケシダ、オオメシダ、ミヤマシケシダ",
    "hasKey": false
  },
  {
    "id": "woodsia",
    "name": "イワデンダ属",
    "latin": "Woodsia",
    "examples": "イワデンダ、フクロシダ、ヒメデンダ",
    "hasKey": false
  },
  {
    "id": "asplenium",
    "name": "チャセンシダ属",
    "latin": "Asplenium",
    "examples": "チャセンシダ、トキワシダ、ヌリトラノオ、クルマシダ",
    "hasKey": true
  },
  {
    "id": "polypodium",
    "name": "エゾデンダ属",
    "latin": "Polypodium",
    "examples": "エゾデンダ、オオエゾデンダ、ミョウギシダ",
    "hasKey": false
  },
  {
    "id": "lepisorus",
    "name": "ノキシノブ属",
    "latin": "Lepisorus",
    "examples": "ノキシノブ、ヒメノキシノブ、ホテイシダ、コウラボシ",
    "hasKey": false
  },
  {
    "id": "colysis",
    "name": "イワヒトデ属",
    "latin": "Colysis",
    "examples": "イワヒトデ、オオイワヒトデ、ヒトツバイワヒトデ",
    "hasKey": false
  },
  {
    "id": "crypsinus",
    "name": "ミツデウラボシ属",
    "latin": "Crypsinus",
    "examples": "ミツデウラボシ、ミヤマウラボシ、ヤクシマウラボシ",
    "hasKey": false
  }
];
