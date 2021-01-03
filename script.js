$(function() {
    $('.works-hover').hover(
        function(){
            $(this).find('.works-text').addClass('text-hover');
        },
        function(){
            $(this).find('.works-text').removeClass('text-hover');
        }

    );
  });
  
