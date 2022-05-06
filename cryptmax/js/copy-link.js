$(document).ready(function(){

  var text = document.getElementById("author-link");

  /* return button to variable btn */
  var btn = document.getElementById("copy");

  /* call function on button click */
  btn.onclick = function() {
    text.select();    
    document.execCommand("copy");
  }
  
});