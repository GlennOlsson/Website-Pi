$(document).ready(function(){

    function updateFromFile(){
        $.get('../Print.md', function(data) {
            $("p").text(data)
        }, "text");
    })

    updateFromFile()
    $("html, body").animate({
         scrollTop: $(document).height()
    }, 1);

    var millisecondsToWait = 500;
    setTimeout(function() {
    // Whatever you want to do after the wait
        updateFromFile()
    }, millisecondsToWait);

});
