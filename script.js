let numInput = document.getElementById('input-box');
let currentNum = ''; // String
let prevNum = '';
let operator = '';
const history = []; // Array to hold results history


// === Numbers ===
document.querySelectorAll('.num-btn').forEach(numberBtn => {
    numberBtn.addEventListener('click', () => {
        const value = numberBtn.value;
    
        // Prevent multiple decimals
        if (value === '.' && currentNum.includes('.')) return;

        currentNum += value;
        numInput.value = currentNum;
    });
});

// Decimal
function decimal() {
    if (!currentNum.includes('.')) {
        currentNum += '.';
        numInput.value = currentNum;
    }
}

// Backspace
function backspace() {
    currentNum = currentNum.slice(0, -1);
    numInput.value = currentNum;
}

// CE - Clear Entry
function clearEntry() {
    numInput.value = '';
    currentNum = '';
    prevNum = '';
    operator = '';
}

// Equal
// - Validate if input value is grabed


