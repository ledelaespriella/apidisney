import db from '../dataBase/db.js';
import { DataTypes } from 'sequelize';

const MovieModel = db.define('movie', {
    // Model attributes are defined here
    image: { type: DataTypes.STRING },
    title: { type: DataTypes.STRING },
    creationDate: { type: DataTypes.DATE },
    qualification: { type: DataTypes.INTEGER },
    characterId: { type: DataTypes.INTEGER },
});

export default MovieModel;
