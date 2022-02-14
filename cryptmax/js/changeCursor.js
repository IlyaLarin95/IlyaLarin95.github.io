function changeCursor () {
    const cursor = document.querySelector('.cursor')
    const follower = document.querySelector('.follower')
    const links = document.querySelectorAll('.link') // Добавить класс всем ссылкам

    let posX = 0,
        posY = 0

    let mouseX = 0,
        mouseY = 0

    TweenMax.to({}, 0.01, {
        repeat: -1,
        onRepeat: () => {
            posX += (mouseX - posX) / 4
            posY += (mouseY - posY) / 4

            TweenMax.set(follower, {
                css: {
                    left: posX - 12,
                    top: posY - 12
                }
            })
            TweenMax.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            })

        }
    })    


    window.addEventListener('mousemove', e =>{
        mouseX = e.clientX
        mouseY = e.clientY
    })

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('active')
            follower.classList.add('active')
        })
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('active')
            follower.classList.remove('active')
        })
    })
}

changeCursor()