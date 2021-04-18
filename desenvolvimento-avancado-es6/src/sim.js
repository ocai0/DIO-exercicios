class Sim {
    name = "Sim Class tester";
    call() {
        return "Hi";
    }
    sum(a, b, retorno) {
        setTimeout(() => {
            retorno(a + b);
        }, 2000);

    }
}
module.exports = Sim;