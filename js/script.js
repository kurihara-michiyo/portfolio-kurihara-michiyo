$(function () {

  //ページ内スクロール
  let $nav = $(".header");
  let navHeight = $nav.outerHeight();

  $('a[href^="#"]').on("click", function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top - navHeight;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      300,
      "swing"
    );
    return false;
  });

  //スクロールに応じてヘッダーの背景色が変化
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.header').addClass('active');
    } else {
      $('.header').removeClass('active');
    }
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });
});

// ---------------------------------------------
// ローディング画面
// ----------------------------------------------
const loading = document.querySelector('.loading');
window.addEventListener('load', () => {
  setTimeout(function () {
    loading.classList.add('hidden');
  }, 4000);//1000は表示までの時間
});



// スクロール時その場ふわっと表示
function scroll_effect1() {
  let elements = document.getElementsByClassName('load-fade');
  if (!elements) return;

  let scrollY = window.pageYOffset;
  let windowH = window.innerHeight;
  let showTiming = 400; // 要素を表示するタイミング
  for (let i = 0; i < elements.length; i++) {
    let elemClientRect = elements[i].getBoundingClientRect();
    let elemY = scrollY + elemClientRect.top;
    if (scrollY > elemY - windowH + showTiming) {
      elements[i].classList.add('is-show1');
    }
  }
}
window.addEventListener('scroll', scroll_effect1); // スクロール時に実行




// スクロール下からふわっと表示
function scroll_effect() {
  let element = document.getElementsByClassName('scroll-up');
  if(!element) return;
                      
  let scrollY = window.pageYOffset;
  let windowH = window.innerHeight;
  let showTiming = 200; // 要素を表示するタイミング
  for(let i = 0; i < element.length; i++) { 
    let elemClientRect = element[i].getBoundingClientRect(); 
    let elemY = scrollY + elemClientRect.top; 
    if(scrollY > elemY - windowH + showTiming) {
      element[i].classList.add('is-show');
    }
  }
}
window.addEventListener('scroll', scroll_effect); // スクロール時に実行




