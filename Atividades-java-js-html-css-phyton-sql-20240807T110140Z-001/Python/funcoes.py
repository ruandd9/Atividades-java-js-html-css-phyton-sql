#Paulo Vieira
# Esta função imprime uma mensagem simples
def saudacao():
    print("Olá! Me chamo Paulo")

# Chamando a função
saudacao()

# Esta função recebe dois números e imprime a sua soma
def somar(a, b):
    resultado = a + b
    print("A soma é:", resultado)

# Chamando a função e passando os argumentos 2 e 2
somar(2, 2)

# Esta função recebe uma lista de números e retorna a soma de todos os elementos
def somar_lista(numeros):
    soma = sum(numeros)
    return soma

# Chamando a função e armazenando o resultado em uma variável
lista = [1, 2, 3, 4, 5]
resultado = somar_lista(lista)
print("A soma da lista é:", resultado)