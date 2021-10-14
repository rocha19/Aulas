class Camera:
    def __init__(self: object, iso: int, exposicao: int, ligar: bool) -> None:
        self.__iso: int = iso
        self.__exposicao: int = exposicao
        self.__ligar: bool = ligar
    
    @property
    def iso(self: object) -> int:
        return self.__iso

    @property
    def exposicao(self: object) -> int:
        return self.__exposicao

    @property
    def ligar(self: object) -> bool:
        return self.__ligar

    @property
    def ajustar_iso(self: object) -> int:
        if self.iso < 300:
            self.iso = self.iso + 1
        else:
            self.iso = self.iso - 1
    
    @property
    def ajustar_exposicao(self: object) -> int:
        if self.exposicao > 0:
            self.exposicao = self.exposicao - 1
        else:
            self.exposicao = self.exposicao + 1

    @property
    def tirar_foto(self: object) -> str:
        if self.ligar == True:
            return 'Sua fotografia foi efetuada com sucesso'
        else:
            return 'Precione o botão para fotografar'


