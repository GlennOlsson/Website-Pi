$(document).ready(function(){

    $.get('../Print.md', function(data) {
        $("p").text(data)
        $("html, body").animate({
             scrollTop: $(document).height()
         }, 1);

         while(true){
             $.get('../Print.md', function(data) {
                 $("p").text(data)
             }, "text");
         }

    }, 'text');


});
