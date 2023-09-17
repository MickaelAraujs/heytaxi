function allDigitsAreEqual(cpf: string) {
    return cpf.split("").every(digit => digit === cpf[0]);
}

function removeSpecialCharacters(cpf: string) {
    return cpf
        .replace('.','')
        .replace('.','')
        .replace('-','')
        .replace(" ","");
}

function isValidSize(cpf: string) {
    return cpf.length >= 11 && cpf.length <= 14;
}

function calculateDigit(digitValue: number) {
    const CPF_DIGITS_LENGTH = 11;
    const rest = digitValue % CPF_DIGITS_LENGTH;

    return rest < 2 
        ? 0 
        : CPF_DIGITS_LENGTH - rest;
}

function getLastDigits(cpf: string) {
    return cpf.substring(cpf.length - 2, cpf.length)
}

function isSameDigit(firstDigit: string, secondDigit: string) {
    return firstDigit === secondDigit;
}

export function isValidCpf(cpf: string) {
    if (!isValidSize(cpf)) return false;
    
    const cpfDigits = removeSpecialCharacters(cpf);
        
    if (allDigitsAreEqual(cpfDigits)) return false;

    let firstDigitSum = 0
    let secondDigitSum = 0;  

    for (let cpfDigitCount = 1; cpfDigitCount < cpfDigits.length - 1; cpfDigitCount++) {  
        const digitValue = parseInt(cpfDigits.substring(cpfDigitCount - 1, cpfDigitCount));  							
        firstDigitSum = firstDigitSum + ( 11 - cpfDigitCount ) * digitValue;  
        secondDigitSum = secondDigitSum + ( 12 - cpfDigitCount ) * digitValue; 
    };  
        
    const firstDigitValue = calculateDigit(firstDigitSum);  
    secondDigitSum += 2 * firstDigitValue; 
    const secondDigitValue = calculateDigit(secondDigitSum); 
    const cpfLastDigits = getLastDigits(cpfDigits);
    return isSameDigit(`${firstDigitValue}${secondDigitValue}`, cpfLastDigits);
}
