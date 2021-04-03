//import {getName, setName} from "./designPatterns"
const {getName, setName} = require("./designPatterns");

let name = "none";

console.log(getName());
name = setName();
console.log(name);