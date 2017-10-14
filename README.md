# firebase test application
* 画像をアップロードしまくれるアプリ
* `Drop files here`ってとこにファイルを突っ込むと(複数可)いいかんじにファイルがアップロードできる
* ファイルをアップロードすると、ほかのユーザーの画面でも、ソッコー画像が表示できる
* 画像を消すことはできないので、やばい画像をアップロードするのはオススメしない
* firebaseの仕様的に、無料だと1GBまでしか保存できないので、敵が本気出すとすぐ死ぬ
* とはいえ、さすがに1GBものファイルをアップロードしたら、ブラウザの方が先に死ぬでしょう

# demo
* [demo](https://naoki-tomita.github.io/firebase-app/)

## how to use
* ログインするかはじめてかを尋ねられるのですが、なにも考えずにログインボタンを押下してください
    * すでに入力済みのID, Passwordで入れます。
* ログインできたら、これまでに追加された画像がみられると思います。
* あとは、適当にファイルをアップロードしろ