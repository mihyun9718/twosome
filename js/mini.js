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
    slider(); //슬라이드 실행
}

function slider() {
    $(".slider").each(function(index) {
        let $this = $(this);
        let swiper = undefined;
        let slideNum = $this.find('.swiper-slide').length //슬라이드 총 개수
        let slideInx = 0; //현재 슬라이드 index

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
            $this.addClass(`slider${index}`);

            //슬라이드 초기화 
            if (swiper != undefined) {
                swiper.destroy();
                swiper = undefined;
            }

            //slidesPerView 옵션 설정
            let viewNum = oldWChk == 'pc' ? 3 : 2;
            //loop 옵션 체크
            let loopChk = slideNum > viewNum;

            swiper = new Swiper(`.slider${index} .inner`, {
                slidesPerView: '3',
                spaceBetween: 30,
                slidesPerGroup: 1,
                loop: true,
                autoHeight : true,
                navigation: {
                    prevEl: $(`.slider${index} .btn_prev`)[0],
                    nextEl: $(`.slider${index} .btn_next`)[0],
                },
            });
        }
    });
}