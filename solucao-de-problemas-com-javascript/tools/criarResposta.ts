import log from "./log";
export function criarResposta() {
    const resposta = {
        resposta: [],
        adicionar(item) {
            this.resposta.push(item);
        },
        imprimir() {
            this.resposta.map((item) => log(item))
        }
    }
    return resposta
}