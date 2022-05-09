const gets = () => ['desconsidere', 'isso', 'apenas', 'é', 'para', 'o', 'TypeScript', 'parar', 'de', 'encher', 'o', 'saco' ];

/**
 * Exclusivo para a DIO, já que a entrada é lida dessa forma
 * @returns Um array com todas as entradas
 */
export const obterEntradas = () => {
    let entries: string[];
    for(let entry of gets()) { entries.push(entry); }
    return entries;
}