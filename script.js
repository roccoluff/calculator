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

let result = document.getElementById("result");
let count;
let allButtons = document.querySelectorAll("input");
allButtons.forEach((box) => {
    box.addEventListener("click", () => {
        //result.value = "";
        if (box.value != '=') {
            result.value += box.value;
            count += box.value;
        }
        if (box.value == '+' || box.value == '-' || box.value == '*' || box.value == '/') {
            firstNumber = parseFloat(result.value);
            operator = box.value;
            count = "";
        }
        if (box.value == '=') {
            //secondNumber = 2;
            count = count.slice(1);
            secondNumber = parseFloat(count);
            result.value = operate(firstNumber, operator, secondNumber);
        }
    });
});

let clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    //result.value = "0";
    result.value = "";
});

