// Localized content for en-* locales

const {getPetAudio, getPetVoice} = require('./utils');

module.exports = {
    GENERIC_GREETING: "こんにちは。",
    GENERIC_RETURN_GREETING: "おかえりなさい。",
    VISIT_PET_SHOP_PROMPT: "はじめまして。あなたの街に新しいデジタルペットショップ「ポッシュペット」がオープンしました。いろんな種類のかわいいペットが揃っていますよ。ちょうど何種類かの犬と猫が入荷したようです。私と一緒にペットショップに行って、あなたにぴったりのペットを探しませんか？",
    VISIT_PET_STORE_REPROMPT: "ペットショップに行って、ペットを探しますか？",
    GIVE_PETS: "{{name}} はあなたの家が気に入ったようです。新しいペットと遊びますか？",
    GIVE_PETS_REPROMPT: "{{name}} と遊びますか？",

    FIRST_VISIT: "いいですね！では行きましょう。",
    RETURN_VISIT: "わかりました、ではペットショップに別のペットを見に行きましょう。",

    SHOP_KEEPER_GREETING: "<voice name='Hans'>こんにちは。私はティムといいます。店内をゆっくり見て回って、なにかあれば呼んでください。うちには猫や犬、そして色んな種類の珍しい動物がいますよ。</voice>",
    SHOP_KEEPER_GREETING_HAS_PETS: [
        "<voice name='Hans'>また来てくれてありがとうございます。今日は何をご覧になりますか？ {{animalTypesAvailable}}?</voice>",
        "<voice name='Hans'>こんにちは。また来てくれたんですね。ご覧になりたいペットがあれば言ってください。 {{animalTypesAvailable}}?</voice>"
    ],
    PET_TYPE_PROMPT: "ありがとう、ティム。<break time='2s'/>じゃあ、どんな種類の動物を飼いたいか、言ってみてください。",
    ENTER_PET_STORE_REPROMPT: "どんな種類の動物を買いたいですか？ {{animalTypesAvailable}}?",
    ANIMAL_TYPE_dog: "犬",
    ANIMAL_TYPE_cat: "猫",
    ANIMAL_TYPE_rare_collection: "珍しい種類の動物",

    ANIMAL_TYPE_SELECTED_dog: "私も犬は大好きです。ねぇ、ティム、犬を見せてもらえますか？",
    ANIMAL_TYPE_SELECTED_cat: "猫はとてもかわいくて抱きしめたくなりますよね。早く見たいです。ねぇ、ティム、猫を見せてもらえますか？",
    ANIMAL_TYPE_SELECTED_rare_collection: "神秘的で気になりますね。ねぇ、ティム、珍しい動物を見せてもらえますか？",
    ANIMAL_TYPE_NOT_AVAILABLE: "そういう動物のここにはいないと思います。{{prompt}}",
    ANIMAL_TYPES_AVAILABLE_REPROMPT: "どれを見たいですか？ {{animalTypesAvailable}}",

    SHOP_KEEPER_RIGHT_THIS_WAY: [
        "<voice name='Hans'>もちろんですよ。こちらです。</voice>",
        "<voice name='Hans'>もちろん。こちらにどうぞ。</voice>",
        "<voice name='Hans'>いいですよ、ついてきてください。</voice>"
    ],
    ANIMALS_AVAILABLE_COUNT: "<voice name='Hans'>今、店内には{{count}} 匹、いますよ。</voice>",
    ANIMAL_INTRO: "<voice name='Hans'>{{pet.breed}} の {{pet.name}}</voice> ",
    ANIMAL_TYPE_SELECTED_PROMPT: "<voice name='Hans'>このペットについてもっと詳しく聞きたいですか？</voice>",
    ANIMAL_TYPE_SELECTED_PROMPT_plural: "<voice name='Hans'>どれについてもっと知りたいですか？</voice>",
    ANIMAL_TYPE_SELECTED_REPROMPT: "どれについてもっと知りたいですか？",
    PET_CATALOG_DISPLAY_TITLE: "ペットカタログ",

    ABOUT_PET_RASCAL: [
        getPetVoice('RASCAL', 'やぁやぁやぁ、こんにちは。元気？僕はラスカルだよ。'),
        getPetAudio('RASCAL'),
        getPetVoice('RASCAL', '僕は走ったりジャンプするのが大好き大好き大好きなんだ。僕を君のペットにしてよ、お願いお願いお願い！'),
        getPetAudio('RASCAL')
    ],
    ABOUT_PET_BONBON: [
        getPetVoice('BONBON', 'ボンジュール、モナムール。'),
        getPetAudio('BONBON'),
        getPetVoice('BONBON', 'わたくしはボンボン。あなたがこれまで見た中で最高にふわふわなプードルよ。'),
        getPetAudio('BONBON')
    ],
    ABOUT_PET_LARRY: [
        getPetVoice('LARRY', 'こんにちは、お前。'),
        getPetAudio('LARRY'),
        getPetVoice('LARRY', '俺、ラリー、おまえ、選ぶ。'),
        getPetAudio('LARRY'),
        getPetAudio('LARRY', '俺、とても小さい。でも、お前の一生のチワワの友、なる。'),
        getPetAudio('LARRY')
    ],
    ABOUT_PET_CHESTER: [
        getPetAudio('CHESTER'),
        getPetVoice('CHESTER', 'ごきげんよう、親愛なる民よ。私の名前はチェスター。貴殿のネコ科の友として私を選択願えないだろうか？')
    ],
    ABOUT_PET_BELLE: [
        getPetVoice('BELLE', 'もしどれかを選ばないといけないんだったら、私、ベルでもいいと思うわよ。あなたがそれでいいというなら、別になんだっていいんだけど。'),
        getPetAudio('BELLE')
    ],
    ABOUT_PET_KOKO: [
        getPetVoice('KOKO', '私なら最高の友だちになれると誓って言えるわ。'),
        getPetAudio('KOKO'),
        getPetVoice('KOKO', '私の名前はココ。あなたの家族の一員にしてちょうだい。')
    ],
    ABOUT_PET_SCALES: [
        getPetVoice('SCALES', 'スケールズでございます。何なりとお申し付けください。'),
        getPetAudio('SCALES'),
        getPetVoice('SCALES', '私のようなセンセーショナルな者を選んでみてはいかがでしょうか？'),
        getPetAudio('SCALES')
    ],
    ABOUT_PET_FEATHERS: [
        getPetAudio('FEATHERS'),
        getPetVoice('FEATHERS', 'やぁ、こんにちは。私の名前はフェザーズ。いいペットの条件ならいくつか知ってるよ。その条件の一つは、私が完璧なペットってことさ。だから、私を選んでよ。'),
        getPetAudio('FEATHERS')
    ],
    ABOUT_PET_HOPS: [
        getPetVoice('HOPS', 'よぅ。'),
        getPetAudio('HOPS'),
        getPetVoice('HOPS', '元気かい。'),
        getPetAudio('HOPS'),
        getPetVoice('HOPS', '俺の名前はホップス。ジャンプするのが大好きなんだ。最高のウサギだぜ。')
    ],

    ASK_TO_ADOPT_PET: "<voice name='Hans'>{{pet.name}} を家に連れて帰りますか？</voice>",

    ANIMAL_NOT_AVAILABLE: "それはいないと思います。どれを見たいですか？",
    ANIMAL_NOT_AVAILABLE_REPROMPT: "どれについてもっと聞きたいですか？",

    DO_NOT_ADOPT_PET: "わかりました。次はどれを見たいですか？ {{animalTypesAvailable}}",
    ADOPT_PET: "キュートで可愛らしい {{pet.name}} にしたいと思います。",
    SENT_BACK_PROMPT: "あなたの家はもうペットでいっぱいです。{{pet.name}} は、ティムのペットショップに帰りました。いつでもペットショップにいって、ペットを連れて変えることができます。",
    PET_SHOP_KEEPER_GOODBYE: "<voice name='Hans'>お目が高い！ご来店いただきありがとうございました。</voice>",
    NEW_PET_AT_HOME: "なんて可愛いんでしょう。次にペットショップごっこを利用したときには、{{pet.name}} が家で待っていますよ。",
    PLAY_AGAIN: "もう一度遊びますか？",

    THANKS_FOR_PETS_RASCAL: [
        [getPetAudio('RASCAL'), getPetVoice('RASCAL', 'ありがとうありがとうありがとう、それを待ってたよ！')],
        [getPetAudio('RASCAL'), getPetVoice('RASCAL', 'あぁ、君って最高だね。')],
        [getPetAudio('RASCAL'), getPetVoice('RASCAL', 'それを聞くのは何度聞いてもいいもんだね。')]
    ],
    THANKS_FOR_PETS_LARRY: [
        [getPetAudio('LARRY'), getPetVoice('LARRY', 'ああ、いい。'), getPetAudio('LARRY'), getPetVoice('LARRY', 'もうちょい耳の右。あぁ、そこ、最高。')],
        [getPetAudio('LARRY'), getPetVoice('LARRY', '待ってた。')],
        [getPetAudio('LARRY'), getPetVoice('LARRY', 'それ、ありがとう。')]
    ],
    THANKS_FOR_PETS_BONBON: [
        [getPetVoice('BONBON', 'あぁ。メルシー、メルシー。'), getPetAudio('BONBON')],
        [getPetVoice('BONBON', '一番最初に思い浮かべてもらえて、シルブプレ。'), getPetAudio('BONBON')],
        [getPetVoice('BONBON', 'ジュテーム。あなたは素晴らしいわ。'), getPetAudio('BONBON')]
    ],
    THANKS_FOR_PETS_CHESTER: [
        [getPetVoice('CHESTER', 'ではペットとやらを楽しむとしよう。感謝する。'), getPetAudio('CHESTER')],
        [getPetVoice('CHESTER', '貴殿は紛うことなく最高の人物だ。'), getPetAudio('CHESTER')],
        [getPetVoice('CHESTER', 'おぉ、これ以上何を望めようか。'), getPetAudio('CHESTER')]
    ],
    THANKS_FOR_PETS_BELLE: [
        [getPetAudio('BELLE'),getPetVoice('BELLE', 'ありがとう、と言えばいいのかしら。')],
        [getPetVoice('BELLE', 'わかった、わかった。'),getPetAudio('BELLE'), getPetVoice('BELLE', 'もう十分よ。')],
        [getPetVoice('BELLE', 'どうぞ、好きにすれば。もう他のペットには飽きたんでしょ。'), getPetAudio('BELLE')]
    ],
    THANKS_FOR_PETS_KOKO: [
        [getPetAudio('KOKO'),getPetVoice('KOKO', 'あなたって最高ね。ありがとう。')],
        [getPetAudio('KOKO'),getPetVoice('KOKO', 'ありがとう。')],
        [getPetAudio('KOKO'),getPetVoice('KOKO', 'すばらしいわ。ありがとう。')]
    ],
    THANKS_FOR_PETS_SCALES: [
        [getPetVoice('SCALES', 'なんとセンセーショナルなのでしょう。恐れ入ります。'), getPetAudio('SCALES')],
        [getPetVoice('SCALES', 'なんと素晴らしいことでしょう。'), getPetAudio('SCALES')],
        [getPetVoice('SCALES', 'とても格別な思いでございます。'), getPetAudio('SCALES')]
    ],
    THANKS_FOR_PETS_FEATHERS: [
        [getPetVoice('FEATHERS', 'あぁ、'), getPetAudio('FEATHERS'), getPetVoice('FEATHERS', '天にも登るような幸せな気分だよ。')],
        [getPetVoice('FEATHERS', 'あぁ、'), getPetAudio('FEATHERS'), getPetVoice('FEATHERS', 'とても感謝するよ。')],
        [getPetAudio('FEATHERS'), getPetVoice('FEATHERS', '君といると、幸せで飛び立ちたくなるよ。')]
    ],
    THANKS_FOR_PETS_HOPS: [
        [getPetAudio('HOPS'), getPetAudio('HOPS'), getPetVoice('HOPS', 'ありがとうよ、相棒。')],
        [getPetAudio('HOPS'), getPetAudio('HOPS'), getPetVoice('HOPS', 'なんてこった、おめえは最高だな。')],
        [getPetAudio('HOPS'), getPetAudio('HOPS'), getPetVoice('HOPS', '今のは良かったぜ。')]
    ],

    GIVE_MORE_PETS: "もっと {{pet.name}} とあそびますか？ それともペットショップに行きますか？",

    PET_NAME_RASCAL: "ラスカル",
    PET_NAME_BONBON: "ボンボン",
    PET_NAME_LARRY: "ラリー",
    PET_NAME_CHESTER: "チェスター",
    PET_NAME_BELLE: "ベル",
    PET_NAME_KOKO: "ココ",
    PET_NAME_SCALES: "スケールズ",
    PET_NAME_FEATHERS: "フェザー",
    PET_NAME_HOPS: "ホップス",

    PET_BREED_BEAGLE: "ビーグル",
    PET_BREED_POODLE: "プードル",
    PET_BREED_CHIHUAHUA: "チワワ",
    PET_BREED_BRITISH_SHORTHAIR: "ブリティッシュショートヘアー",
    PET_BREED_RAGDOLL: "ラグドール",
    PET_BREED_KORAT: "コラット",
    PET_BREED_SNAKE: "蛇",
    PET_BREED_BIRD: "鳥",
    PET_BREED_BUNNY: "兎",

    HELP: "ペットの話は、バーチャルなペットを家に連れて帰るゲームです。行き詰まったり、何をしていいかわからなくなった場合は、「アレクサ、最初に戻って」と言ってください。",
    HELP_REPROMPT: "行き詰まったり、何をしていいかわからなくなった場合は、「アレクサ、最初に戻って」と言ってください。",

    FALLBACK: "ごめんなさい、うまく聞き取れませんでした。もう一度行ってみてください。",
    FALLBACK_REPROMPT: "もう一度言ってみてください。",

    ERROR: "<audio src=\"soundbank://soundlibrary/animals/amzn_sfx_cat_angry_meow_1x_02\"/> あらら、エラーが起きたようです。しばらく経ってからもう一度やってみてください。",
    EXIT: "バイバイ",
    DISJUNCTION: "そして"
};