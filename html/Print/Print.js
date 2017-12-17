$(document).ready(function(){

    var client = new XMLHttpRequest();
    client.open('GET', '../Print.md');
    client.onreadystatechange = function() {
        $("p").text(client.responseText)
        $(".scrollingDiv").scrollTop( 300 );
    }
    client.send();


});
