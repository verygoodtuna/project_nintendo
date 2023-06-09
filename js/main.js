$(function () {
    $('.m_slide').slick ({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
    })

    $('.slide_btn .prev').on('click', function () {
        $('.m_slide').slick('slickPrev')
    })
    $('.slide_btn .next').on('click', function () {
        $('.m_slide').slick('slickNext')
    })

    $('.family_site span').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    })

    $('.up_btn').on('click', function(){
        $('html, body').animate({scrollTop: 0 }, 600)
    });
})