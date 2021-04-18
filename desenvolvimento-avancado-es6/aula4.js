const callHeaven = (name) => {
    new Promise((resolve, reject) => {
        let names = ["Morris", "Alan", "Spencer", "Odith", "Pierre", "Lamut"];
        if(!names.includes(name)) throw new Error(`Your Name isn't in the list!`);
        if(Math.random() < .3) {
            reject("rejected");
        }
        resolve(name);
    });
}
const callHell = (human) => {
    new Promise((resolve, reject) => {
        resolve(`You will stay with us, ${human}`);
    })
}

callHeaven()
    .then(data => {
        console.log(data);
        if(!typeof data) return;
        return callHell(data);
    })
    .then(data2 => {
        console.log(data2);
    })
    .catch(error => console.log(error));

//fetch
fetch("./file.json", {method: 'get'})
    .then(res => {
        if(res.status !== 200) throw new Error("Fetch retorna um erro se for erro de rede. Como aqui o erro é do status precisa ser validado");
        return res.json();
    })
    .then(resolve => {
        console.log(resolve);
    })
    .catch(err => console.log(`Erro: ${err}`));

//async / await
const testF = async () => {
    throw new Error("Oh no!");
    return 1;
}
testF()
    .then(data => console.log(data))
    .catch(err => console.log("testF failed: " + err));

const supa = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(123);
    }, 1000);
});
const awaitFun = async () => {
    //aguarda o retorno
    const data = await supa();
    return data;
}

awaitFun()
    .then(data => console.log(data))
    .catch(err => console.log("testF failed: " + err));
    //tem como juntar await/fetch

//EventEmmiters => exclusivo Node

const EventEmmiter = require("events");
const myInst = new EventEmmiter();

myInst.on("user log", data => {
    console.log(data);
});
myInst.emit("user log", {user: "Data"});
        //Eventtarget
