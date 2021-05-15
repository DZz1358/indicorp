$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__burger,.nav_list').toggleClass('active');
        $('body').toggleClass('lock');
    });
    
    $('.nav_list a').on('click' , function(){
        $('.header__burger,.nav_list').removeClass("active");
    })


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
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

    $('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
    $('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});        

	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});	
}); 

