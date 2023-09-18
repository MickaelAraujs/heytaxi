import express, { Request, Response } from 'express';
import pgp from 'pg-promise';
import dotenv from 'dotenv';
import { v4 as uuid } from 'uuid';
import Cpf from './entities/cpf';

dotenv.config();
const app = express();
app.use(express.json());

const connectionString = process.env.DATABASE_URL as string;
const database = pgp()(connectionString);

app.post('/api/drivers', async (request: Request, response: Response) => {
    try {
        const {
            name,
            email,
            document,
            carPlate: car_plate,
        } = request.body;

        const cpf = new Cpf(document);
        const driverId = uuid();
        await database.query(`INSERT INTO drivers (
            driver_id,
            name,
            email,
            document,
            car_plate
        ) VALUES (
            '${driverId}',
            '${name}',
            '${email}',
            '${cpf.value}',
            '${car_plate}'
        );`);
    
        return response.status(200).json({
            driver_id: driverId,
        });
    } catch (error) {
        return response.status(400).json({
            error,
        })
    }
});

app.post('/api/passengers', async (request: Request, response: Response) => {
    try {
        const {
            name,
            email,
            document
        } = request.body;
        
        const cpf = new Cpf(document);
        const passenger_id = uuid();
        await database.query(`INSERT INTO passengers (
            passenger_id,
            name,
            email,
            document
        ) VALUES (
            '${passenger_id}',
            '${name}',
            '${email}',
            '${cpf.value}'
        );`);
    
        return response.status(200).json({
            passenger_id,
        });
    } catch (error) {
        return response.status(400).json({
            error,
        })
    }
});


app.listen(process.env.PORT || 3000, () => console.log(`🔥 Server running ...`));