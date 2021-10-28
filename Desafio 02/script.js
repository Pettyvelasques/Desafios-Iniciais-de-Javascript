let X = parseFloat(prompt("Digite um número (0-100)"));

if (X >= 0 && X <= 25) {
    console.log("Intervalo [0,25]");
}
else if (X > 25 && X <= 50) {
    console.log("Intervalo (25,50]");
}
else if (X > 50 && X <= 75) {
    console.log("Intervalo (50,75]");
}
else if (X > 75 && X <= 100) {
    console.log("Intervalo (75,100]");
}
else {
    console.log("Fora de intervalo");
}