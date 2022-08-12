$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 10){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //typing animation script
    var typed = new Typed(".typing",{
        strings: ["a robotics engineer","a software engineer","an automation engineer", "a mechatonics engineer","an AI Enthusiast","a programming enthusiast"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
});