const display = document.getElementById("display");
const result = document.getElementById("result");
const delet = document.getElementById("delet");
let calc = 0;
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
    calc = eval(display.textContent);
    display.textContent = "";
    display.textContent = calc;
    verify = true;
});

document.getElementById("clear").addEventListener("click", function() {
  display.textContent = "";
  calc = 0;
})