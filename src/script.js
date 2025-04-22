const display = document.getElementById("display");
const result = document.getElementById("result");
const delet = document.getElementById("delet");
let calc;
let verify = false;

function showDisplay(number) {
    display.textContent += number;
}

document.querySelectorAll(".numbers").forEach(number => {
    number.addEventListener("click", function () {
        let numberValue = this.getAttribute("data-value");
        showDisplay(numberValue);
    });
});

document.querySelectorAll(".operations").forEach(operation => {
    operation.addEventListener("click", function () {
        let operationNumber = this.getAttribute("data-value");
        if (
            ["*", "+", "-", "x", "/", ","].includes(
                display.textContent.slice(-1)
            )
        ) {
            return;
        }
        verify = false;
        showDisplay(operationNumber);
    });
});

delet.addEventListener("click", function () {
    if (verify === true) {
        display.textContent = "";
        verify = false;
        return;
    }
    let show = display.textContent.split("");
    show.pop();
    let newShow = show.join("");
    display.textContent = newShow;
});

result.addEventListener("click", function () {
    let removePoint = display.textContent
        .replaceAll(",", ".")
        .replaceAll("x", "*")
        .replaceAll("÷", "/");
    calc = eval(removePoint);
    display.textContent = "";
    let resultFinal = calc.toString().replaceAll(".", ",");

    if (resultFinal.length > 12) {
        resultFinal = resultFinal.slice(0, 9) + "...";
        verify = true;
        return (display.textContent = resultFinal);
    }

    display.textContent = resultFinal;
    verify = true;
});

document.getElementById("clear").addEventListener("click", function () {
    display.textContent = "";
    calc = 0;
});

document.getElementById("float").addEventListener("click", function () {
    if (
        display.textContent.endsWith(",") ||
        ["*", "+", "-", "x", "÷"].includes(display.textContent.slice(-1))
    ) {
        return;
    } else {
        display.textContent += ",";
    }
});
