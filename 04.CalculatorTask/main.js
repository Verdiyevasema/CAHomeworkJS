document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("addBtn").addEventListener("click", add);
  document.getElementById("subtractBtn").addEventListener("click", subtract);
  document.getElementById("multiplyBtn").addEventListener("click", multiply);
  document.getElementById("divideBtn").addEventListener("click", divide);
  document.getElementById("resetBtn").addEventListener("click", reset);
});

function add() {
  var result =
    parseFloat(document.getElementById("value1").value) +
    parseFloat(document.getElementById("value2").value);
  displayResult(result);
}

function subtract() {
  var result =
    parseFloat(document.getElementById("value1").value) -
    parseFloat(document.getElementById("value2").value);
  displayResult(result);
}

function multiply() {
  var result =
    parseFloat(document.getElementById("value1").value) *
    parseFloat(document.getElementById("value2").value);
  displayResult(result);
}

function divide() {
  var value2 = parseFloat(document.getElementById("value2").value);
  if (isNaN(value2) || value2 === 0) {
    alert("Enter a valid non-zero number for Value 2");
  } else {
    var result = parseFloat(document.getElementById("value1").value) / value2;
    displayResult(result);
  }
}

function reset() {
  document.getElementById("value1").value = "";
  document.getElementById("value2").value = "";
  displayResult(0);
}

function displayResult(result) {
  document.getElementById("result").innerText = "Result: " + result;
}
