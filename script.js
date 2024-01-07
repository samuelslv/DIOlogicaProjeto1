//nome  e XP
let heroi = ["Homem aranha", 10001];

const text = "O Herói de nome " + heroi[0] + " está no nível de "

// USANDO if else
console.log("IF ELSE")
if (heroi[1] < 1000) {
    console.log(text + "Ferro")
} else if (1001 <= heroi[1] && heroi[1] <= 2000) {
    console.log(text + "Bronze")
} else if (2001 <= heroi[1] && heroi[1] <= 5000) {
    console.log(text + "Prata")
} else if (5001 <= heroi[1] && heroi[1] <= 7000) {
    console.log(text + "Ouro")
} else if (7001 <= heroi[1] && heroi[1] <= 8000) {
    console.log(text + "Platina")
} else if (8001 <= heroi[1] && heroi[1] <= 9000) {
    console.log(text + "Ascendente")
} else if (9001 <= heroi[1] && heroi[1] <= 10000) {
    console.log(text + "Imortal")
} else if (heroi[1] >= 10001) {
    console.log(text + "Radiante")
}else{
    console.log(" o valor foi 1000")
}

console.log("\nSWITCH CASE")
switch (true) {
    case heroi[1] < 1000:
        console.log(text + "Ferro")
        break;
    case 1001 <= heroi[1] && heroi[1] <= 2000:
        console.log(text + "Bronze")
        break;
    case 2001 <= heroi[1] && heroi[1] <= 5000:
        console.log(text + "Prata")
        break;
    case 5001 <= heroi[1] && heroi[1] <= 7000:
        console.log(text + "Ouro")
        break;
    case 7001 <= heroi[1] && heroi[1] <= 8000:
        console.log(text + "Platina")
        break;
    case 8001 <= heroi[1] && heroi[1] <= 9000:
        console.log(text + "Ascendente")
        break;
    case 9001 <= heroi[1] && heroi[1] <= 10000:
        console.log(text + "Imortal")
        break;
    case heroi[1] >= 10001:
        console.log(text + "Radiante")
        break;
    default:
        console.log(" o valor foi 1000")
        break;
}