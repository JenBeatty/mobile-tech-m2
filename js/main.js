$(document).ready(function(){

    $(".fade-img").click(function(){
        $("img").animate({
            opacity: 0.5,
        });
        $(".fade-img").hide("slow");
        $(".restore-img").show("slow");
    });

    $(".restore-img").click(function(){
        $("img").animate({
            opacity: 1.0,
        });
        $(".restore-img").hide("slow");
        $(".fade-img").show("fast");
    });

});
