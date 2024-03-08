const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)
console.log(...towns[0]) // console.log(P, r, o, n)

const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log({ towns, townsCopy}) // Os dois são modificados igualmente pois o JS trabalha com referências

const townsClone = [...towns]

townsClone.push('Aldebaran')

console.log({ towns, townsCopy, townsClone})

const townsObj = { ...towns }
const townsObjClone = { ...townsObj }

townsObjClone.test = "Test"

console.log({townsObj, townsObjClone})