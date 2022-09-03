import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './dataBase/db.js';
import CharacterRouter from './routes/character.routes.js';
import MovieRouter from './routes/movie.routes.js';
import GenderRouter from './routes/gender.routes.js';

dotenv.config();
const app = express();

const connection = async () => {
    try {
        await db.authenticate();
        console.log('app connect to db');
    } catch (error) {
        console.log(`Unable to connect to the database: ${error}`);
    }
};

// se crea una funcion asyncrona
const main = async () => {
    connection();

    app.use(express.json());
    app.use(cors());

    app.get('/', (req, res) => {
        res.send('Hola mundo');
    });

    // usa esta lista de rutas
    app.use('/api', CharacterRouter);
    app.use('/api', MovieRouter);
    app.use('/api', GenderRouter);

    app.listen(process.env.PORT, () => {
        console.log(`app listening at port ${process.env.PORT}`);
    });
};

main().catch((err) => console.log(err));
