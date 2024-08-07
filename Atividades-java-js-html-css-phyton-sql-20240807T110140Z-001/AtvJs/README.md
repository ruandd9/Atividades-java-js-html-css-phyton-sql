<h1 align="center"> 🚧 Estruturas de controle no JavaScript 🚧</h1>

<h2>
<a href="#"> 🌀 If , Else if, Else </a>
</h2>

<h3> ▶️ Como funciona: </h3>

1. **Estrutura `if`**:
   - A estrutura `if` avalia uma condição. Se a condição for verdadeira, o bloco de código associado a ela é executado. Se for falsa, o bloco é ignorado, e o programa continua sua execução.
   - É uma estrutura de controle condicional básica, permitindo a execução de um bloco de código com base em uma única condição.

2. **Estruturas `else if` e `else`**:
   - Após um bloco `if`, `else if` verifica condições adicionais, permitindo múltiplos ramos condicionais.
   - Se uma condição `else if` for verdadeira, seu bloco de código associado é executado. Se não, o próximo `else if` é verificado ou, se nenhum `else if` for verdadeiro, o bloco `else` é executado.
   - `else` é opcional e captura casos em que nenhuma das condições anteriores é verdadeira.

<h3> 🔁 Quando usar: </h3>

1. **Estrutura `if`**:
   - Use para executar um bloco de código se uma condição específica for verdadeira.
   - Útil para tomada de decisões simples baseadas em uma única condição.

2. **Estruturas `else if` e `else`**:
   - Use `else if` para verificar várias condições sequenciais depois de uma condição `if`.
   - Use `else` para fornecer um bloco de código padrão quando nenhuma das condições anteriores é verdadeira.
   - Útil para controlar o fluxo do programa em cenários com múltiplas condições ou casos.

<h2> Exemplos:</h2>

> MENSAGEM DE SAUDACAO:

``` JavaScript
// Definindo o valor da variável 'hora' como 14 (equivalente às 2 da tarde)
let hora = 14

// Verifica se a hora é menor que 12 (antes do meio-dia)
if (hora < 12) {
    // Se a condição for verdadeira, imprime "Bom dia!"
    console.log("Bom dia!")
} 
// Se a condição acima não for atendida, verifica se a hora é menor que 18 (antes das 6 da tarde)
else if (hora < 18) {
    // Se esta condição for verdadeira, imprime "Boa tarde!"
    console.log("Boa tarde!")
} 
// Se nenhuma das condições anteriores for atendida
else {
    // Isso significa que é após as 6 da tarde, então imprime "Boa noite!"
    console.log("Boa noite!")
}
```

> VERIFICADOR DE POSITIVO:

``` JavaScript
// Definindo o valor da variável 'num' como 10
let num = 10

// Verifica se o número é maior que zero
if (num > 0) {
    // Se a condição for verdadeira, imprime "O número é positivo."
    console.log("O número é positivo.")
} 
// Se a condição acima não for atendida, verifica se o número é menor que zero
else if (num < 0) {
    // Se esta condição for verdadeira, imprime "O número é negativo."
    console.log("O número é negativo.")
} 
// Se nenhuma das condições anteriores for atendida
else {
    // Isso significa que o número é zero, então imprime "O número é zero."
    console.log("O número é zero.")
}
```
---

<h2>
<a href="#"> 🌀 Switch Case </a>
</h2>

<h3> ▶️ Como funciona: </h3>

   - A estrutura `switch` avalia uma expressão e, com base no resultado dessa expressão, executa o bloco de código correspondente a uma das várias opções.
   - O valor da expressão é comparado com os valores das diferentes opções (`case`) dentro da estrutura `switch`.
   - Se o valor da expressão corresponder a um dos casos, o bloco de código associado a esse caso é executado.
   - A palavra-chave `break` é usada para sair da estrutura `switch` após a execução do bloco de código correspondente a um caso.
   - Se nenhum caso corresponder ao valor da expressão, o bloco de código dentro do `default` (opcional) é executado.

