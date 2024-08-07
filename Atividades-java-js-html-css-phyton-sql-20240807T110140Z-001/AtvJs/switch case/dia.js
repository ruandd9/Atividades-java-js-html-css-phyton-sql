let dia = 3
let nomeDia

switch (dia) {
    case 1:
        nomeDia = "Segunda-feira"
        break
    case 2:
        nomeDia = "Terça-feira"
        break
    case 3:
        nomeDia = "Quarta-feira"
        break
    default:
        nomeDia = "Dia não válido"
}

console.log("Hoje é " + nomeDia)