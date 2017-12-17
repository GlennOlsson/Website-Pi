$(document).ready(function(){

    var client = new XMLHttpRequest();
client.open('GET', '../Print.md');
client.onreadystatechange = function() {
  alert(client.responseText);
}
client.send();

});
