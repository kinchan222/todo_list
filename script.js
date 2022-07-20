
// ボタン要素を取得
let btn = document.getElementById("btn");

var index = 0;
// ボタンをクリックしたら
btn.addEventListener("click", function () {
    // inputのtextが取得される
    let text = document.getElementById("input");
    // inputで取得したものをtext.valueを代入
    const text_parent = text.value;
    if (text_parent !== "") {
        // 「ul]には子要素の「li]が必要。HTMLにないので「Li]を追加する
        let litg = document.createElement("li");
        let divtg = document.createElement("div");
        let icon = document.createElement("i");
        let icon2 = document.createElement("i");

        // // [li]タグにclass名を追加する
        litg.classList.add("todo_Contents");
        divtg.classList.add("buttons_icon");


        // circle-check画像をを作成
        icon.classList.add("fa-regular");
        icon.classList.add("fa-circle-check");

        // trash-can画像を追加
        icon2.classList.add("fa-regular");
        icon2.classList.add("fa-trash-can");

        // // [li]タグのコンテンツにボタンをクリックして取得したもの（text_parent）を入れる
        litg.textContent = text_parent;

        // // 取得した文字を入れるところ、todo_listを取得する
        let todo_list = document.querySelector(".todo_list")

        //  // 作成だけでは反映しない。親要素「ul」の中に子要素「li]をいれる（親と子を合わせる）
        todo_list.appendChild(litg);
        litg.appendChild(divtg);
        divtg.appendChild(icon);
        divtg.appendChild(icon2);

        // // todo_list.classList.add("on");
        //inputの中に入力された文字を消去する（値を''にする）
        text.value = "";

        // ●●画像取得●●
        let img = document.createElement("img");
        let pas = "";
        let alt = "";
        // img_pichuu.src = 'img/pichuu02.jpg'; // 画像パス
        // img_pichuu.alt = 'ピチュウ'; // 代替テキスト



        // // 達成buttonが押されたら
        icon.addEventListener("click", function () {
            index++;
            console.log(index);
            if (index > 21) {
                console.log(img);
                pas = 'img/raichuu04.jpg'; // 画像パス
                alt = 'ライチュウ'; // 代替テキスト

            } else if (index > 14) {
                console.log(img);
                pas = 'img/pikachuu03.jpg'; // 画像パス
                alt = 'ピカチュウ'; // 代替テキスト

            } else if (index > 7) {
                console.log(img);
                pas = 'img/pichuu02.jpg'; // 画像パス
                alt = 'ピチュウ'; // 代替テキスト

            } else {
                console.log(img);
                pas = 'img/egg01.jpg'; // 画像パス
                alt = 'egg'; // 代替テキスト
            }
            // 指定した要素にimg要素を挿入
            var picture = document.querySelector(".img_box");
            picture.innerHTML = `<img src="${pas}" alt="${alt}">`;
            console.log(`<img src="${pas}" alt="${alt}">`)
            divtg.parentElement.remove();
        })



        //  delete_btnがclickされたら画面から削除される
        icon2.addEventListener("click", function () {
            divtg.parentElement.remove();
        })

        // if文の最後のカッコ
    }

    // 大外枠のかっこ
})


// 達成ボタンがおされたら
// （　　　）にスコアが加算される
// 達成ボタンが7回押されたらスコアが ==7になったら、egg⇨pichuuに変化する
// 達成ボタンが14回押されたらスコアが ==14になったら、pichuuからピカチュウに変化する
// 達成ボタンが21回押されたらスコアが ==21になったら、ピカチュウからライチュウに変化する
// 達成ボタンが28回押されたらスコアが ==28になったら、ライチュウからアローに変化する
// それ以外は、eggのまま。


// Localstorageの説明
// 16.配列をつくる
// 17.コンソールに配列の中身を出す
// 18.関数を作る（関数にしただけで問題なく動くか確認）←　どの番号からどの番号までが同じ処理になるの？4番から15番まで
// 18.5 引数無しの関数を一回実施、その後引数あり関数に変更
// 19.関数使ってリロード時に配列の中身を出すようにする。
// 20.その後追加されたタスクを配列にPUSHする
// 21.配列をローカルストレージに保存する
// 21.5 保存するにはJSON化で文字列に！
// 22.保存されたものをリロードじ取り出し、④を行う
// 23.配列の中身が空だった時の条件を付け加える
// 24.削除した時に配列からも削除するようにする
// 25.削除後の内容をローカルストレージに保存