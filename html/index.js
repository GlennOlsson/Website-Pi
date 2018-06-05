$(document).ready(function(){

    var md = new MobileDetect(window.navigator.userAgent);

    var mobile = md.mobile();
    if (mobile == null) {
        console.log("Not Mobile")
    }
    else{
        console.log("Mobile")
        $("body").css("background-image", "url(\"Resources/STHLMVertical-1510x1835.jpg\")")
        $("body").css("background-size", "200%")
    }
});
