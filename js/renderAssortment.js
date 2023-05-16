import { arrayToRender } from "/js/items.js";
import { createCounter } from "/js/counter.js";

const basket = document.querySelector('.basketLink_content-wrapper')
const emptyBasketTitle = document.getElementById('emptyBasketTitle')
const form = document.getElementById('basketForm')
const counter = document.getElementById('counter')



function createItemElement(element) {

    ///WRAPPER

    const itemWrapper = document.createElement('div')
    itemWrapper.className = 'assortment_wrapper-item'

    ///IMAGE
    const img = new Image()
    img.src = element.img
    itemWrapper.appendChild(img)

    ///TEXTS

    const article = document.createElement('p');
    article.className = 'assortment_wrapper-item--article'
    const articleText = document.createTextNode(element.article)
    article.appendChild(articleText)
    itemWrapper.appendChild(article);

    const description = document.createElement('p');
    description.className = 'assortment_wrapper-item--description'
    const descriptionleText = document.createTextNode(element.text)
    description.appendChild(descriptionleText)
    itemWrapper.appendChild(description);

    ////SIZES


    const sizesButtonsWrapper = document.createElement('div')
    sizesButtonsWrapper.className = 'assortment_wrapper-item--buttons'
    const buttonL = document.createElement('button')
    buttonL.id = 'buttonL'
    const buttonLText = document.createTextNode(element.sizeL)
    buttonL.appendChild(buttonLText)
    const buttonM = document.createElement('button')
    buttonM.id = 'buttonM'
    const buttonMText = document.createTextNode(element.sizeM)
    buttonM.appendChild(buttonMText)
    const buttonS = document.createElement('button')
    buttonS.id = 'buttonS'
    const buttonSText = document.createTextNode(element.sizeS)
    buttonS.appendChild(buttonSText)



    sizesButtonsWrapper.appendChild(buttonL)
    sizesButtonsWrapper.appendChild(buttonM)
    sizesButtonsWrapper.appendChild(buttonS)

    itemWrapper.appendChild(sizesButtonsWrapper)

    ///PRICE

    const pricesWrapper = document.createElement('div')
    pricesWrapper.className = 'assortment_wrapper-item--price'
    const pricesText = document.createElement('p')
    const pricesTextInner = document.createTextNode('Вартість одиниці')
    const currentPrice = document.createElement('p')
    currentPrice.innerHTML = element.priceL

    pricesText.appendChild(pricesTextInner)
    pricesWrapper.appendChild(pricesText)
    pricesWrapper.appendChild(currentPrice)
    itemWrapper.appendChild(pricesWrapper)

    ///ADD TO BASKET BUTTON

    const mainButton = document.createElement('button')
    mainButton.className = 'assortment_wrapper-item--mainButton'
    const mainButtonText = document.createTextNode('Додати в Кошик')
    mainButton.appendChild(mainButtonText)
    itemWrapper.appendChild(mainButton)

    mainButton.addEventListener('click', function () {
        const basketItems = document.querySelectorAll('.basketLink_content-wrapper .assortment_wrapper-item')
        const newItem = basket.appendChild(mainButton.parentElement.cloneNode(true))
        console.log(newItem);
        newItem.appendChild(createCounter(counter))
        emptyBasketTitle.style.display = 'none'
        form.style.display = 'flex'
        counter.innerHTML = basketItems.length + 1;
        counter.animate([
            // keyframes
            { transform: 'scale(1.1)' },
            { transform: 'scale(1.7)' },
            { transform: 'scale(1.1)' }
        ], {
            // timing options
            duration: 200,
        })
    })


    ///CHANGE PRICE BUTTONS

    const priceChangeButtons = sizesButtonsWrapper.querySelectorAll('button')
    priceChangeButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            let targetId = event.target.id
            switch (targetId) {
                case targetId = 'buttonL':
                    currentPrice.innerHTML = element.priceL
                    break;
                case targetId = 'buttonM':
                    currentPrice.innerHTML = element.priceM
                    break;
                case targetId = 'buttonS':
                    currentPrice.innerHTML = element.priceS
                    break;
            }
        })
    })

    return itemWrapper;
}

function render() {
    const parentWrapper = document.querySelector('.assortment_wrapper')
    const categories = document.querySelectorAll('.assortment-buttons button')
    const subcategories = document.getElementById('subcategories')
    const subcategoriesButtons = document.querySelectorAll('.assortment_categories button')

    function clear() {
        const itemsToRemove = parentWrapper.querySelectorAll('.assortment_wrapper-item');
        itemsToRemove.forEach(item => parentWrapper.removeChild(item));
    }

    arrayToRender.items.forEach(element => {
        if (element.type === 'set') {
            const itemWrapper = createItemElement(element);
            parentWrapper.appendChild(itemWrapper);
            subcategories.style.display = 'none'
        }
    })

    categories.forEach(button => {
        button.addEventListener('click', function (event) {
            clear()

            let categoriesButtonTargetId = event.target.id
            arrayToRender.items.forEach(element => {
                switch (categoriesButtonTargetId) {
                    case 'sets':
                        if (element.type === 'set') {
                            const itemWrapper = createItemElement(element);
                            parentWrapper.appendChild(itemWrapper);
                            subcategories.style.display = 'none'

                        }
                        break;
                    case 'products':
                        if (element.type === 'products') {
                            const itemWrapper = createItemElement(element);
                            parentWrapper.appendChild(itemWrapper);
                            subcategories.style.display = 'none'
                        }
                        break;
                    case 'fabrics':
                        if (element.type === 'fabrics') {
                            const itemWrapper = createItemElement(element);
                            parentWrapper.appendChild(itemWrapper);
                            subcategories.style.display = 'flex'
                        }

                }

            })
            subcategoriesButtons.forEach(button => {

                button.addEventListener('click', function (event) {
                    clear()
                    const categoriesId = event.target.id
                    arrayToRender.items.forEach(element => {

                        switch (categoriesId) {
                            case 'firstCategory':
                                if (element.type === 'categorieOne') {
                                    const itemWrapper = createItemElement(element);
                                    parentWrapper.appendChild(itemWrapper);
                                    subcategories.style.display = 'flex'
                                }
                                break;

                            case 'secondCategory':
                                if (element.type === 'categorieTwo') {
                                    const itemWrapper = createItemElement(element);
                                    parentWrapper.appendChild(itemWrapper);
                                    subcategories.style.display = 'flex'
                                }
                                break;
                        }
                    })


                })
            })
        })
    })

}


render()

