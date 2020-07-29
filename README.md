# apl-for-audio-sample-pet-tales-jp

Alexa Live 2020で発表されたAPL for Audioを使用したペットショップスキルのサンプルです。

以下の公式サンプルを元に、日本語化+Alexa-hosetedでインポートできるようにしてあります。
https://github.com/alexa/skill-sample-nodejs-pet-tales

## 使い方

1. Alexa開発者コンソールで新規スキル作成
  - スキル名は適当でよい（はず）
  - カスタム・Alexa-Hosted(Node.js)を選択
  - 「スキルを作成」をクリック
2. テンプレートの選択画面で「スキルをインポート」をクリックして、URLに`https://github.com/kun432/apl-for-audio-sample-pet-tales-jp.git`を入力してインポート
3. テストシミュレータで「開発中」ステージに変更
4. 呼び出し名「ペットショップごっこ」で起動

## 免責

- ペットの声について
  - 公式のサンプルでは多数のPolly音声を使ってペットの声を使い分けています。
  - 日本語の場合、音声の選択肢がAlexa/Mizuki/Takumiしかなく、多数の声の違いを再現するにはSSMLで微調整するしかありませんが、これはとても手間がかかります。
  - 本サンプルではそこは修正せずに英語と同じ音声をそのまま使っています。なので、カタコトの日本語っぽい感じになっています。
- 一部の部分は日本語化できていません。