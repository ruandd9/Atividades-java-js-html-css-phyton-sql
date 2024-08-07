class Cabeça:
    def __init__(self, cor):
        self.cor = cor

class Boneco:
    def __init__(self, nome, cor_cabeca):
        self.nome = nome
        self.cabeca = Cabeça(cor_cabeca)

    def destruir(self):
        self.cabeca = None

boneco1 = Boneco("Boneco 1", "Vermelho")
print("Nome do boneco:", boneco1.nome)
print("Cor da cabeça do boneco:", boneco1.cabeca.cor)

boneco1.destruir()
if boneco1.cabeca is None:
    print("A cabeça do boneco foi destruída!")