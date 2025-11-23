/**
 * 
 */

// === Calculator Class Object ===
// - Note: Has to be capitalized
// - Must be used before event listeners
class Calculator {
    // Attributes - Things that make up a calculator
    constructor (inputBox) {
        this.currentNum = ''; // Stores current input numbers
        this.prevNum = ''; // Stores previous current number
        this.operator = ''; // Stores the type of operation selected
        this.displayEquation = inputBox; // Displays inputs as they are typed. For input box.
    }

    numInput(selectValue) { // Value comes from the value set in html button
        // If a decimal already exists, skip its input
        if (selectValue === '.' && this.currentNum.includes('.')) return;

        // Add current value being sent thorugh the click to current number string
        this.currentNum += selectValue;

        // Update display?
        this.displayUpdate();
    }

    operatorInput (selectOperator) {
        // If an operator already exist
        if (this.operator) return;

        // If there isn't a number to operate on 
        if (!this.currentNum && !this.prevNum) return;

        // Store current number to previous, and clear to make space for the second number to become the new current number
        if (this.currentNum) {
            this.prevNum = this.currentNum;
            this.currentNum = '';
        }

        // Store selected operator value for later
        this.operator = selectOperator;

        // Update display?
        this.displayUpdate();
    }

    displayUpdate(answerValue) {

        // If answer exists, display answer
        if (answerValue != null) {
            this.displayEquation.value = `${answerValue}`
        }
        // Else
        else {
            this.displayEquation.value = `${this.prevNum} ${this.operator} ${this.currentNum}`;
        }

    }

    equals() { // Performs operation (add, subtract, multiply, divide)
        // Convert the 2 strings to floats (so that its a number and decimals can also be uesd)
        let a = parseFloat(this.prevNum);
        let b = parseFloat(this.currentNum);
        let answer;

        // Ensure a equation exists
        if (this.prevNum && this.currentNum && this.operator) { // All 3 elements exists
            // If the operator is ... case
            switch (this.operator) {
                // Add
                case '+': 
                    answer = parseFloat(a + b); 
                    break;
                // Subtract
                case '-': 
                    answer = parseFloat(a - b); 
                    break;
                // Multiply
                case 'x': 
                    answer = parseFloat(a * b); 
                    break;
                // Divide
                case '÷':
                    answer = parseFloat(a / b); 
                    break;
            }
        }
        else if (this.prevNum && this.operator) { // Only previous and an operation exists
            // Use prevNum becasue when the operator is added, the current gets moved to previous.

            // If the operator is ... case
            switch (this.operator) {
                // Add
                case '+': 
                    answer = parseFloat(a + a); 
                    break;
                // Subtract
                case '-': 
                    answer = parseFloat(a - a); 
                    break;
                // Multiply
                case 'x': 
                    answer = parseFloat(a * a); 
                    break;
                // Divide
                case '÷':
                    answer = parseFloat(a / a); 
                    break;
            }
        }
        else { // No number or operator exists
            return;
        }

        // Add answer to history?

        // store answer as the previous number so that the user can still perform operations. 
        this.prevNum = answer;
        this.currentNum = '';
        this.operator = '';

        // Update display with answer
        this.displayUpdate(answer);

    }

    clear() { // Clears current display values
        this.currentNum = '';
        this.prevNum = '';
        this.operator = '';
        this.displayUpdate('');
    }

    clearentry() { // Clears only the last number
        this.currentNum = '';

        // Update display with answer
        this.displayUpdate();
    }

    back() { // Backspace
        // If a number current;y exists, allow backspace to remove the last value
        if (this.currentNum) {
            this.currentNum = this.currentNum.slice(0, -1);
        }
        // Else if the last value is an operator ...
        else if (this.operator) {
            // Clears operator to remove
            this.operator = '';
        }
        else {
            return
        }
        
        // Update Display
        this.displayUpdate();
    }

}


// === Button Interaction ===
const calcInputBox = document.getElementById('input-box');
const calc = new Calculator(calcInputBox);

// Number Btns
document.querySelectorAll('.num-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        calc.numInput(btn.value);
    });
});

// Operator Btns
document.querySelectorAll('.operation-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        calc.operatorInput(btn.value);
    });
});

// Equal Btn
document.getElementById('equal-btn').addEventListener('click', () => {
    calc.equals();
});


// Clear Btn
document.getElementById('clear-btn').addEventListener('click', () => {
    calc.clear();
});

// Clear Entry Btn
document.getElementById('clearentry-btn').addEventListener('click', () => {
    calc.clearentry();
});

// Backspace Btn
document.getElementById('back-btn').addEventListener('click', () => {
    calc.back();
});