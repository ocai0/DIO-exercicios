const pokemons = [
    {
        name: "Bulbassaur",
        type: ["grass"],
        evolveTo: "Ivyssaur",
        levelToEvolve: 16,
    },
    {
        name: "Ivyssaur",
        type: ["grass"],
        evolveFrom: "Bulbasssaur",
        evolveTo: "Venussaur",
        levelToEvolve: 32,
    },
    {
        name: "Venussaur",
        type: ["grass"],
        evolveFrom: "Ivysssaur",
        
    },
    {
        name: "Squirtle",
        type: ["water"],
        evolveTo: "Wartodle",
        levelToEvolve: 16,
    },
    {
        name: "Wartodle",
        type: ["water"],
        evolveFrom: "Squirtle",
        evolveTo: "Blastoise",
        levelToEvolve: 32,
    },
    {
        name: "Blastoise",
        type: ["water"],
        evolveFrom: "Wartodle",
    },
];

/*[Array-a-ser-filtrado].filter((cada-item-no-array) => {
    //retorna o item em um novo objeto SE for verdadeiro;
    return [Condição a ser verificada]
}) */

const waterStarters = pokemons.filter((entry) => {
    return (entry.evolveFrom === undefined) && (entry.type.includes("water"));
});
// console.log(waterStarters);

//Descontrução do objeto
const allGrass = pokemons.filter(({type}) => type.includes("grass"));
// console.log(allGrass);

/*[Array-Origem].map((cada-item-no-array) => {
    //retorna o elemento do novo array
    return [Objeto a ser Retornado]
}) */

const onlyNames = pokemons.map((entry) => entry.name);
// console.log(onlyNames);

const countStarters = pokemons.reduce((total, item) => {
    return ( (item.evolveFrom) ? total : total+=1 );
}, 0);
// console.log(countStarters);

const Starters = pokemons
    .filter((entry) => !entry.evolveFrom)
    .reduce((total, item) => {
        let nameArr = total.name;
        nameArr.push(item.name);
        return {
            counter: total.counter + 1, 
            name: nameArr
        };
    }, {counter: 0, name: []});
console.log(Starters);