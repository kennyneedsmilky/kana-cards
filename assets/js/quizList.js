/* ケンミル */ /* 神様最高 */ "use strict"; //クイズリスト
const quizList = [
    // { _id: "", quizSet: "h", name: "Quiz", kanaInQuiz: ["", "", "", "", ""] },
    // Hiragana Quizzes
    { _id: "h01", quizSet: "h", name: "Hiragana Quiz 1", kanaInQuiz: ["あ", "い", "う", "え", "お"] },
    { _id: "h02", quizSet: "h", name: "Hiragana Quiz 2", kanaInQuiz: ["か", "き", "く", "け", "こ"] },
    { _id: "h03", quizSet: "h", name: "Hiragana Quiz 3", kanaInQuiz: ["さ", "し", "す", "せ", "そ"] },
    { _id: "h04", quizSet: "h", name: "Hiragana Quiz 4", kanaInQuiz: ["た", "ち", "つ", "て", "と"] },
    { _id: "h05", quizSet: "h", name: "Hiragana Quiz 5", kanaInQuiz: ["な", "に", "ぬ", "ね", "の"] },
    { _id: "h06", quizSet: "h", name: "Hiragana Quiz 6", kanaInQuiz: ["は", "ひ", "ふ", "へ", "ほ"] },
    { _id: "h07", quizSet: "h", name: "Hiragana Quiz 7", kanaInQuiz: ["ま", "み", "む", "め", "も"] },
    { _id: "h08", quizSet: "h", name: "Hiragana Quiz 8", kanaInQuiz: ["や", "ゆ", "よ"] },
    { _id: "h09", quizSet: "h", name: "Hiragana Quiz 9", kanaInQuiz: ["ら", "り", "る", "れ", "ろ"] },
    { _id: "h10", quizSet: "h", name: "Hiragana Quiz 10", kanaInQuiz: ["わ", "お", "ん"] },
    { _id: "h11", quizSet: "h", name: "Hiragana Milestone 1", kanaInQuiz: ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "お", "ん"] },
    { _id: "h12", quizSet: "h", name: "ひらがな Quiz 11", kanaInQuiz: ["が", "ぎ", "ぐ", "げ", "ご"] },
    { _id: "h13", quizSet: "h", name: "ひらがな Quiz 12", kanaInQuiz: ["ざ", "じ", "ず", "ぜ", "ぞ"] },
    { _id: "h14", quizSet: "h", name: "ひらがな Quiz 13", kanaInQuiz: ["だ", "ぢ", "づ", "で", "ど"] },
    { _id: "h15", quizSet: "h", name: "ひらがな Quiz 14", kanaInQuiz: ["ば", "び", "ぶ", "べ", "ぼ"] },
    { _id: "h16", quizSet: "h", name: "ひらがな Quiz 15", kanaInQuiz: ["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"] },
    { _id: "h17", quizSet: "h", name: "ひらがな Quiz 16", kanaInQuiz: ["きゃ", "きゅ", "きょ", "ぎゃ", "ぎゅ", "ぎょ"] },
    { _id: "h18", quizSet: "h", name: "ひらがな Quiz 17", kanaInQuiz: ["しゃ", "しゅ", "しょ", "じゃ", "じゅ", "じょ"] },
    { _id: "h19", quizSet: "h", name: "ひらがな Quiz 18", kanaInQuiz: ["ちゃ", "ちゅ", "ちょ", "にゃ", "にゅ", "にょ"] },
    { _id: "h20", quizSet: "h", name: "ひらがな Quiz 19", kanaInQuiz: ["ひゃ", "ひゅ", "ひょ", "びゃ", "びゅ", "びょ", "ぴゃ", "ぴゅ", "ぴょ"] },
    { _id: "h21", quizSet: "h", name: "ひらがな Quiz 20", kanaInQuiz: ["みゃ", "みゅ", "みょ", "りゃ", "りゅ", "りょ"] },
    { _id: "h22", quizSet: "h", name: "ひらがな Milestone 2", kanaInQuiz: ["が", "ぎ", "ぐ", "げ", "ご", "ざ", "じ", "ず", "ぜ", "ぞ", "だ", "ぢ", "づ", "で", "ど", "ば", "び", "ぶ", "べ", "ぼ", "ぱ", "ぴ", "ぷ", "ぺ", "ぽ", "きゃ", "きゅ", "きょ", "ぎゃ", "ぎゅ", "ぎょ", "しゃ", "しゅ", "しょ", "じゃ", "じゅ", "じょ", "ちゃ", "ちゅ", "ちょ", "にゃ", "にゅ", "にょ", "ひゃ", "ひゅ", "ひょ", "びゃ", "びゅ", "びょ", "ぴゃ", "ぴゅ", "ぴょ", "みゃ", "みゅ", "みょ", "りゃ", "りゅ", "りょ"] },
    { _id: "h23", quizSet: "h", name: "All ひらがな Quiz", kanaInQuiz: ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "お", "ん", "が", "ぎ", "ぐ", "げ", "ご", "ざ", "じ", "ず", "ぜ", "ぞ", "だ", "ぢ", "づ", "で", "ど", "ば", "び", "ぶ", "べ", "ぼ", "ぱ", "ぴ", "ぷ", "ぺ", "ぽ", "きゃ", "きゅ", "きょ", "ぎゃ", "ぎゅ", "ぎょ", "しゃ", "しゅ", "しょ", "じゃ", "じゅ", "じょ", "ちゃ", "ちゅ", "ちょ", "にゃ", "にゅ", "にょ", "ひゃ", "ひゅ", "ひょ", "びゃ", "びゅ", "びょ", "ぴゃ", "ぴゅ", "ぴょ", "みゃ", "みゅ", "みょ", "りゃ", "りゅ", "りょ"] },
    // Katakana Quizzes
    { _id: "k01", quizSet: "k", name: "Katakana Quiz 1", kanaInQuiz: ["ア", "イ", "ウ", "エ", "オ"] },
    { _id: "k02", quizSet: "k", name: "Katakana Quiz 2", kanaInQuiz: ["カ", "キ", "ク", "ケ", "コ"] },
    { _id: "k03", quizSet: "k", name: "Katakana Quiz 3", kanaInQuiz: ["サ", "シ", "ス", "セ", "ソ"] },
    { _id: "k04", quizSet: "k", name: "Katakana Quiz 4", kanaInQuiz: ["タ", "チ", "ツ", "テ", "ト"] },
    { _id: "k05", quizSet: "k", name: "Katakana Quiz 5", kanaInQuiz: ["ナ", "ニ", "ヌ", "ネ", "ノ"] },
    { _id: "k06", quizSet: "k", name: "Katakana Quiz 6", kanaInQuiz: ["ハ", "ヒ", "フ", "ヘ", "ホ"] },
    { _id: "k07", quizSet: "k", name: "Katakana Quiz 7", kanaInQuiz: ["マ", "ミ", "ム", "メ", "モ"] },
    { _id: "k08", quizSet: "k", name: "Katakana Quiz 8", kanaInQuiz: ["ヤ", "ユ", "ヨ"] },
    { _id: "k09", quizSet: "k", name: "Katakana Quiz 9", kanaInQuiz: ["ラ", "リ", "ル", "レ", "ロ"] },
    { _id: "k10", quizSet: "k", name: "Katakana Quiz 10", kanaInQuiz: ["ワ", "オ", "ン"] },
    { _id: "k11", quizSet: "k", name: "Katakana Milestone 1", kanaInQuiz: ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ワ", "オ", "ン"] },
    { _id: "k12", quizSet: "k", name: "カタカナ Quiz 11", kanaInQuiz: ["ガ", "ギ", "グ", "ゲ", "ゴ"] },
    { _id: "k13", quizSet: "k", name: "カタカナ クイズ 12", kanaInQuiz: ["ザ", "ジ", "ズ", "ゼ", "ゾ"] },
    { _id: "k14", quizSet: "k", name: "カタカナ クイズ 13", kanaInQuiz: ["ダ", "ヂ", "ヅ", "デ", "ド"] },
    { _id: "k15", quizSet: "k", name: "カタカナ クイズ 14", kanaInQuiz: ["バ", "ビ", "ブ", "ベ", "ボ"] },
    { _id: "k16", quizSet: "k", name: "カタカナ クイズ 15", kanaInQuiz: ["パ", "ピ", "プ", "ペ", "ポ"] },
    { _id: "k17", quizSet: "k", name: "カタカナ クイズ 16", kanaInQuiz: ["キャ", "キュ", "キョ", "ギャ", "ギュ", "ギョ"] },
    { _id: "k18", quizSet: "k", name: "カタカナ クイズ 17", kanaInQuiz: ["シャ", "シュ", "ショ", "ジャ", "ジュ", "ジョ"] },
    { _id: "k19", quizSet: "k", name: "カタカナ クイズ 18", kanaInQuiz: ["チャ", "チュ", "チョ", "ニャ", "ニュ", "ニョ"] },
    { _id: "k20", quizSet: "k", name: "カタカナ クイズ 19", kanaInQuiz: ["ひゃ", "ひゅ", "ひょ", "びゃ", "びゅ", "びょ", "ぴゃ", "ぴゅ", "ぴょ"] },
    { _id: "k21", quizSet: "k", name: "カタカナ クイズ 20", kanaInQuiz: ["ミャ", "ミュ", "ミョ", "リャ", "リュ", "リョ"] },
    { _id: "k22", quizSet: "k", name: "カタカナ クイズ 21", kanaInQuiz: ["ウィ", "ウェ", "ウォ", "シェ", "ジェ", "チェ", "ティ", "ディ", "デュ"] },
    { _id: "k23", quizSet: "k", name: "カタカナ クイズ 22", kanaInQuiz: ["ファ", "フィ", "フェ", "フォ"] },
    { _id: "k24", quizSet: "k", name: "カタカナ マイルストーン 2", kanaInQuiz: ["ガ", "ギ", "グ", "ゲ", "ゴ", "ザ", "ジ", "ズ", "ゼ", "ゾ", "ダ", "ヂ", "ヅ", "デ", "ド", "バ", "ビ", "ブ", "ベ", "ボ", "パ", "ピ", "プ", "ペ", "ポ", "キャ", "キュ", "キョ", "ギャ", "ギュ", "ギョ", "シャ", "シュ", "ショ", "ジャ", "ジュ", "ジョ", "チャ", "チュ", "チョ", "ニャ", "ニュ", "ニョ", "ひゃ", "ひゅ", "ひょ", "びゃ", "びゅ", "びょ", "ぴゃ", "ぴゅ", "ぴょ", "ミャ", "ミュ", "ミョ", "リャ", "リュ", "リョ", "ウィ", "ウェ", "ウォ", "シェ", "ジェ", "チェ", "ティ", "ディ", "デュ", "ファ", "フィ", "フェ", "フォ"] },
    { _id: "k25", quizSet: "k", name: "All カタカナ Quiz", kanaInQuiz: ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ワ", "オ", "ン", "ガ", "ギ", "グ", "ゲ", "ゴ", "ザ", "ジ", "ズ", "ゼ", "ゾ", "ダ", "ヂ", "ヅ", "デ", "ド", "バ", "ビ", "ブ", "ベ", "ボ", "パ", "ピ", "プ", "ペ", "ポ", "キャ", "キュ", "キョ", "ギャ", "ギュ", "ギョ", "シャ", "シュ", "ショ", "ジャ", "ジュ", "ジョ", "チャ", "チュ", "チョ", "ニャ", "ニュ", "ニョ", "ひゃ", "ひゅ", "ひょ", "びゃ", "びゅ", "びょ", "ぴゃ", "ぴゅ", "ぴょ", "ミャ", "ミュ", "ミョ", "リャ", "リュ", "リョ", "ウィ", "ウェ", "ウォ", "シェ", "ジェ", "チェ", "ティ", "ディ", "デュ", "ファ", "フィ", "フェ", "フォ"] },
]