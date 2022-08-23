import db from '../dataBase/db.js';
import { DataTypes } from 'sequelize';

const CharacterModel = db.define('character', {
    // Model attributes are defined here
    name: { type: DataTypes.STRING },
    age: { type: DataTypes.INTEGER },
    weight: { type: DataTypes.FLOAT },
    history: { type: DataTypes.STRING },
    films: { type: DataTypes.STRING },
});

export default CharacterModel;
