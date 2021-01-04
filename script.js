$(function() {
    $('.works-hover').hover(
        function(){
            $(this).find('.works-text').addClass('text-hover');
        },
        function(){
            $(this).find('.works-text').removeClass('text-hover');
        }

    );

    $('.menu-icon').click(function(){
            $('.menu').slideDown();
            $('.menu-close').show();
            $('.menu-icon').hide();
    });
    $('.menu-close').click(function(){
        $('.menu').slideUp();
        $('.menu-icon').show();
        $('.menu-close').hide();
});

  });
  
