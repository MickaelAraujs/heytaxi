import Cpf from './cpf';

describe('Cpf Test Suite', () => {
    it('Should return true for valid cpf', () => {
        const cpf = new Cpf('111.444.777-35');
        expect(cpf).toBeTruthy();
    });

    it('Should return true for valid cpf with only numbers', () => {
        const cpf = new Cpf('11144477735');
        expect(cpf).toBeTruthy();
    });

    it('Should return false if not numbers was provided', () => {
        expect(() => new Cpf('Invalid Cpf')).toThrow(new Error('Invalid Cpf'));
    });

    it('Should return false if all digits are equal', () => {
        expect(() => new Cpf('111.111.111-11')).toThrow(new Error('Invalid Cpf'));
    });

    it('Should return false if cpf is incomplete', () => {
        expect(() => new Cpf('111.111.111')).toThrow(new Error('Invalid Cpf'));
    });

    it('Should return false if cpf is incomplete with numbers only', () => {
        expect(() => new Cpf('111111111')).toThrow(new Error('Invalid Cpf'));
    });
});