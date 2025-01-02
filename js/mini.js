$(document).ready(function() {
    tab();
})

function tab() {
    //탭메뉴 실행 함수
    function activateTab(tabId) {
        //초기화
        $(".menu_wrap .towsomemenu_list > li").removeClass("active");
        $(".menu_wrap .tab_list").hide();

        //실행
        $(`.menu_wrap .towsomemenu_list > li a[href*="${tabId}"]`).parent().addClass("active");
        $(tabId).show();
    }

    //탭메뉴 클릭할 때 실행
    $(".menu_wrap .towsomemenu_list > li a").on("click", function(e) {
        e.preventDefault();
        let tabId = $(this).attr("href");
        activateTab(tabId, true);
    });

    //페이지 로드 했을 때 탭메뉴 선택
    let firstTabId = $('.menu_wrap .towsomemenu_list > li:first-child a').attr('href');
    activateTab(firstTabId);
    slider(true); //슬라이드 실행
}

function slider() {
    $(".slider").each(function(index) {
        let $this = $(this);
        let swiper = undefined;
        let slideNum = $this.find('.swiper-slide').length //슬라이드 총 개수
        let slideInx = 0; 

        //현재 슬라이드 index

        //디바이스 체크
        let oldWChk = window.innerWidth > 768 ? 'pc' : 'mo';
        sliderAct();
        $(window).on('resize', function() {
            let newWChk = window.innerWidth > 768 ? 'pc' : 'mo';
            if (newWChk != oldWChk) {
                oldWChk = newWChk;
                sliderAct();
            }
        })

        function sliderAct() {
            //슬라이드 인덱스 클래스 추가
            $this.addClass(`slider${index}`,);
            function responsiveSwiper() {
                let ww = window.innerWidth;
                let swiper;
                
                responsiveSwiper();

                
                
                window.addEventListener('resize', function() {
                  ww = window.innerWidth;
                  responsiveSwiper();
                });
            };
            
            //slidesPerView 옵션 설정
            let viewNum = oldWChk == 'pc' ? 3 : 2;
            //loop 옵션 체크
            let loopChk = slideNum > viewNum;

            swiper = new Swiper(`.slider .inner`, {
                parallax: true,
                loop: true,
                slidesPerView: 3,
                spaceBetween: 40,
                navigation: {
                    prevEl: $(`.slider${index} .btn_prev`)[0],
                    nextEl: $(`.slider${index} .btn_next`)[0],
                },
            });
        }
    });
}

$(function () {
    $('.itm_content .itm_box').slick({
        arrows: true,
        slidesToShow: 2
    })
});

$('.itm_content').on('afterChange', function (e, s, c) {
    $('.itm_content .itm_box').removeClass('on');
    $('.itm_content .itm_box').eq(c).addClass('on')
    
});

$('.itm_content .arrows .prev').on('click', function () {
    $('.main_visual_slide').slick('slickPrev')
    $('.main_visual_slide').slick('slickNext')
});
