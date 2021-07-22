
let number = null
let select = 'isPrime'

function setCalculation(selectInput) {
    select = selectInput
    calculation(select)
}
function setNumber(numberInput) {
    if (number = parseFloat(numberInput)) {
        number = (number <= 0) ? 1 : Math.round(number)
        calculation()
    }
}

function calculation() {
    let lastColElement = document.getElementsByClassName('last')[0]
    if (!isNaN(number)) {
        let calculationResult = (select == "isPrime") ? isPrime(number) : isFibanacci(number)
        console.log(calculationResult)
        lastColElement.innerText = calculationResult
    } else {
        lastColElement.innerText = 'result'
    }
}

function isPrime(n) {
    // console.log(`${number} % ${n} = ${number % n} => ${(number % n > 0)}`)
    // if ((number % n > 0)) {
    //     isPrime(n - 1)
    // } else {
    //     return false
    // }
    // return true
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}
//   n = (n-1) + (n-2)
function isFibanacci(num) {
    if (fibanacci(num) == fibanacci(num - 1) + fibanacci(num - 2)) {
        return true
    } else {
        return false
    }
}

function fibanacci(num) {
    if (num == 0) {
        return 0
    } else if (num == 1 || num == 2) {
        return 1
    } else if (num < 0) {
        return 'error'
    }
    return fibanacci(num - 1) + fibanacci(num - 2)
}