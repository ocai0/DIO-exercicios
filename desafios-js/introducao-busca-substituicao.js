// //Desafio 1
// let entries = [];
// while(row = gets()) {
//   entries.push(row);
// }
// let index = parseInt(entries[0]);
// for(let i = 1; i<index + 1; i++) {
//   let a = entries[i].split(" ").sort();
//   let b = a.sort((a, b) => {
//     let info = b.length - a.length;
//     // if(info == 0) 
//     return info;
//   });
//   console.log(b.join(" "));
// }
// //Desafio 2
// let entries = [];
// entries.push("Este é um super teste de linhas, com vários elementos");
// entries.push("Este é um super teste de linhas, com vários objetos");
// entries.push("Hey This java is hot");
// entries.push("Java is a new paradigm");

// function superFind(from, search) {
//     let one = from;
//     let other = search;
//     if(from.length > search.length) {
//         let one = search;
//         let other = from;
//     }
//     return [...other].reduce((acc, cur) => {
//       acc = (one.includes(acc+cur)) ? acc+cur : acc;
//       return acc;
//     }, "");
// }
// for(let a=0; a<entries.length; a+=2) {
//     console.log(`${entries[a]}, ${entries[a+1]}, \n`);
//     let en = superFind(entries[a], entries[a+1]);
//     console.log(`%c--${en}`, "color:black; font-weight:bold")
// }

//Desafio 3
function validadorDeSenha(senha) {
    if((senha.length > 32 || senha.length < 6) || (senha.match(/\s[.!?\\-]/g)) return "Senha invalida.";
    return "Senha valida.";
  }
