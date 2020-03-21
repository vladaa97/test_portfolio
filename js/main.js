/*
    Menu Mobile
*/

$('.header').on('click', '.menu-btn', function(){
    if($('.header').hasClass('opened')) {
        $('.header').removeClass('opened');
    } else {
        $('.header').addClass('opened');
    }
});


/*
    Typed subtitle
*/
$( document ).ready(function() {
    $('.typed-title').typed({
        stringsElement: $('.typing-title'),
        backDelay: 3000, /* Delay in text change */
        typeSpeed: 0, /* Typing speed */
        loop: true
    });
});


if($('#home-card').length) {
    $('.top-menu').on('click', 'a', function(){

        /* vars */
        var lines_grid = $('.lines-grid');
        var id = $(this).attr('href');
        var card_items = $('.card-inner');
        var card_item = $(id);
        var menu_items = $('.top-menu li');
        var menu_item = $(this).closest('li');
        
        if(!menu_item.hasClass('active') & $('#home-card').length) {

            /* close card items */
            setTimeout(function(){
                $('.preloader').css({'transform':'translate(0%)','opacity':'1'});
                menu_items.removeClass('active');
                if($('header').hasClass('opened')){
                    $('header').removeClass('opened');
                }
            }, 500);

            setTimeout(function(){
                var elem = $("#progress-line");   
                var width = 0;
                var id = setInterval(frame, 10);
                function frame() {
                  if (width == 100) {
                    clearInterval(id);
                  } else {
                    width++; 
                    elem.css("width",width + '%');
                  }
                }
            }, 1000);
            

            setTimeout(function(){
                menu_item.addClass('active');
                $(card_items).removeClass('active');
                $(card_item).addClass('active');
                $('.preloader').css({'transform':'translate(100%)','opacity':'0'});
            }, 2500);

            $('.preloader').css({'transform':'translate(-100%)'});
            $("#progress-line").css("width","0%");

        }
    
        return false;
    });
}
