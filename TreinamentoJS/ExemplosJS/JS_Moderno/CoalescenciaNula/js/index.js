const a1 = 0 // false

const b1 = null // false

const c1 = "Teste" // true

console.log(a1 || b1 || c1)

console.log(b1 ?? a1)

let a = 0

let b = a || 42

console.log({a, b})

b = a ?? 42

console.log({a, b})

// let c = null ?? 42 // O resultado será 42 pois ele ignora valores null

// let c = undefined ?? 42 // O resultado será 42 pois ele ignora valores undefined

let c = false ?? 42 // O resultado será false

console.log({c})