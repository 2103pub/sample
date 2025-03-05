document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded"); // デバッグ用ログ

    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // 1回だけ発火させる
            }
        });
    }, { threshold: 0.1 }); // しきい値を下げる

    sections.forEach(section => observer.observe(section));
});
const switchImg = document.getElementById("switch");
function changeImg(){
switchImg.classList.toggle("on_switch");
switchImg.addEventListener("click",changeImg);
}
var pics_src1 = ["public/images/accordion1.png", "public/images/content1.png"];
var num1 = 0;

function slideshow1(){
    var img = document.getElementById("mypic1");
    img.classList.add("fade-out");
    setTimeout(function() {
        num1 = (num1 + 1) % pics_src1.length;
        img.src = pics_src1[num1];
        img.classList.remove("fade-out");
    }, 500); // 0.5秒後に画像を切り替え
}

var pics_src2 = ["public/images/accordion2.png", "public/images/content2.png"];
var num2 = 0;

function slideshow2(){
    var img = document.getElementById("mypic2");
    img.classList.add("fade-out");
    setTimeout(function() {
        num2 = (num2 + 1) % pics_src2.length;
        img.src = pics_src2[num2];
        img.classList.remove("fade-out");
    }, 500); // 0.5秒後に画像を切り替え
}

var pics_src3 = ["public/images/accordion3.png", "public/images/content3.png"];
var num3 = 0;

function slideshow3(){
    var img = document.getElementById("mypic3");
    img.classList.add("fade-out");
    setTimeout(function() {
        num3 = (num3 + 1) % pics_src3.length;
        img.src = pics_src3[num3];
        img.classList.remove("fade-out");
    }, 500); // 0.5秒後に画像を切り替え
}

var pics_src4 = ["public/images/accordion4.png", "public/images/content4.png"];
var num4 = 0;

function slideshow4(){
    var img = document.getElementById("mypic4");
    img.classList.add("fade-out");
    setTimeout(function() {
        num4 = (num4 + 1) % pics_src4.length;
        img.src = pics_src4[num4];
        img.classList.remove("fade-out");
    }, 500); // 0.5秒後に画像を切り替え
}

var pics_src5 = ["public/images/accordion5.png", "public/images/content5.png"];
var num5 = 0;

function slideshow5(){
    var img = document.getElementById("mypic5");
    img.classList.add("fade-out");
    setTimeout(function() {
        num5 = (num5 + 1) % pics_src5.length;
        img.src = pics_src5[num5];
        img.classList.remove("fade-out");
    }, 500); // 0.5秒後に画像を切り替え
}
document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.addEventListener("click", function() {
            // すでに開いているものを閉じる
            faqItems.forEach(faq => {
                if (faq !== item) {
                    faq.classList.remove("active");
                }
            });
            // クリックしたものを開閉
            item.classList.toggle("active");
        });
    });
});

$(function () {
    // ウィンドウをスクロールしたら…
    $(window).scroll(function () {
        // ウィンドウの高さを取得
        const wHeight = $(window).height();
        // スクロールした量を取得
        const wScroll = $(window).scrollTop();
            // それぞれのblockクラスに対して…
            $(".block").each(function () {
                // それぞれのblockクラスのウィンドウからの高さを取得
                const bPosition = $(this).offset().top;
                // スクロールした量が要素の高さを上回ったら
                // その数値にウィンドウの高さを引き、最後に200pxを足す
            if (wScroll > bPosition - wHeight + 200) {
                $(this).addClass("fadeIn");
            }
        });
    });
});