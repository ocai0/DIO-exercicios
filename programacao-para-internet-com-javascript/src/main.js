let actions = [
    {
        name: "alert()",
        desc: "Exibe uma mensagem em um pop-up",
        action: () => {
            alert("Hello World!");
        }
    },
    {
        name: 'console.log()',
        desc: "Escreve no console",
        action: (data = "Hello World") => { console.log(`%c${data}`, "color: blue; font-weight: bold"); }
    },
    {
        name: '[String].replace(linhasATrocar, valorASerTrocado)',
        desc: "Substitui um pedaço de uma string ou o seu todo por outra. Clique para trocar 'i' por 'u'",
        action: (e) => {
            let str = e.getElementsByTagName('p')[0].innerText;
            str = str.replace('Substitui', 'Troca');
            e.getElementsByTagName('p')[0].innerText = str;
        }
    },
    {
        name: "[String].toUpperCase()",
        desc: "Deixa todas as letras em caixa alta.",
        action: (e) => {
            let str = e.getElementsByTagName('p')[0].innerText;
            str = str.toUpperCase();
            e.getElementsByTagName('p')[0].innerText = str;
        }
    },
    {
        name: "[String].toLowerCase()",
        desc: "Deixa todas as letras em caixa baixa.",
        action: (e) => {
            let str = e.getElementsByTagName('p')[0].innerText;
            str = str.toLowerCase();
            e.getElementsByTagName('p')[0].innerText = str;
        }
    },
    {
        name: "[array].push(item)",
        desc: "Adiciona um item em um array.",
        action: (e) => {
            let arr = ['limão', 'maçã', 'pêra'];
            console.log(`%c Itens: [${arr}]`, "color: orange;");
            arr.push("banana");
            console.log(`%c Itens: [${arr}]`, "color: red;");
        }
    },
    {
        name: "[array].pop()",
        desc: "Remove o último item de um array.",
        action: (e) => {
            let arr = ['limão', 'maçã', 'pêra'];
            console.log(`%c Itens: [${arr}]`, "color: orange;");
            arr.pop();
            console.log(`%c Itens: [${arr}]`, "color: red;");
        }
    },
    {
        name: "[array].length",
        desc: "Conta a quantidade de itens em um array.",
        action: (e) => {
            let arr = ['limão', 'maçã', 'pêra'];
            console.log(`%c Itens: [${arr}], são ${arr.length} itens`, "color: orange;");
        }
    },
    {
        name: "[array].reverse()",
        desc: "Traz os elementos de um array a partir do último",
        action: (e) => {
            let arr = ['limão', 'maçã', 'pêra'];
            console.log(`%c Reverse: ${arr.reverse()}`, "color: orange;");
        }
    },
    {
        name: "[array].toString()",
        desc: "Retorna os elementos de um array em uma string",
        action: (e) => {
            let arr = ['limão', 'maçã', 'pêra'];
            alert(arr.toString());
        }
    },
    {
        name: "[array].join(separador)",
        desc: "Traz os elemtos de um array em uma string separada por um separador específicado",
        action: (e) => {
            let arr = ['limão', 'maçã', 'pêra'];
            alert(arr.join(" => "));
        }
    },
    {
        name: "prompt('Mensagem')",
        desc: "Traz uma action box com um campo de entrada de dados pelo usuário, que retornará o valor informado",
        action: (e) => {
            let a = prompt("Digite o seu nome");
            alert("Seu nome é: " + a);
        }
    },
    {
        name: "window.open(link)",
        desc: "Abre o link informado em uma nova aba",
        action: (e) => {
            window.open("http://www.moonlightstudio.com.br");
        }
    },
    {
        name: "window.location.href",
        desc: "Retorna a URL em que o navegador está",
        action: (e) => {
            alert(window.location.href);
        }
    },
    {
        name: "Date",
        desc: "Um [Dictionary] especial, que dá as horas da máquina onde o JS é executado",
        action: (e) => {
            let a = new Date();
            months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
            alert(`Hoje é ${a.getDay()} de ${months[a.getMonth()]} do ano de ${a.getFullYear()}`);
        }
    },
];
function load() {
    actions.forEach((item, index)=> {
        let el = `<div class='card' onclick='actions[${index}].action(this)'><h2>${item.name}</h2><p>${item.desc}</p></div>`;
        document.getElementById("wrapper").innerHTML += el;
    });
}