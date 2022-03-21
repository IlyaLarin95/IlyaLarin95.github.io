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
})

const accord = document.querySelector(".accordion");
const accordItem = accord.querySelectorAll(".accordion__item");

accordItem.forEach(item => {
  const accordBtn = item.querySelector('.accordion__title');
  accordBtn.addEventListener('click', ()=> {
    item.classList.toggle('active')
  });
});
