import db from '../dataBase/db.js';
import { DataTypes } from 'sequelize';

const UserModel = db.define('user', {
    // Model attributes are defined here
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
});

export default UserModel;