<h3> 🔁 Quando usar: </h3>

   - Use `switch` quando você tem múltiplas condições a serem testadas e deseja evitar a repetição de `else if`.
   - É uma alternativa mais limpa e eficiente ao `if-else` quando você precisa escolher entre muitas opções diferentes.
   - É útil para controlar o fluxo do programa com base em uma expressão que pode ter várias correspondências possíveis.

<h2> Exemplos:</h2>

> ESCOLHA DE DIA:

``` JavaScript
// Definindo o valor da variável 'dia' como 3
let dia = 3
// Declarando a variável 'nomeDia' sem atribuir um valor inicial

// Inicia a estrutura de switch, que permite comparar o valor da variável 'dia' com várias opções
switch (dia) {
    // Caso 'dia' seja igual a 1
    case 1:
        // Atribui o valor "Segunda-feira" à variável 'nomeDia'
        nomeDia = "Segunda-feira"
        // Encerra este caso específico do switch
        break
    // Caso 'dia' seja igual a 2
    case 2:
        // Atribui o valor "Terça-feira" à variável 'nomeDia'
        nomeDia = "Terça-feira"
        // Encerra este caso específico do switch
        break
    // Caso 'dia' seja igual a 3
    case 3:
        // Atribui o valor "Quarta-feira" à variável 'nomeDia'
        nomeDia = "Quarta-feira"
        // Encerra este caso específico do switch
        break
    // Caso 'dia' não corresponda a nenhum dos casos anteriores
    default:
        // Atribui o valor "Dia não válido" à variável 'nomeDia'
        nomeDia = "Dia não válido"
}

// Imprime a mensagem com o nome do dia correspondente ao valor da variável 'dia'
console.log("Hoje é " + nomeDia)
```

> ESCOLHA DE COR:

``` JavaScript
// Definindo o valor da variável 'opcao' como "Azul"
let opcao = "Azul"
// Declarando a variável 'mensagem' sem atribuir um valor inicial

// Inicia a estrutura de switch, que permite comparar o valor da variável 'opcao' com várias opções
switch (opcao) {
    // Caso 'opcao' seja igual a "Vermelho"
    case "Vermelho":
        // Atribui a mensagem "Você escolheu a cor vermelha." à variável 'mensagem'
        mensagem = "Você escolheu a cor vermelha."
        // Encerra este caso específico do switch
        break
    // Caso 'opcao' seja igual a "Verde"
    case "Verde":
        // Atribui a mensagem "Você escolheu a cor verde." à variável 'mensagem'
        mensagem = "Você escolheu a cor verde."
        // Encerra este caso específico do switch
        break
    // Caso 'opcao' seja igual a "Azul"
    case "Azul":
        // Atribui a mensagem "Você escolheu a cor azul." à variável 'mensagem'
        mensagem = "Você escolheu a cor azul."
        // Encerra este caso específico do switch
        break
    // Caso 'opcao' não corresponda a nenhum dos casos anteriores
    default:
        // Atribui a mensagem "Opção inválida." à variável 'mensagem'
        mensagem = "Opção inválida."
}

// Imprime a mensagem correspondente à escolha de cor feita através da variável 'opcao'
console.log(mensagem)
```
---

<h2> 
<a href="#"> 🌀 For Loop </a>
</h2>

<h3> ▶️ Como funciona: </h3>

   - O loop `for` é uma estrutura de controle de fluxo de repetição que permite executar um bloco de código várias vezes.
   - É composto por três partes: inicialização, condição de continuação e expressão de incremento.
   - Na inicialização, você geralmente declara e inicializa uma variável de controle.
   - A condição de continuação é avaliada antes de cada iteração. Se for verdadeira, o loop continua; se for falsa, o loop é encerrado.
   - A expressão de incremento é executada após cada iteração do loop.
   - O bloco de código associado ao loop `for` é executado repetidamente até que a condição de continuação seja falsa.

<h3> 🔁 Quando usar: </h3>

   - Use o loop `for` quando souber exatamente quantas vezes deseja que um bloco de código seja executado.
   - É especialmente útil quando você precisa iterar sobre uma sequência de números ou elementos conhecidos.
   - Ideal para situações em que a quantidade de iterações é predefinida e clara.

