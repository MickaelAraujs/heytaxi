export default class Cpf {
    private readonly MIN_DIGITS = 11;
    private readonly MAX_DIGITS = 14;

    constructor (readonly value: string) {
        if (!this.isValidCpf(value)) throw new Error('Invalid Cpf');
    }

    private isValidCpf(cpf: string) {
        if (!this.isValidSize(cpf)) return false;
        
        const cpfDigits = this.removeSpecialCharacters(cpf);
            
        if (this.allDigitsAreEqual(cpfDigits)) return false;
    
        let firstDigitSum = 0
        let secondDigitSum = 0;  
    
        for (let cpfDigitCount = 1; cpfDigitCount < cpfDigits.length - 1; cpfDigitCount++) {  
            const digitValue = parseInt(cpfDigits.substring(cpfDigitCount - 1, cpfDigitCount));  							
            firstDigitSum = firstDigitSum + ( 11 - cpfDigitCount ) * digitValue;  
            secondDigitSum = secondDigitSum + ( 12 - cpfDigitCount ) * digitValue; 
        };  
            
        const firstDigitValue = this.calculateDigit(firstDigitSum);  
        secondDigitSum += 2 * firstDigitValue; 
        const secondDigitValue = this.calculateDigit(secondDigitSum); 
        const cpfLastDigits = this.getLastDigits(cpfDigits);
        return this.isSameDigit(`${firstDigitValue}${secondDigitValue}`, cpfLastDigits);
    }

    private allDigitsAreEqual(cpf: string) {
        return cpf.split("").every(digit => digit === cpf[0]);
    }
    
    private removeSpecialCharacters(cpf: string) {
        return cpf
            .replace('.','')
            .replace('.','')
            .replace('-','')
            .replace(" ","");
    }
    
    private isValidSize(cpf: string) {
        return cpf.length >= this.MIN_DIGITS && cpf.length <= this.MAX_DIGITS;
    }
    
    private calculateDigit(digitValue: number) {
        const rest = digitValue % this.MIN_DIGITS;
    
        return rest < 2 
            ? 0 
            : this.MIN_DIGITS - rest;
    }
    
    private getLastDigits(cpf: string) {
        return cpf.substring(cpf.length - 2, cpf.length)
    }
    
    private isSameDigit(firstDigit: string, secondDigit: string) {
        return firstDigit === secondDigit;
    }
}