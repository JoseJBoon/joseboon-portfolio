$(function() {
    var overlay = $("div.overlay");

    $("img.image").on("click" , function(){
        var imgSource = $(this).attr("src");
        overlay.addClass("active-overlay");
        overlay.children("img").attr("src", imgSource);
        $("body").css("overflow", "hidden");
    });
    
    overlay.children("span").on("click", function(){
        overlay.removeClass("active-overlay");
        $("body").css("overflow", "scroll");
    });
});
