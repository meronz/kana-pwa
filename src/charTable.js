// ぁ	Hiragana letter small A
// あ	Hiragana letter A
// ぃ	Hiragana letter small I
// い	Hiragana letter I
// ぅ	Hiragana letter small U
// う	Hiragana letter U
// ぇ	Hiragana letter small E
// え	Hiragana letter E
// ぉ	Hiragana letter small O
// お	Hiragana letter O
// か	Hiragana letter KA
// が	Hiragana letter GA
// き	Hiragana letter KI
// ぎ	Hiragana letter GI
// く	Hiragana letter KU
// ぐ	Hiragana letter GU
// け	Hiragana letter KE
// げ	Hiragana letter GE
// こ	Hiragana letter KO
// ご	Hiragana letter GO
// さ	Hiragana letter SA
// ざ	Hiragana letter ZA
// し	Hiragana letter SI
// じ	Hiragana letter ZI
// す	Hiragana letter SU
// ず	Hiragana letter ZU
// せ	Hiragana letter SE
// ぜ	Hiragana letter ZE
// そ	Hiragana letter SO
// ぞ	Hiragana letter ZO
// た	Hiragana letter TA
// だ	Hiragana letter DA
// ち	Hiragana letter TI
// ぢ	Hiragana letter DI
// っ	Hiragana letter small TU
// つ	Hiragana letter TU
// づ	Hiragana letter DU
// て	Hiragana letter TE
// で	Hiragana letter DE
// と	Hiragana letter TO
// ど	Hiragana letter DO
// な	Hiragana letter NA
// に	Hiragana letter NI
// ぬ	Hiragana letter NU
// ね	Hiragana letter NE
// の	Hiragana letter NO
// は	Hiragana letter HA
// ば	Hiragana letter BA
// ぱ	Hiragana letter PA
// ひ	Hiragana letter HI
// び	Hiragana letter BI
// ぴ	Hiragana letter PI
// ふ	Hiragana letter HU
// ぶ	Hiragana letter BU
// ぷ	Hiragana letter PU
// へ	Hiragana letter HE
// べ	Hiragana letter BE
// ぺ	Hiragana letter PE
// ほ	Hiragana letter HO
// ぼ	Hiragana letter BO
// ぽ	Hiragana letter PO
// ま	Hiragana letter MA
// み	Hiragana letter MI
// む	Hiragana letter MU
// め	Hiragana letter ME
// も	Hiragana letter MO
// ゃ	Hiragana letter small YA
// や	Hiragana letter YA
// ゅ	Hiragana letter small YU
// ゆ	Hiragana letter YU
// ょ	Hiragana letter small YO
// よ	Hiragana letter YO
// ら	Hiragana letter RA
// り	Hiragana letter RI
// る	Hiragana letter RU
// れ	Hiragana letter RE
// ろ	Hiragana letter RO
// ゎ	Hiragana letter small WA
// わ	Hiragana letter WA
// ゐ	Hiragana letter WI
// ゑ	Hiragana letter WE
// を	Hiragana letter WO
// ん	Hiragana letter N

export var hiraganaToRomaji_Table = {
  あ: "A",
  い: "I",
  う: "U",
  え: "E",
  お: "O",
  か: "KA",
  が: "GA",
  き: "KI",
  ぎ: "GI",
  く: "KU",
  ぐ: "GU",
  け: "KE",
  げ: "GE",
  こ: "KO",
  ご: "GO",
  さ: "SA",
  ざ: "ZA",
  し: "SI",
  じ: "JI",
  す: "SU",
  ず: "ZU",
  せ: "SE",
  ぜ: "ZE",
  そ: "SO",
  ぞ: "ZO",
  た: "TA",
  だ: "DA",
  ち: "TI",
  ぢ: "DI",
  つ: "TU",
  づ: "DU",
  て: "TE",
  で: "DE",
  と: "TO",
  ど: "DO",
  な: "NA",
  に: "NI",
  ぬ: "NU",
  ね: "NE",
  の: "NO",
  は: "HA",
  ば: "BA",
  ぱ: "PA",
  ひ: "HI",
  び: "BI",
  ぴ: "PI",
  ふ: "HU",
  ぶ: "BU",
  ぷ: "PU",
  へ: "HE",
  べ: "BE",
  ぺ: "PE",
  ほ: "HO",
  ぼ: "BO",
  ぽ: "PO",
  ま: "MA",
  み: "MI",
  む: "MU",
  め: "ME",
  も: "MO",
  や: "YA",
  ゆ: "YU",
  よ: "YO",
  ら: "RA",
  り: "RI",
  る: "RU",
  れ: "RE",
  ろ: "RO",
  わ: "WA",
  ゐ: "WI",
  ゑ: "WE",
  を: "WO",
  ん: "N"
};

export var romajiToHiragana_Table = {
  A: "あ",
  I: "い",
  U: "う",
  E: "え",
  O: "お",
  KA: "か",
  GA: "が",
  KI: "き",
  GI: "ぎ",
  KU: "く",
  GU: "ぐ",
  KE: "け",
  GE: "げ",
  KO: "こ",
  GO: "ご",
  SA: "さ",
  ZA: "ざ",
  SI: "し",
  JI: "じ",
  ZI: "じ",
  SU: "す",
  ZU: "ず",
  SE: "せ",
  ZE: "ぜ",
  SO: "そ",
  ZO: "ぞ",
  TA: "た",
  DA: "だ",
  TI: "ち",
  DI: "ぢ",
  TU: "つ",
  DU: "づ",
  TE: "て",
  DE: "で",
  TO: "と",
  DO: "ど",
  NA: "な",
  NI: "に",
  NU: "ぬ",
  NE: "ね",
  NO: "の",
  HA: "は",
  BA: "ば",
  PA: "ぱ",
  HI: "ひ",
  BI: "び",
  PI: "ぴ",
  HU: "ふ",
  BU: "ぶ",
  PU: "ぷ",
  HE: "へ",
  BE: "べ",
  PE: "ぺ",
  HO: "ほ",
  BO: "ぼ",
  PO: "ぽ",
  MA: "ま",
  MI: "み",
  MU: "む",
  ME: "め",
  MO: "も",
  YA: "や",
  YU: "ゆ",
  YO: "よ",
  RA: "ら",
  RI: "り",
  RU: "る",
  RE: "れ",
  RO: "ろ",
  WA: "わ",
  WI: "ゐ",
  WE: "ゑ",
  WO: "を",
  N: "ん"
};
