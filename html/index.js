$(document).ready(function(){

    var md = new MobileDetect(window.navigator.userAgent);

    var mobile = md.mobile();
    if (mobile == null) {
        console.log("Not Mobile")
    }
    else{
        console.log("Mobile")
        $(".background-image").attr("src", "")
        $(".background-image").attr("width", "")
        $(".background-image").attr("height", "100%")

        $(".background-div").attr("id", "vertical")
        $(".background-div").css("background-image", "url(Resources/StockholmVertical.png)")

        $(".logos").css("margin-top", "50%")
        $(".logos").css("margin-left", "29%")

        $(".GlennText").css("margin-top", "20%")
        $(".GlennText").css("margin-left", "24%")
}
});
