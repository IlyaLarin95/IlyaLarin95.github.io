const fav = document.querySelectorAll('.icon-fav')

fav.forEach(item=> {
    item.addEventListener('click', ()=> {
        item.classList.toggle('active')
    })
})