function group () { // exporta várias funções onde quiser no código
    console.log('Export nomeado não-inline (agrupado)')
}   

function exportDefault() { // exporta somente e função padrão onde quiser no código
    console.log('Export default não-inline')
}

export { group }
export default exportDefault