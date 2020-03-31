$(window).scroll(function(){
   if($(window).scrollTop())
   {
        $('nav').addClass('black');
   }
    else
    {
        $('nav').removeClass('black');

    }
   
});
$(window).scroll(function(){
    if($(window).scrollTop()>10){
        $('.card').fadeIn(3000).addClass('show');
    };
});
