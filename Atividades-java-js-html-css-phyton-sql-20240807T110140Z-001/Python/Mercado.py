import os
lista =  []
i=0
cont=0
while cont==0:
    op = input("1=Inserir item\n2=Apagar item\n3=Editar item\n4=Listar itens\n5=Sair\n\nDigite a opcao: ")
    match op:
        case "1":
                os.system('cls')
                Item = str(input("(Inserir)\t Nome do item: "))
                if Item in lista:
                       print("Item ja existe")
                else:
                        lista.append(Item)
                        print("Item inserido : ",Item)
        case "2":
                os.system('cls')
                Item = str(input("(Apagar)\t Nome do item: "))
                if Item in lista:
                        lista.remove(Item)
                        print("Item apagado : ",Item)
                else:
                       print("Item nao encontrado")
        case "3":
                os.system('cls')
                Item = str(input("(Editar)\t Nome do item para editar: "))
                
                if Item in lista:
                       print("Editando o Item ",Item)
                       novoitem = Item
                       novoitem = str(input("Digite a nova versao: "))
                       local = lista.index(Item)
                       lista[local] = novoitem
                       print("Item editado : ",Item,"--> ",novoitem)
                else:
                       print("Item nao Encontrado") 
                
        case "4":
                os.system('cls')
                print("\t [Lista]")
                num = 0
                for x in lista:
                       num = num+1
                       print("\t[",num,"] ",x)
        case "5":
                os.system('cls')
                print("\tLista terminada")
                cont = 1
        case default:
                os.system('cls')
                print("Opcao invalida")