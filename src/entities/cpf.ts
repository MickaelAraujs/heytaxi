export default class Cpf {
    private readonly MIN_DIGITS = 11;

    constructor (readonly value: string) {
        if (!this.isValidCpf(value)) throw new Error('Invalid Cpf');
    }

    private isValidCpf(cpf: string) {
        cpf = this.removeSpecialCharacters(cpf);
        if (!this.isValidSize(cpf)) return false;
        if (this.allDigitsAreEqual(cpf)) return false;            
        const firstDigit = this.calculateDigit(cpf, 10);  
        const secondDigit = this.calculateDigit(cpf, 11); 
        const cpfLastDigits = this.getLastDigits(cpf);
        return this.isSameDigit(`${firstDigit}${secondDigit}`, cpfLastDigits);
    }

    private removeSpecialCharacters(cpf: string) {
        return cpf.replace(/\D/g, "");
    }

    private isValidSize(cpf: string) {
        return cpf.length !== this.MIN_DIGITS;
    }

    private allDigitsAreEqual(cpf: string) {
        return cpf.split("").every(digit => digit === cpf[0]);
    }
        
    private calculateDigit(cpf: string, factor: number) {
        let total = 0;
		for (const digit of cpf) {
			if (factor > 1) total += parseInt(digit) * factor--;
		}
		const rest = total%this.MIN_DIGITS;
		return (rest < 2) ? 0 : this.MIN_DIGITS - rest;
    }
    
    private getLastDigits(cpf: string) {
        return cpf.substring(cpf.length - 2, cpf.length)
    }
    
    private isSameDigit(firstDigit: string, secondDigit: string) {
        return firstDigit === secondDigit;
    }
}