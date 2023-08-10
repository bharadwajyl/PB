//GLOBAL VARIABLES
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var count = 0;

//Scroller Nav
if (isMobile){
    if ($(".ham").length < 0) {
        $("nav").append('<a href="javascript:void(0)" class="ham" onclick="nav()"><i class="fa fa-bars"></i></a>');
    }
} else {
    if (window.matchMedia("(max-width: 920px)").matches === false) {
        window.onscroll = function() {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                $("nav").css("background-color","var(--white)") ;
                $(".logo").css("width","100px") ;
                $(".logo img").attr("src","assets/images/logo_dark.png") ;
                $("nav").css("color","var(--dark)") ;
                $("nav a").css("color","var(--dark)") ;
                $("nav").css("box-shadow","rgba(0, 0, 0, 0.1) 0px 4px 12px") ;
            } else {
                $("nav").css("background-color","transparent") ;
                $(".logo").css("width","auto") ;
                $(".logo img").attr("src","assets/images/logo.png") ;
                $("nav").css("color","var(--white)") ;
                $("nav a").css("color","var(--white)");
                $(".ham").css("color","var(--white)");
                $("nav").css("box-shadow","none") ;
            }
        }
    }
}



function nav(){
    overlay();
    if ($("nav aside").css("right") <= "0") { $("nav aside").css("right", "0px"); }
}


function overlay(){
    if ($(".overlay").length <= 0){
        $("body").css({'overflow-y':'hidden'});
        $("body").append('<div class="overlay" onclick="closer()"></div>');
    } else {
        $(".overlay").remove();
        $("body").css({'overflow-y':'auto'});
    }
}

function closer(){
    overlay();
    if ($("nav aside").css("right") >= "0") { $("nav aside").css("right", "-100%"); }
}
