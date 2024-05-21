function calculateU(x, alpha, g) {
    if (x < 0) {
        return Math.sin(x) - Math.log10(-x);
    } else if (x === 0) {
        return 0;
    } else {
        return alpha * Math.pow(g, 3) * x;
    }
}

function calculate() {
    let start = parseFloat(document.getElementById('start').value);
    let end = parseFloat(document.getElementById('end').value);
    let step = parseFloat(document.getElementById('step').value);

    const alpha = 2.0;  
    const g = 1.5;  

    let results = "Результати обчислень:\n";
    for (let x = start; x <= end; x += step) {
        let u = calculateU(x, alpha, g);
        results += `x = ${x}, U(x) = ${u}\n`;
    }

    document.getElementById('results').textContent = results;
}