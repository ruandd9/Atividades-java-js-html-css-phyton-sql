import numpy as np
cont = 0 
i = 0
soma = 0
paulo_matriz = np.array(([3,4,1], [3,2,1]))
for i in range(paulo_matriz.shape[0]):
    for cont in range(paulo_matriz.shape[1]):
        soma = soma + paulo_matriz[i][cont]
print(soma)