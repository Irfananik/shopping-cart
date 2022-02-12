// product increasing and decreasing function call
function updateCaseNumber(isIncreasing) {
    const caseInput = document.getElementById('case-number')
    let caseNumber = caseInput.value
    if (isIncreasing === true) {
        caseNumber = parseInt(caseNumber) + 1
    } else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1
    }
    caseInput.value = caseNumber

    // update case price
    const casePrice = document.getElementById('case-price')
    casePrice.innerText = caseNumber * 59
}

// case increasing and decreasing even handle
document.getElementById('phone-plus-btn').addEventListener('click', function() {

})
document.getElementById('phone-minus-btn').addEventListener('click', function() {

})

// case increasing and decreasing even handle
document.getElementById('case-plus-btn').addEventListener('click', function() {
    updateCaseNumber(true)
})

document.getElementById('case-minus-btn').addEventListener('click', function() {
    updateCaseNumber(false)
})