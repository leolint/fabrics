function openMobileMenu() {
    const button = document.getElementById('headerMobileButton')
    const wrapper = document.querySelector('.header_wrapper-nav')
    const basket = document.querySelector('.basketLink_content')

    button.addEventListener('click' , function() {
        wrapper.classList.toggle('openNav')
        basket.classList.remove('openBasket')
    })
}

openMobileMenu() 