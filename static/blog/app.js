$(document).ready(function () {
    let delay = 500;

    $("#ccabout").slideUp(0);
    $("#cc").hover(function () {
        $("#ccabout").slideToggle(delay);

    }, function () {
        $("#ccabout").stop();
        $("#ccabout").slideToggle(delay / 1.5);
    });

    $("#cdabout").slideUp(0);
    $("#cd").hover(function () {
        $("#cdabout").slideToggle(delay);
    }, function () {
        $("#cdabout").stop();
        $("#cdabout").slideToggle(delay / 1.5);
    });

    $("#aiabout").slideUp(0);
    $("#ai").hover(function () {
        $("#aiabout").slideToggle(delay);
    }, function () {
        $("#aiabout").stop();
        $("#aiabout").slideToggle(delay / 1.5);
    });

    $("#5gabout").slideUp(0);
    $("#5g").hover(function () {
        $("#5gabout").slideToggle(delay);
    }, function () {
        $("#5gabout").stop();
        $("#5gabout").slideToggle(delay / 1.5);
    });

    $("#farmingabout").slideUp(0);
    $("#farming").hover(function () {
        $("#farmingabout").slideToggle(delay);
    }, function () {
        $("#farmingabout").stop();
        $("#farmingabout").slideToggle(delay / 1.5);
    });

    $("#opabout").slideUp(0);
    $("#op").hover(function () {
        $("#opabout").slideToggle(delay);
    }, function () {
        $("#opabout").stop();
        $("#opabout").slideToggle(delay / 1.5);
    });

    $("#ffabout").slideUp(0);
    $("#ff").hover(function () {
        $("#ffabout").slideToggle(delay);
    }, function () {
        $("#ffabout").stop();
        $("#ffabout").slideToggle(delay / 1.5);
    });


    // let delay2 = 100;
    // let isOpened = false;

    // $(".sidenav a").slideUp(0);
    // $(".sidenav").css("width", "35px");
    // $(".sidenav").click(function(){
    //     if(!isOpened){
    //     isOpened = true;
    //     $(".sidenav").animate({
    //         width: "+=185px"
    //     }, delay2);
    //     $(".sidenav").promise().done(function(){
    //         $(".sidenav div").hide();
    //     })
    //     $(".sidenav").promise().done(function(){
    //         $(".sidenav a").animate({
    //             width: "toggle"
    //         });
    //     });
    //     }
    // });

    // $(".sidenav").hover(function(){}, function(){
    //     if(isOpened){
    //     $(".sidenav a").animate({
    //         width: "toggle"
    //     }, delay2);
    //     $(".sidenav").animate({
    //         width: "-=185px"
    //     }, delay2);

    //     $(".sidenav").promise().done(function(){
    //         $(".sidenav div").animate({
    //             width: "toggle"
    //         });
    //     }); 
    //     isOpened = false;
    //     }
    // });


});