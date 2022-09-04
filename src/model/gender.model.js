import db from '../dataBase/db.js';
import { DataTypes } from 'sequelize';

const GenderModel = db.define('genders', {
    // Model attributes are defined here
    name: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
    movieId: { type: DataTypes.INTEGER },
});

export default GenderModel;
