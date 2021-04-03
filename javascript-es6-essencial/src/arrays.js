/* Criando um array */
const arr1 = [1, 2, 43];
const arr2 = Array(1, 2, 4);
const arr3 = Array.of("23", "hsd", "iashdasd");
const arr_empty_slots = Array(3); //Cria um Array com 3 posições vazias

const node_lst = document.getElementsByClassName(".tag");
const arr4 = Array.from(node_lst);

/* Inserindo/removendo valores */

arr1.push("ala"); //Adiciona no inicio e retorna o tamanho do array
arr1.unshift("o"); //Adiciona no início e retorna o tamanho do array
arr2.pop(); //Remove do final do array e retorna quem removeu
arr3.shift(); //Remove do inicio do array e retorna quem removeu
const merged = arr1.concat(arr2); //Une dois arays em um novo
//.slice retorna uma fatia do array
let nova = ["a", "b", "c", "d", "e"];
nova.slice(0, 2); //["a", "b"]
nova.slice(2);    //["c", "d", "e"]
nova.slice(-4);   //["b", "c", "d", "e"]
//.splice retorna os itens que são removidos, sempre
nova.splice(2);   //O array ficará ["a", "b"]
//.splice([posição], [quantos itens serão removidos], [itens a adicionar], [itens a adicionar])
nova.splice(0, 0, "first") // ["first", "a", "b"]

/* Iterar Arrays */
const num = [1, 2, 3, 4, 5];
//forEach => Apenas Itera o array
num.forEach((value, index) => {
    console.log(`index: ${index} => value: ${value}`);
});
//Itera e retorna um novo array 
const values = num.map((value, index) => `${index}: ${value}`);
const numDeep = [1, 2, 3, [4, 5, 6, [7, 8, 9], Array(4)]];
let _a = numDeep.flat(2); //Retorna um novo array transformando oe simplificando a multidimensionalidade do original, baseado na profundidade.
//.flatMap(); //Executa um map e executa um flat de profundidade 1
//.keys() => retorna todas as chaves do array como um Iterator
//.values() => retorna todos os valores do array como um Iteator
//.entriees() => retorna o par chave-valor do array, criando o iterator

/* Buscar elementos */
let num2 = [4, 45, 12, 23, 4, 12];
num2.find(value => value > 4) //=> Traz o primeiro item que satisfaz a condição
num2.findIndex(value => value == 45) // Traz o indice do primeiro item que satisfaz a condição
num2.filter(value => value < 4) // Retorna um novo array com todos os itens que satisfazem a condição
num2.indexOf(12) //Retorna o indice da primeira ocorrencia de um valor
num2.lastIndexOf(12) //Retorna o indice da ultima ocorrencia de um valor
num2.includes("a") //Retorna um bool dizendo se o array possui tal valor
num2.some(value => value+2 == 15) //Retorna um bool dizendo se a condição e satisfeita por pelo meonos um valor
num2.every(value => value % 2 == 0) //Retorna um bool dizendo se a condição é satisefita com todos os valores

/* Ordenar elementos */
let num3 = [12, 34, 123, 65462, 234, 45, 1, 23];
num3.sort((current, next) => next - current); //Ordena, neste caso do maior para o menor
num3.reverse(); //Inverte o sentido do array
num3.join("-"); //Retorna uma string, separando cada item por um delimitador informado
num3.reduce((total, value) => total += value, 0); //retorna um novo tipo de dado, iterando os valores do array



