let opcao = "Azul"
let mensagem

switch (opcao) {
    case "Vermelho":
        mensagem = "Você escolheu a cor vermelha."
        break
    case "Verde":
        mensagem = "Você escolheu a cor verde."
        break
    case "Azul":
        mensagem = "Você escolheu a cor azul."
        break
    default:
        mensagem = "Opção inválida."
}

console.log(mensagem)