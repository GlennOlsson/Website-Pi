$(document).ready(function(){

    $.get('../Print.md', function(data) {
        $("p").text(data)
        $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    }, 'text');


});
