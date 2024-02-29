let displayValue = '';

function appendNumber(num) {
    displayValue += num;
    document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
    displayValue += operator;
    document.getElementById('display').value = displayValue;
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}



function percentage_1() {
 

    // Method returns the element of percent id

    let percent = document.getElementById("percent").value;

     

    // Method returns the element of num id

    let num = document.getElementById("num").value;

    document.getElementById("value1")

        .value = (num / 100) * percent;
}
 

function percentage_2() {
 

    // Method returns the element of num1 id

    let num1 = document.getElementById("num1").value;

     

    // Method returns the elements of num2 id

    let num2 = document.getElementById("num2").value;

    document.getElementById("value2")

            .value = (num1 * 100) / num2 + "%";
}