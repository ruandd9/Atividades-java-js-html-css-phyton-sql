let numeros = [20, 45, 60, 30, 70, 55]
let indice = 0
let numeroMaiorQue50 = null

while (indice < numeros.length && numeroMaiorQue50 === null) {
    if (numeros[indice] > 50) {
        numeroMaiorQue50 = numeros[indice]
    }
    indice++
}

console.log("O primeiro número maior que 50 é:", numeroMaiorQue50)
