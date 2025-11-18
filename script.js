let number = ''; //String

// === Numbers ===
function nine() {
    number = document.getElementById('input-box').value; // Grab current value

    number += '9'; //Add 9 to the number string

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
