document.addEventListener('DOMContentLoaded', () => {
    // ボタンの動作を制御する小さなプログラム
    var mybutton = document.getElementById("scrollTopBtn");

    if (mybutton) {
        // スクロールしたらボタンを表示
        window.addEventListener('scroll', function() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        });

        // ボタンを押したらトップに戻る
        mybutton.addEventListener('click', function() {
            window.scrollTo({top: 0, behavior: 'smooth'}); // スムーズにスクロール
        });
    }

    // 画像拡大モーダル
    var modal = document.getElementById("myImageModal");
    var modalImg = document.getElementById("img01");
    var span = document.querySelector(".close-modal");
    var downloadLink = document.getElementById("downloadLink");

    if (modal && modalImg) {
        // クラス名 "article-image" または "gallery-img" がついている画像をすべて探す
        var images = document.querySelectorAll(".article-image, .gallery-img");

        // すべての画像に「クリックされたら拡大する」機能をつける
        images.forEach(function(img) {
            img.addEventListener('click', function(){
                modal.style.display = "block";
                modalImg.src = this.src; // クリックされた画像のURLをセット
                if (downloadLink) {
                    downloadLink.href = this.src; // ダウンロードリンクも更新
                }
            });
        });

        // 閉じるボタン（×）を押したら閉じる
        if (span) {
            span.addEventListener('click', function() { 
                modal.style.display = "none";
            });
        }

        // 拡大画像の背景（黒い部分）をクリックしても閉じるようにする
        modal.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    }
});
