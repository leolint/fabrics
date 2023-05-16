export function createCounter (basketCounter , basket) {
    const counterWrapper = document.createElement('div');
    counterWrapper.style.display = 'flex'
    counterWrapper.className = 'assortment_wrapper-item--counter'
    const increment = document.createElement('button')
    increment.innerHTML = '+'
    const count = document.createElement('p')
    let counterText = 1
    count.innerHTML = counterText
    const decrement = document.createElement('button')
    decrement.innerHTML = '-'
    counterWrapper.appendChild(decrement)
    counterWrapper.appendChild(count)
    counterWrapper.appendChild(increment)

    increment.addEventListener('click' , function () {
        count.innerHTML = counterText ++
    })

    decrement.addEventListener('click' , function () {
        count.innerHTML =  --counterText
       
        if (counterText <= 0) {
            counterWrapper.parentElement.remove();
            basketCounter.innerHTML = basketCounter.innerHTML - 1
        }
    })

    return counterWrapper
}

