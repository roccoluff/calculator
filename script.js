const add = (x, y) => {
    return x + y;
};

const substract = (x, y) => {
    return x - y;
};

const multiply = (x, y) => {
    return (x * y);
};

const divide = (x, y) => {
    return x / y;
};

let firstNumber;
let operator;
let secondNumber;

const operate = (no1, opera, no2) => {
    if (opera == '+') {
        return add(no1, no2);
    } else if (opera == '-') {
        return substract(no1, no2);
    } else if (opera == '*') {
        return multiply(no1, no2);
    } else {
        return divide(no1, no2);
    }
};

let result  = document.getElementById("result"); // Was angezeigt wird auf dem Rechner
let count; // Speichert ?
let count2 = 0; // Wenn count 2 oder >, dann hat User schon z.B. 5 + 5 + irgwas eingegeben
let allButtons = document.querySelectorAll("input");
allButtons.forEach((box) => {
    box.addEventListener("click", () => {
        //result.value = "";
        if (box.value == '.') { // Error Case so that Users don't press '.' twice in one equation
            //box.value = "";
        }
        if (box.value == '+' || box.value == '-' || box.value == '*' || box.value == '/') {
            count2++;
            if (count2 >= 2) { // Beschreibung siehe oben
                secondNumber = parseFloat(count);
                result.value = operate(firstNumber, operator, secondNumber); // Muss schonmal gerechnet werden
            }
            firstNumber = parseFloat(result.value); // Falls erstes mal gerechnet wird
            operator = box.value;
            count = "";
            //box.style.backgroundColor = "red";
        } // Operator should not be visible on result.value, and as soon as second number is pressed the second number should be the only visible number on the screen. (Plus button for example red and as soon as second number is pressed that back again to gren)
        if (box.value != '=' && (box.value != '+' && box.value != '-' && box.value != '*' && box.value != '/')) {
            if (count == "") { // Zweite Zahl
                result.value = box.value;
                count = box.value;
            } else { // Erste Zahl
                result.value += box.value;
                count += box.value;
            }
        }
        if (box.value == '=') { // Ausrechnen
            //secondNumber = 2;
            //count = count.slice(1);
            secondNumber = parseFloat(count);
            result.value = operate(firstNumber, operator, secondNumber);
        }
    });
});

// Clear Button -- alles wieder zurück
let clear = document.getElementById("clear"); 
clear.addEventListener("click", () => {
    //result.value = "0";
    result.value = "";
    count = "";
    count2 = 0;
    firstNumber = 0;
    secondNumber = 0;
});

