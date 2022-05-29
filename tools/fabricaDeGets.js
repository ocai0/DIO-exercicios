/**
 * Usado para mimetizar a funcao gets() encontrado no site https://dio.me
 * 
 * Exemplo de Uso: `gets = fabricaDeGets()`
 * 
 * @param {*} data - O array com todos os dados que serão enviados para o programa, cada item do array representa uma linha que seria enviada pelo site da DIO
 * @returns {function} Uma função que se comporta como uma fila, removendo e entregando o 1º item do array
 */
const fabricaDeGets = data => () => data.shift()

module.exports = { fabricaDeGets }