<h2> Exemplos:</h2>

> CONTADOR:

``` JavaScript
// Inicia um loop for com a variável de controle 'i' iniciando em 0
// O loop continuará enquanto 'i' for menor que 5
// A cada iteração, 'i' será incrementado em 1
for (let i = 0; i < 5; i++) {
    // Imprime a mensagem "Número " seguida pelo valor atual de 'i'
    console.log("Número " + i)
}
```

> LISTAR NOMES:

``` JavaScript
// Definindo um array chamado 'nomes' com quatro elementos: "João", "Maria", "Pedro" e "Ana"
let nomes = ["João", "Maria", "Pedro", "Ana"]

// Inicia um loop for com a variável de controle 'i' iniciando em 0
// O loop continuará enquanto 'i' for menor que o comprimento do array 'nomes'
// A cada iteração, 'i' será incrementado em 1
for (let i = 0; i < nomes.length; i++) {
    // Imprime a mensagem "Olá, " seguida pelo valor atual do elemento do array 'nomes'
    console.log("Olá, " + nomes[i] + "!")
}
```
---

<h2> 
<a href="#"> 🌀 While Loop </a>
</h2>

<h3> ▶️ Como funciona: </h3>

   - O loop `while` é uma estrutura de controle de fluxo de repetição que executa um bloco de código enquanto uma condição especificada for verdadeira.
   - Antes de cada iteração, a condição é verificada. Se for verdadeira, o bloco de código associado ao `while` é executado. Se for falsa, o loop é encerrado.
   - É importante garantir que a condição em um loop `while` eventualmente se torne falsa, caso contrário, o loop continuará indefinidamente, resultando em um "loop infinito".

<h3> 🔁 Quando usar: </h3>

   - Use o loop `while` quando não souber exatamente quantas vezes deseja que um bloco de código seja executado, mas souber a condição que deve ser verdadeira para continuar o loop.
   - É útil quando você precisa repetir um bloco de código enquanto uma condição específica for verdadeira, mas a quantidade de iterações não é conhecida antecipadamente.
   - Útil para situações em que você precisa de flexibilidade na quantidade de iterações, com base em uma condição dinâmica.

<h2> Exemplos:</h2>

> CONTADOR2:

``` JavaScript
// Inicializa a variável 'contador' com o valor 0
let contador = 0

// Inicia um loop while que continuará enquanto o valor de 'contador' for menor que 5
while (contador < 5) {
    // Imprime a mensagem "Contador: " seguida pelo valor atual de 'contador'
    console.log("Contador: " + contador)

    // Incrementa o valor de 'contador' em 1 para a próxima iteração
    contador++
}
```

> VERIFICADOR DO PROXIMO NUMERO MAIOR:

``` JavaScript
// Define um array chamado 'numeros' com seis elementos
let numeros = [20, 45, 60, 30, 70, 55]
// Inicializa a variável 'indice' com o valor 0
let indice = 0
// Inicializa a variável 'numeroMaiorQue50' como nula
let numeroMaiorQue50 = null

// Inicia um loop while que continuará enquanto o índice for menor que o comprimento do array 'numeros'
// e 'numeroMaiorQue50' for nulo
while (indice < numeros.length && numeroMaiorQue50 === null) {
    // Verifica se o número no índice atual do array 'numeros' é maior que 50
    if (numeros[indice] > 50) {
        // Se for maior que 50, atribui esse valor à variável 'numeroMaiorQue50'
        numeroMaiorQue50 = numeros[indice];
    }
    // Incrementa o valor de 'indice' para avançar para o próximo elemento do array na próxima iteração
    indice++
}

// Imprime a mensagem indicando o primeiro número maior que 50 encontrado
console.log("O primeiro número maior que 50 é:", numeroMaiorQue50)
```
---

<h2 align="center">
<a href="#"> ✏️Autor</a>
</h2>
<h3 align="center">
<img loading="lazy" src="https://avatars.githubusercontent.com/u/46384321?v=4" width=180><br><sub>-- Paulo Vieira --</sub>
</h3>