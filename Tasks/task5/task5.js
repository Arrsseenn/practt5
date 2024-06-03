document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sumForm').addEventListener('submit', function (event) {
        event.preventDefault();
        calculateSum();
    });
});

function calculateSum() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var sum = num1 + num2;
    alert("Сума: " + sum);
    document.getElementById('result').value = sum;
}