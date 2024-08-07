#jagunço Programações
import time
import os

class contabancaria:
    saldo = 0
    
    def __init__(self, titular):
        self.titular = titular
        
    def depositar(self):
        valor = float(input("Adicione um valor: "))
        self.saldo = self.saldo + valor
        print("Valor Adicionado!")

    def sacar(self):
        valor = float(input("Saque um valor: "))
        if self.saldo < valor:
            print("Saldo insuficiente!")
        elif valor < 0 or valor == 0:
            print("Valor inválido")
        else:
            self.saldo = self.saldo - valor
            print("Saque feito!")
    def extrato(self):
        print("Titular da conta: ",self.titular)
        print("Saldo da Conta:\t",self.saldo)


conta1 = contabancaria("Paulo")
i = 0
while i == 0:
    os.system('cls')
    print("\tBanco do Paulao\n\nDepositar(1)\nSacar(2)\nExtrato(3)\nSair(4) ")
    opcao = int(input("Digite um numero: "))
    match opcao: 
        case 1:
            os.system('cls')
            conta1.depositar()
            time.sleep(3)
        case 2:
            os.system('cls')
            conta1.sacar()
            time.sleep(3)
        case 3:
            os.system('cls')
            conta1.extrato()
            time.sleep(5)
        case 4:
            os.system('cls')
            print("Sistema Finalizado")
            time.sleep(3)
            i= i + 1
        case default:
            os.system('cls')
            print("Opção Inválida!")
            time.sleep(3)
    

  
    
