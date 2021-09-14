$(function(){
    $(window).scroll(function(){
        $('section div').mousewheel(function(event,delta){
        var divNum = $(this).index();
        if(delta<0){
            if(divNum>=4) return false;
            var n = $(this).next().offset().top;
            $('html,body').stop().animate({'scrollTop': n },1000);
            }else if(delta>0){
            if(divNum<=0) return false;
            }
        })
    })
});
            

 $(function(){
    $('nav>ul>li').mouseover(function(){
        $(this).find('.subMenu').stop().slideDown(400)
    })
     $('nav>ul>li').mouseout(function(){
        $(this).find('.subMenu').stop().slideUp(400)
    })
 });

$(function(){
    $('.fa-times').click(function(){
        $('.slidePopup').hide()
    })
});