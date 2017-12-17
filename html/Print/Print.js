$(document).ready(function(){

    var client = new XMLHttpRequest();
client.open('GET', '../Print.md');
client.onreadystatechange = function() {
  $("p").text(client.responseText)
}
client.send();


window.scrollTo(0, 10000);

});
