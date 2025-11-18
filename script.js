let number = ''; // String
const history = []; // Array to hold results history

/*

    May need to convert number string to int 
    for each** to iterate
    
    give class to button, operators

    dry and abstract, not reating


*/

// === Numbers ===
function nine() {
    number = document.getElementById('input-box').value; // Grab current value

    number += '9'; //Add 9 to the number string

    document.getElementById('input-box').value = number; //Update number string
}

function eight() {
    number = document.getElementById('input-box').value; // Grab current value

    number += '8'; //Add 8 to the number string

    document.getElementById('input-box').value = number; //Update number string
}

function seven() {
    number = document.getElementById('input-box').value; // Grab current value

    number += '7'; //Add 7 to the number string

    document.getElementById('input-box').value = number; //Update number string
}

function six() {
    number = document.getElementById('input-box').value; // Grab current value

    number += '6'; //Add 6 to the number string

    document.getElementById('input-box').value = number; //Update number string
}

function five() {
    number = document.getElementById('input-box').value; // Grab current value

    number += '5'; //Add 5 to the number string

    document.getElementById('input-box').value = number; //Update number string
}

function four() {
    number = document.getElementById('input-box').value; // Grab current value

    number += '4'; //Add 4 to the number string

    document.getElementById('input-box').value = number; //Update number string
}

function three() {
    number = document.getElementById('input-box').value; // Grab current value

    number += '3'; //Add 3 to the number string

    document.getElementById('input-box').value = number; //Update number string
}

function two() {
    number = document.getElementById('input-box').value; // Grab current value

    number += '2'; //Add 2 to the number string

    document.getElementById('input-box').value = number; //Update number string
}

function one() {
    number = document.getElementById('input-box').value; // Grab current value

    number += '1'; //Add 1 to the number string

    document.getElementById('input-box').value = number; //Update number string
}

function zero() {
    number = document.getElementById('input-box').value; // Grab current value

    number += '0'; //Add 0 to the number string

    document.getElementById('input-box').value = number; //Update number string
}

// Decimal
function decimal() {
    number = document.getElementById('input-box').value; // Grab current value

    number += '.'; //Add (.) to the number string

    document.getElementById('input-box').value = number; //Update number string
}

// Backspace
function backspace() {
    number = document.getElementById('input-box').value; // Grab current value

    number = number.slice(0, -1); // Append the last value

    document.getElementById('input-box').value = number; //Update number string
}

// CE - Clear Entry
function clearEntry() {
    number = document.getElementById('input-box').value; // Grab current value

    number = ''; // Empty number

    document.getElementById('input-box').value = number; //Update number string
}

// Equal
// - Validate if input value is grabed
function equal() {
    number = document.getElementById('input-box').value;

    number.innerHTML = `${number}`;
    document.getElementById('input-box').textContent = number;
    console.log(number);
}

// class calculatorFunction {
//     constructor(num1, num2, ...args) {
//         this.num1 = num1;
//         this.num2 = num2;
//     }


// }

