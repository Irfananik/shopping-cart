// product increasing and decreasing function call
function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number')
    let productNumber = productInput.value
    if (isIncreasing === true) {
        productNumber = parseInt(productNumber) + 1
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1
    }
    productInput.value = productNumber

    // update case price
    const productPrice = document.getElementById(product + '-price')
    productPrice.innerText = productNumber * price

    // total Calculate Price function call 
    totalCalculatePrice()
}

// price input function
function getInputForProductPrice(product) {
    const productInput = document.getElementById(product + '-number')
    const productNumber = parseInt(productInput.value)
    return productNumber
}

// price calculation part
function totalCalculatePrice() {
    const phonTotal = getInputForProductPrice('phone') * 1219
    const caseTotal = getInputForProductPrice('case') * 59

    const subTotal = phonTotal + caseTotal
    const tex = subTotal * .2
    const totalPrice = subTotal + tex

    // update price on html
    document.getElementById('sub-total').innerText = subTotal
    document.getElementById('tex-amount').innerText = tex.toFixed(2)
    document.getElementById('total-price').innerText = totalPrice
}

// case increasing and decreasing even handle
document.getElementById('phone-plus-btn').addEventListener('click', function() {
    updateProductNumber('phone', 1219, true)
})
document.getElementById('phone-minus-btn').addEventListener('click', function() {
    updateProductNumber('phone', 1219, false)
})

// case increasing and decreasing even handle
document.getElementById('case-plus-btn').addEventListener('click', function() {
    updateProductNumber('case', 59, true)
})

document.getElementById('case-minus-btn').addEventListener('click', function() {
    updateProductNumber('case', 59, false)
})