import Cpf from './cpf';

describe('Cpf Test Suite', () => {
    it.each([
        '111.444.777-35',
        '11144477735'
    ])('Should create a cpf with valid digits', (value: string) => {
        const cpf = new Cpf(value);
        expect(cpf.value).toBe(value);
    });

    it.each([
        'Invalid Cpf',
        '111.111.111-11',
        '111.111.111',
        '111111111'
    ])('Should throw error if cpf is invalid', (value: string) => {
        expect(() => new Cpf(value)).toThrow(new Error('Invalid Cpf'));
    });
});