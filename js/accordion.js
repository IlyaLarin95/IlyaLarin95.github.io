const acc = document.querySelectorAll(".accordion__title");

acc.forEach (item => {
  item.addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight +"px";
    } 
  });
});