document.addEventListener('DOMContentLoaded', () => {

    hamburger()
    headerScroll()
    modalWindow()

    // Phone Mask
    let phoneMask = IMask(
        document.getElementById('phone-mask'), {
        mask: '+{7} (000) 000-00-00'
    });

});