alunos = {}
i = 0
cont = 0
soma = 0
while i <= 2:
    nome = str(input('Digite o nome do aluno: '))
    nota = float(input('Digite a nota do aluno: '))
    alunos[nome] = nota
    i = i + 1
for cont in alunos:
    soma = soma + alunos[cont]
soma = soma/3
print('A media dos alunos e: ',soma)

