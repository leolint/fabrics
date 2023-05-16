function openNav () {
    const basketButton = document.querySelector('.basketLink_title')
    const basket = document.querySelector('.basketLink_content')
    const contactsButton = document.querySelector('.contacts_title')
    const contacts = document.querySelector('.contacts_content')
    const wrapper = document.querySelector('.header_wrapper-nav')

    basketButton.addEventListener('click' , function () {
        basket.classList.toggle('openBasket')
        contacts.classList.remove('openContacts')
        wrapper.classList.remove('openNav')
    })

    contactsButton.addEventListener('click' , function() {
        contacts.classList.toggle('openContacts')
        basket.classList.remove('openBasket')
    })
} 

openNav () 