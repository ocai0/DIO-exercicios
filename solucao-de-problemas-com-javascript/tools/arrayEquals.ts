/**
 * Verifica se os dois arrays são idênticos
 * 
 * @param first - O array que você quer verificar
 * @param second - O array que você quer verificar
 * @returns Um boleano dizendo se é ou não igual
 */
export const arrayEquals = (first: any[], second: any[]) => {
    if(first.length !== second.length){
        return false;
    };
    for(let i = 0; i < first.length; i++){
        if(!second.includes(first[i])){
            return false;
        };
    };
    return true;
}