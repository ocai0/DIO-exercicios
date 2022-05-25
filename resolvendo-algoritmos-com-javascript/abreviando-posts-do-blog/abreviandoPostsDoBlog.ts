class Resposta {
    dicionario: IDicionario[]
    _resposta: string
    set obter(palavra) {
        let resultado = this.possui(palavra[0])
            ? this.dicionario[palavra[0]].palavra
        this._resposta += resultado + ' '
    }
    get obter() { return this._resposta.replace(/\s$/, '') }
    constructor() {}
    /** Troca a palavra pela abreviacao, e aumenta o contador */
    trocar(caractereInicial: string) {
        this.dicionario[caractereInicial].trocas += 1
        return `${caractereInicial}.`
    }
    /** Adiciona uma palavra no dicionario */
    adicionar(palavra: string) {
        if(!palavra) return
        const primeiroCaractere = palavra[0]
        const trocas = 1
        this.dicionario[primeiroCaractere] = { palavra, trocas } as IDicionario
    }
    /** Verifica se já possui uma palavra vinculada ao caractere inicial */
    possui(caractereInicial: string) {
        for(const indice in this.dicionario) if(indice === caractereInicial) return true
        return false
    }
}

const abreviandoPostsDoBlog = (entry: string) => {
    let dicionario = new Resposta();
    let frase = entry.split(' ')
    const TAMANHO_MINIMO = 2
    for(const palavra of frase) {
        if(frase.length <= TAMANHO_MINIMO) continue;
        const caractereInicial = palavra[0]
        if(dicionario.possui(caractereInicial)) {
            dicionario.resposta += palavra
            continue;
        }
        dicionario.adicionar(palavra)
    }

};

module.exports = abreviandoPostsDoBlog;

interface IDicionario {
    /** Representa o número de ocorrencias em que essa palavra aparece */
    trocas: number;
    /** É a palavra que foi trocada */
    palavra: string;
};