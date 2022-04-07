gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

// add 3 tweens that will play in direct succession.
tl.from(".header__wrapper", {opacity: 0, x: -400, duration: 1.5, ease: 'back.out(1)'})
    .from(".promo__text", {opacity: 0, x: 200, duration: 1.5}, '-=0.5')
    .from(".promo__btn", {opacity: 0, duration: 1})
    .from(".promo__bottom", {opacity: 0, y: 200, duration: 1}, '-=2')

gsap.from(".advanteges__title", {
    opacity: 0,
    x: -100,
    duration: 1,
    delay: .5,
    scrollTrigger: '.advanteges__title',
})
// 1 item
gsap.from(".advanteges__info_1", {
    opacity: 0,
    x: -250,
    duration: 1,
    delay: .5,
    scrollTrigger: '.advanteges__item_1',
})
gsap.from(".advanteges__img_1", {
    opacity: 0,
    x: 250,
    duration: 1,
    delay: .75,
    scrollTrigger: '.advanteges__item_1',
})
// 2 item
gsap.from(".advanteges__info_2", {
    opacity: 0,
    x: 250,
    duration: 1,
    delay: .5,
    scrollTrigger: '.advanteges__item_2',
})
gsap.from(".advanteges__img_2", {
    opacity: 0,
    x: -250,
    duration: 1,
    delay: .75,
    scrollTrigger: '.advanteges__item_2',
})
// 3 item
gsap.from(".advanteges__info_3", {
    opacity: 0,
    x: -250,
    duration: 1,
    delay: .5,
    scrollTrigger: '.advanteges__item_3',
})
gsap.from(".advanteges__img_3", {
    opacity: 0,
    x: 250,
    duration: 1,
    delay: .75,
    scrollTrigger: '.advanteges__item_3',
})