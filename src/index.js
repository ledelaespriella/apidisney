import express from 'express';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';


dotenv.config();
const app = express();
//se crea una funcion asyncrona
const main = async () => {
    //conexion a la base de datos


    //se parsea todo lo que llega en formato json
    // app.use(express.json());

    app.get('/', (req, res) => {
        res.send('Hola mundo');
    });

    // usa esta lista de rutas

    app.listen(process.env.PORT, () => {
        console.log(`app listening at port ${process.env.PORT}`)
    });

};

main().catch(err => console.log(err));
