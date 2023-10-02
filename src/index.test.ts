import axios from "axios";

axios.defaults.validateStatus = () => true;

describe('Index Test Suite', () => {
    test("Deve fazer o cálculo do preço de uma corrida durante o dia", async function () {
        const input = {
            segments: [
                { distance: 10, date: "2021-03-01T10:00:00" }
            ]
        };
        const response = await axios.post("http://localhost:3000/api/calculate_ride", input);
        const output = response.data;
        expect(output.price).toBe(21);
    });
    
    test("Se a distância for inválida deve lançar um erro", async function () {
        const input = {
            segments: [
                { distance: -10, date: "2021-03-01T10:00:00" }
            ]
        };
        const response = await axios.post("http://localhost:3000/api/calculate_ride", input);
        expect(response.status).toBe(422);
        const output = response.data;
        expect(output).toBe("Invalid distance");
    });
    

    it('Should create a new driver', async () => {
        const driver = {
            name: 'Fulano da Silva',
            email: 'fulano@test.com',
            document: '111.444.777-35',
            carPlate: '223445654'
        }

        const response = await axios.post('http://localhost:3000/api/drivers', driver)
    
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('driver_id');
    });

    it('Should create a new passenger', async () => {
        const passenger = {
            name: 'Fulano da Silva',
            email: 'fulano@test.com',
            document: '111.444.777-35',
        }

        const response = await axios.post('http://localhost:3000/api/passengers', passenger)

        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('passenger_id');
    });

    it('Should not create a driver with invalid cpf', async () => {
        const driver = {
            name: 'Fulano da Silva',
            email: 'fulano@test.com',
            document: 'Invalid CPF',
        }

        const response = await axios.post('http://localhost:3000/api/drivers', driver);
        expect(response.status).toBe(400);
        expect(response.data).toHaveProperty('error');
    });

    it('Should not create a passenger with invalid cpf', async () => {
        const passenger = {
            name: 'Fulano da Silva',
            email: 'fulano@test.com',
            document: 'Invalid CPF',
        }
        const response = await axios.post('http://localhost:3000/api/passengers', passenger);
        expect(response.status).toBe(400);
        expect(response.data).toHaveProperty('error');
    });
});