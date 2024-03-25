// スムーススクロール
$('a[href^="#"]').click(function () {
    let href = $(this).attr('href');
    if (href == '#' || href == '') {
        href = 'html';
    } else if ($(this).attr('class') == 'header__hamburgerMenuItemLink') {
        toggleClassHeader();
    } else {
        // 何もしない
    }
    let target = $(href);
    let position = target.offset().top;
    $('body, html').stop().animate({ scrollTop: position }, 500, 'swing');
    return false;
});

// slickのコード
// スクリーンの横幅に合わせてslidesToShowプロパティを変更
$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    arrows: false,
    swipe: false,
    slidesToShow: 5,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
            }
        },
    ]
});

// fadeThisのコード
$(window).fadeThis({
    reverse: false,
    offset: 50,
});

// 矢印ボタンのクラスにhoverを追加・削除する関数
const toggleClassArrow = () => {
    $('.header__mainvisualArrowButton').toggleClass('hover');
};

// メインビジュアルの矢印をホバーした時の動作
$('.header__mainvisualArrowButton').hover(
    function () {
        toggleClassArrow();
    },
    function () {
        toggleClassArrow();
    }
);

// headerのクラスにopenを追加・削除する関数
const toggleClassHeader = () => {
    $('#header').toggleClass('open');
};

// ハンバーガーメニューボタンをクリックしたときの動作
$('#header__hamburgerButton').click(function () {
    toggleClassHeader();
});

// ハンバーガーメニューが表示されているときの、黒い背景をクリックしたときの動作
$('#header__hamburgerBlackPanel').click(function () {
    toggleClassHeader();
});