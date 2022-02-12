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