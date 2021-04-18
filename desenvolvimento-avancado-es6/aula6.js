//Tratamento de erros

let b = "12";
let a = document.querySelector(".mega").innerHTML;

debugger; //break point in code

//Console

console.log();
console.warn(); //Notifica com estilizção de alerta
console.error(); //Notifica com estilizção de erro
console.trace(); //Onde o código foi executado
console.group(); //Agrupa vários consoles;
    //console.log("one")
    //console.log("one")
    //console.log("one")
console.groupEnd("Group Name"); //Fecha o agrupamento
console.time("log time"); //Mostra o dtempo decorrido
setTimeout(() => {
    console.timeEnd("end timer")
}, 2000);
console.table() //Formata em tabela obj/arrays
console.assert(1 == 2, "Ops") //Se a condiçção não for true dispara o console.log
console.log("%cLoggger", "color: blue"); //Estiliza o log