export function inline () { // Coloca o export na mesma linha e permite exportar várias funções
    console.log('Export nomeado inline')
}

export default function defaultInline() { // Coloca o export na mesma linha e permite exportar somente a função padrão
    console.log('Export default inline')
}