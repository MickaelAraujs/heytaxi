import axios from "axios";

describe('Index Test Suite', () => {
    it('Should create a new driver', async () => {
        const driver = {
            name: 'Fulano da Silva',
            email: 'fulano@test.com',
            document: '123123454',
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
            document: '123123454',
        }

        const response = await axios.post('http://localhost:3000/api/passengers', passenger)

        
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('passenger_id');
    });
});