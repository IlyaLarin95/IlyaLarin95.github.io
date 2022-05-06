$(document).ready(function() {
    $('.num').each(function() {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        easing: 'linear',
        duration: 2000,
        step: function(now) {
          $(this).text(Math.ceil(now).toFixed(0));
        }
      });
    });
  });

  
// Card

$(document).ready(function(){

    const favorite  = document.querySelectorAll('.item-card__favorite');

    favorite.forEach(item => {
      item.addEventListener('click', () => {
          item.classList.toggle('active')
      });
  });  
});


// Header scroll

$(window).scroll(function(){
  if ($(window).scrollTop() > 100) {
      $('.header').addClass('scroll');
  }
  else {
      $('.header').removeClass('scroll')
  }
});

// Accordion

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

