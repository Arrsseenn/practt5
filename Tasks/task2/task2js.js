document.addEventListener('DOMContentLoaded', () => {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const checkButton = document.getElementById('checkButton');
    const result = document.getElementById('result');

    checkButton.addEventListener('mouseover', () => {
        const a = input1.checked;
        const b = input2.checked;
        const output = a && b;
        result.textContent = `Результат логічної операції "І": ${output}`;
    });
});
