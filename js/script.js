function addToDisplay(value) {
    let display = document.getElementById('display');
    if (display.value === '0') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function calculate() {
    let display = document.getElementById('display');
    display.value = eval(display.value);//this function calculate display value 
}

function clearDisplay() {
    document.getElementById('display').value = '0';
}