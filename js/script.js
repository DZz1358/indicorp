$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__burger,.nav_list').toggleClass('active');
        $('body').toggleClass('lock');
    });
    let lastY;
    $(document).on('scroll', function (e) {
        let currentY = $(window).scrollTop();

        let header = $('.header');
        if (currentY > lastY) {
            header.addClass('header_bg');
        } else if (pageYOffset === 0){
            header.removeClass('header_bg');
        }
        lastY = currentY;
    })

    // let scrollHeight = Math.max(
    //     document.body.scrollHeight, document.documentElement.scrollHeight,
    //     document.body.offsetHeight, document.documentElement.offsetHeight,
    //     document.body.clientHeight, document.documentElement.clientHeight
    // ); 
}); 

