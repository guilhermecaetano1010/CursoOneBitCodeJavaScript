// Common JS Só funciona em aplicações fora do navegador
const render = require("./render")
const store = require("./store")

console.log("Aplicação iniciada.")
render()
store()
console.log("Aplicação finalizada.")