function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    // console.log(pin);
    document.getElementById('display-pin').value = pin


}



document.getElementById('key-pad').addEventListener('click', function (event) {
    // console.log('keypad clicked')
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }

    }

    // ektar por ekta number add korar jonno nicher line gula
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})

function verifyPin() {
    // console.log('clicked');
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        // console.log('matched. YAY')

        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        successMessage.style.display = 'none';

        failError.style.display = 'block';

    }


}

