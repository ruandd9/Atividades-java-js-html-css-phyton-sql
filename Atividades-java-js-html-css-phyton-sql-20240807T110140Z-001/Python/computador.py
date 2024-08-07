class Computador:
    def __init__(self, marca):
        self.marca = marca
        self.monitor = None

    def conectar_monitor(self, monitor):
        self.monitor = monitor

class Monitor:
    def __init__(self, marca):
        self.marca = marca

computador1 = Computador("Dell")
monitor1 = Monitor("LG")

computador1.conectar_monitor(monitor1)

print("Marca do computador:", computador1.marca)
print("Marca do monitor conectado:", computador1.monitor.marca)