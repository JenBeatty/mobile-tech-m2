$(document).ready(function(){

    $(".fade-img").click(function(){
        $("img").animate({
            opacity: 0.5,
        });
        $(".fade-img").hide("slow");
        $(".restore-img").show("slow");
        $(".fade-help-text").show("slow");
        $(".restore-help-text").hide("slow");
    });

    $(".restore-img").click(function(){
        $("img").animate({
            opacity: 1.0,
        });
        $(".restore-img").hide("slow");
        $(".fade-img").show("fast");
        $(".fade-help-text").hide("slow");
        $(".restore-help-text").show("slow");
    });

});
