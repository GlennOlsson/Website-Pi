$(document).ready(function(){

    $("html, body").animate({ scrollTop: $(document).height() }, 1000);

    $.get('../Print.md', function(data) {
        $("p").text(data)
    }, 'text');


});
