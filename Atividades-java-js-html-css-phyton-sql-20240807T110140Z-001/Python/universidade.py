class Curso:
    def __init__(self, nome):
        self.nome = nome
        self.professor = None

    def atribuir_professor(self, professor):
        self.professor = professor

class Professor:
    def __init__(self, nome):
        self.nome = nome
        self.cursos_lecionados = []

    def adicionar_curso_lecionado(self, curso):
        self.cursos_lecionados.append(curso)

    def listar_cursos_lecionados(self):
        for curso in self.cursos_lecionados:
            print(curso.nome)

curso1 = Curso("Matemática")
curso2 = Curso("História")
professor1 = Professor("João")
professor2 = Professor("Maria")

curso1.atribuir_professor(professor1)
curso2.atribuir_professor(professor2)

professor1.adicionar_curso_lecionado(curso1)
professor2.adicionar_curso_lecionado(curso2)

print("Cursos lecionados por João:")
professor1.listar_cursos_lecionados()

print("Cursos lecionados por Maria:")
professor2.listar_cursos_lecionados()