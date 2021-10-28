let n = prompt("digite um número (2-1000)");

function calculadora(x) {
    if (x < 2 || x > 1000) return console.log(`Digite um número válido (2-1000)`);

    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${x} = ${i * x}`);
    }
}

calculadora(n);