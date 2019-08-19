$(document).ready(main);

var counter = 1;

function main(){
    $(".menu-bar").click(function(){
        if (counter == 1) {
            $(".nav-content").animate({
                right:'0'
            });
            counter = 0;
        } else {
            counter = 1;
            $(".nav-content").animate({
                right:'-100%'
            });
        }
    });
    $(".select").click(function(){
        if (counter == 0) {
            $(".nav-content").animate({
                right:'-100%'
            });
            counter = 1;
        } else {
            counter = 0;
            $('nav').animate({
                right: '-100%'
            });
        }
    });
}