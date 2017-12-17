$(document).ready(function(){

    $.get('../Print.md', function(data) {
   $("p").text(data)
}, 'text');


});
