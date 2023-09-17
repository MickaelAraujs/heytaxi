import { isValidCpf } from './cpf';

describe('Cpf Test Suite', () => {
    it('Should return true for valid cpf', () => {
        const cpf = isValidCpf('112.505.464-60');
        expect(cpf).toBeTruthy();
    });

    it('Should return true for valid cpf with only numbers', () => {
        const cpf = isValidCpf('11250546460');
        expect(cpf).toBeTruthy();
    });

    it('Should return false if not numbers was provided', () => {
        const cpf = isValidCpf('Invalid Cpf');
        expect(cpf).toBeFalsy();
    });

    it('Should return false if all digits are equal', () => {
        const cpf = isValidCpf('111.111.111-11');
        expect(cpf).toBeFalsy();
    });

    it('Should return false if cpf is incomplete', () => {
        const cpf = isValidCpf('111.111.111');
        expect(cpf).toBeFalsy();
    });

    it('Should return false if cpf is incomplete with numbers only', () => {
        const cpf = isValidCpf('111111111');
        expect(cpf).toBeFalsy();
    });
});