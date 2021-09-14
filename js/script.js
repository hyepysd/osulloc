/*ㅡㅡㅡㅡㅡ마우스휠ㅡㅡㅡㅡㅡ*/
$(function(){
    $(window).scroll(function(){
        $('section div').mousewheel(function(event,delta){
        var divNum = $(this).index();
        if(delta<0){
            if(divNum>=5) return false;
            var n = $(this).next().offset().top;
            $('html,body').stop().animate({'scrollTop': n },1000);
            }else if(delta>0){
            if(divNum<=0) return false;
            }
        })
    })
});

/*ㅡㅡㅡㅡㅡ이미지페이드ㅡㅡㅡㅡㅡ*/
$(function(){
    var n = 0; 
    btnFun(0);
    var timer = setInterval( imgFun,5000);
    function imgFun(){
        n++;
        btnFun( n%4 );
    }
    function btnFun( a ){ 
        $('#section_01>img').stop().fadeOut(800);
        $('#section_01>img').eq(a).stop().fadeIn(2000);
    }


});
/*ㅡㅡㅡㅡㅡ메뉴ㅡㅡㅡㅡㅡ*/
$(function(){
    $('nav>ul>li').mouseover(function(){
        $(this).find('.subMenu').stop().slideDown(400)
    })
     $('nav>ul>li').mouseout(function(){
        $(this).find('.subMenu').stop().slideUp(400)
    })
 });

/*ㅡㅡㅡㅡㅡ스티키메뉴ㅡㅡㅡㅡㅡ*/
$(function(){
    $(window).scroll(function(){
       // console.log( $(this).scrollTop() );
        var st = $(this).scrollTop();
        if( st>=200 ){ 
            $('div.sticky').stop().animate({'top':'0px','opacity':'1'},500)

        }else if( st<200){
           $('div.sticky').stop().animate({'top':'-100px','opacity':'0'},500)
        }
    })
});

/*ㅡㅡㅡㅡㅡ햄버거ㅡㅡㅡㅡㅡ*/
$(document).ready(function(){
      $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
      });
});

/*ㅡㅡㅡㅡㅡ아코디언ㅡㅡㅡㅡㅡ*/
$(function(){
    $('.accordion>div:nth-child(1) img').css({'transform':'translateY(200px) translateX(350px)'});

     $('.accordion div').click(function(){
     $('.accordion>div').css({'width':'150'});
     $('.accordion>div img').css({'transform':'translateY(300px) translateX(20px)'});
     $(this).css({'width':'750'});
     $(this).find('img').css({'transform':'translateY(200px) translateX(350px)'});
     })
});

/*ㅡㅡㅡㅡㅡ메인텍스트 추출ㅡㅡㅡㅡㅡ*/
$(function(){
    var timer = setInterval( substrFun, 250);
    var n = 0;
    function substrFun(){
        var str = '차와 제주가 선사하는 삶의 아름다움'.substring(0,n++ );
        /*0번째 위치부터 n의 갯수만큼 문자를 추출*/
        console.log(str);
        $('.section_01_mainText>p').text(str);
        }

    var srt = $('.section_01_mainText>p').text();
        console.log( srt.toLowerCase().toUpperCase() );
});

/*ㅡㅡㅡㅡㅡmedia 메인텍스트 추출ㅡㅡㅡㅡㅡ*/
$(function(){
    var timer = setInterval( substrFun, 250);
    var n = 0;
    function substrFun(){
        var str = '차와 제주가 선사하는 삶의 아름다움'.substring(0,n++ );
        /*0번째 위치부터 n의 갯수만큼 문자를 추출*/
        console.log(str);
        $('.mediaMainText>p').text(str);
        }

    var srt = $('.mediaMainText>p').text();
        console.log( srt.toLowerCase().toUpperCase() );
});

