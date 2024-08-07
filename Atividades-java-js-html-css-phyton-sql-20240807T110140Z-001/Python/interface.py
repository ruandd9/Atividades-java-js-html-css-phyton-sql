# Paulo Vieira
import sys
from PySide6.QtGui import QPalette, QColor, QFont
from PySide6.QtWidgets import QApplication, QMainWindow, QLabel, QLineEdit, QPushButton, QMessageBox, QVBoxLayout, QWidget
from PySide6.QtCore import Qt

def exibir_mensagem():
    nome = entrada_nome.text()  # Obtém o texto inserido na caixa de entrada de nome
    mensagem = entrada_mensagem.text()  # Obtém o texto inserido na caixa de entrada de mensagem
    if nome and mensagem:
        QMessageBox.information(janela, "Mensagem Enviada", f"<b>{nome}</b> enviou: <b>{mensagem}</b>")
        # Exibe uma caixa de diálogo com as informações de nome e mensagem
    else:
        QMessageBox.warning(janela, "Erro", "Por favor, preencha todos os campos.")
        # Exibe uma caixa de diálogo de aviso se algum campo estiver vazio

app = QApplication(sys.argv)
janela = QMainWindow()
janela.setWindowTitle("Enviar Mensagem")
# Cria uma instância da aplicação e uma janela principal com o título "Enviar Mensagem"

palette = QPalette()
palette.setColor(QPalette.Window, QColor(29, 161, 242))
janela.setPalette(palette)
# Define a paleta de cores da janela, com a cor de fundo definida como um azul claro

widget_central = QWidget(janela)
layout = QVBoxLayout(widget_central)
# Cria um widget central e um layout vertical para organizar os elementos na janela

label_nome = QLabel(janela)
label_nome.setText("<b>Nome:</b>")
label_nome.setStyleSheet("color: white;")
label_nome.setFont(QFont("Arial", 16))
# Cria um QLabel para exibir o texto "Nome:" em negrito, com a cor do texto definida como branco e a fonte como Arial tamanho 16

entrada_nome = QLineEdit(janela)
entrada_nome.setStyleSheet("color: black;")
entrada_nome.setFont(QFont("Arial", 16))
# Cria uma caixa de texto QLineEdit para o usuário inserir o nome, com a cor do texto definida como preto e a fonte como Arial tamanho 16

label_mensagem = QLabel(janela)
label_mensagem.setText("<b>Mensagem:</b>")
label_mensagem.setStyleSheet("color: white;")
label_mensagem.setFont(QFont("Arial", 16))
# Cria um QLabel para exibir o texto "Mensagem:" em negrito, com a cor do texto definida como branco e a fonte como Arial tamanho 16

entrada_mensagem = QLineEdit(janela)
entrada_mensagem.setStyleSheet("color: black;")
entrada_mensagem.setFont(QFont("Arial", 16))
# Cria uma caixa de texto QLineEdit para o usuário inserir a mensagem, com a cor do texto definida como preto e a fonte como Arial tamanho 16

botao_enviar = QPushButton(janela)
botao_enviar.setText("Enviar")
botao_enviar.setStyleSheet("background-color: #1DA1F2; color: white;")
botao_enviar.setFont(QFont("Arial", 16))
botao_enviar.clicked.connect(exibir_mensagem)
# Cria um QPushButton com o texto "Enviar", com a cor de fundo definida como azul e a cor do texto definida como branco.
# Também define a fonte como Arial tamanho 16. Conecta o sinal "clicked" ao slot "exibir_mensagem()"

layout.addWidget(label_nome)
layout.addWidget(entrada_nome)
layout.addWidget(label_mensagem)
layout.addWidget(entrada_mensagem)
layout.addWidget(botao_enviar)
layout.setAlignment(botao_enviar, Qt.AlignHCenter)
# Adiciona os elementos ao layout vertical e centraliza o botão "Enviar" horizontalmente

widget_central.setLayout(layout)
janela.setCentralWidget(widget_central)
# Define o layout vertical como o layout central do widget e configura o widget central como o widget central da janela principal

janela.setGeometry(100, 100, 300, 200)
janela.show()
# Define a geometria da janela (posição e tamanho) e exibe a janela

sys.exit(app.exec())
# Inicia o loop de eventos da aplicação e encerra o programa quando a janela for fechada