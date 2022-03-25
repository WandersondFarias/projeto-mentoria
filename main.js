$(document).ready(function(){
    //opens menu when in mobile
    $(".js-toggler-open").click(function(){
        $(this).toggle();
        $(".js-toggler-close").toggle();
        $(".nav-links-wrap").slideToggle();
        $("nav").toggleClass("show-bg");
        $("nav").toggleClass("hide-bg");
    
        //disables scrolling
        $('html, body').css({
            overflow: 'hidden'
        });
    });


    //closes menu when in mobile
    $(".js-toggler-close").click(function(){
        $(this).toggle();
        $(".js-toggler-open").toggle();
        $(".nav-links-wrap").slideToggle();
        $("nav").toggleClass("hide-bg");
        $("nav").toggleClass("show-bg");
    
        //enables scrolling
        $('html, body').css({
            overflow: 'auto'
        });
    });
})