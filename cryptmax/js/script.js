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

    const card = document.querySelectorAll('.item-card');
    const favorite  = document.querySelectorAll('.item-card__favorite');

    card.forEach(item => {
      let price = item.querySelector('.item-card__price');
      let add = item.querySelector('.item-card__added');
      let countCart = document.querySelector('.count-cart');

    price.addEventListener('click', () => {
      price.classList.add('hidden');
      add.classList.add('active');
      countCart.textContent++;
    });

    add.addEventListener('click', () => {
      price.classList.remove('hidden');
      add.classList.remove('active');
      countCart.textContent--;
    });

  });

    favorite.forEach(item => {
      item.addEventListener('click', () => {
          item.classList.toggle('active')
      });
  });

  var text = document.getElementById("author-link");

  /* return button to variable btn */
  var btn = document.getElementById("copy");

  /* call function on button click */
  btn.onclick = function() {
    text.select();    
    document.execCommand("copy");
  }
  
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

