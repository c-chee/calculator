// let numInput = document.getElementById('input-box'); // Defines the value to be linked the the nput box ID
// let currentNum = ''; // String
// let prevNum = '';
// let equation = ''; // Acts as a placeholder for the input display
// let operator = '';
// const history = []; // Array to hold results history

class calculator {
    // Attributes - Things that make up a calculator
    constructor () {
        this.currentNum = ''; // Stores current input numbers
        this.prevNum = ''; // Stores previous current number
        this.operator = ''; // Stores the type of operation selected
        this.displayEquation = ''; // Displays inputs as they are typed. For input box.
    }

    numInput(selectValue) { // Value comes from the value set in html button
        // If a decimal already exists, skip its input
        if (selectValue === '.' && this.currentNum.includes('.')) return;

        // Add current value being sent thorugh the click to current number string
        this.currentNum += selectValue;

        // Update display?
    }

    operatorInput (selectOperator) {
        // If an operator already exist
        if (this.operator) return;

        // If there isn't a number to operate on 
        if (!this.currentNum) return;

        // Store current number to previous, and clear to make space for the second number to become the new current number
        this.prevNum = this.currentNum;
        this.currentNum = '';

        // Store selected operator value for later
        this.operator = selectOperator;

        // Update display?
    }

    displayUpdate() {

    }

    equals() { // Performs operation (add, subtract, multiply, divide)
        // Convert the 2 strings to floats (so that its a numbeer and decimals can also be uesd)
        let a = parseFloat(this.prevNum);
        let b = parseFloat(this.currentNum);
        let answer;

        // Ensure a equation exists
        if (this.prevNum && this.currentNum && this.operator) { // All 3 elements exists
            // 
            switch (this.operator) {
                // Add
                case '+': answer = a + b; 
                    break;
                // Subtract
                case '-': answer = a - b; 
                    break;
                // Multiply
                case 'x': answer = a * b; 
                    break;
                // Divide
                case '÷': answer = a / b; 
                    break;

            }
        }
        else if (this.prevNum && this.operator) { // Only previous and an operation exists
            //
        }
        else { // No number or operator exists
            return;
        }

        // Add answer to history?

        // Clear 

        // Update dissplay with answer

    }

    clear() { // Clears current display values

    }

}