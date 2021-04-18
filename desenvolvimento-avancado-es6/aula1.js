//Call Context -> Rege o this em arrow functions

//Default Function Arguments
//- Dá pra passar funcçoes como parametro default em outras funções
function defaultA() {
    return "Nothing";
}
let obj = {
    sum: (a, b = 0) => console.log(a + b),
    call: (a = defaultA()) => alert(a)
}
// obj.sum(1);
// obj.sum(1, 2);
// obj.call(1);
// obj.call();

//__________________________________________________________________
//Enchanced Object Literals

const KEYNAME = "chaveAcesso";
let prop = "value";

let obj2 = {
    [KEYNAME + "_A"]: "teste",
    prop
};

