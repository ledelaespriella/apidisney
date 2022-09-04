import db from '../dataBase/db.js';
import { DataTypes } from 'sequelize';

const UserModel = db.define('users', {
    // Model attributes are defined here
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
});

export default UserModel;
