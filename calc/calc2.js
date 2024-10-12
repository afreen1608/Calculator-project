
// Select all buttons and display screen
const display = document.getElementById('display');
let currentValue = ''; // This holds the current number/value
let previousValue = ''; // This holds the previous number for operations
let operator = ''; // To store the operator clicked

// Add event listeners to each button
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        const buttonValue = this.innerText;

        if (!isNaN(buttonValue) || buttonValue === '.') {
            handleNumber(buttonValue);
        } else if (buttonValue === 'AC') {
            clearDisplay();
        } else if (buttonValue === '=') {
            calculate();
        } else if (buttonValue === 'x²') {
            squareNumber();
        } else {
            handleOperator(buttonValue);
        }
    });
});

// Function to handle numbers and decimals
function handleNumber(num) {
    if (currentValue.includes('.') && num === '.') return; // Prevent multiple decimals
    currentValue += num;
    display.innerText = currentValue;
}

// Function to handle operators
function handleOperator(op) {
    if (currentValue === '') return; // Prevent entering operator without a number
    if (previousValue !== '') calculate(); // If previous value exists, perform operation
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

// Function to perform the calculation
function calculate() {
    let result;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);

    if (isNaN(prev) || isNaN(current)) return; // Return if one value is missing

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('Cannot divide by zero');
                return;
            }
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        default:
            return;
    }

    currentValue = result;
    previousValue = '';
    operator = '';
    display.innerText = result;
}

// Function to clear the display (All Clear)
function clearDisplay() {
    currentValue = '';
    previousValue = '';
    operator = '';
    display.innerText = '0';
}

// Function to calculate square of a number
function squareNumber() {
    if (currentValue === '') return;
    currentValue = (parseFloat(currentValue) ** 2).toString();
    display.innerText = currentValue;
} 