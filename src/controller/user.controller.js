import UserModel from '../model/user.model.js';
import { hashSync, compareSync } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import sendEmail from '../utils/sendEmail.js';
import dotenv from 'dotenv';
dotenv.config();

const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const oldUser = await UserModel.findAll({
            where: { email: `${email}` },
        });

        if (oldUser[0]) {
            res.status(409).json({
                message: 'User Already Exist. Please Login',
            });
        }

        if (!(email && password)) {
            res.status(400).json({ message: 'All input is required' });
        } else {
            const encryptedPassword = hashSync(password, 10);
            await UserModel.create({
                email: email.toLowerCase(),
                password: encryptedPassword,
            });
            // send a email
            const from = 'ledelaesprielladev@gmail.com';
            const subject = 'Successful registrations';
            const text = 'Thank you for registering.';
            sendEmail(email, from, subject, text);

            res.json({ message: 'user created successfully' });
        }
    } catch (error) {
        res.json({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const body = req.body;
        const verify = await UserModel.findAll({
            where: { email: body.email },
        });
        if (verify[0]) {
            if (compareSync(body.password, verify[0].password)) {
                const token = sign(
                    {
                        exp: Math.floor(Date.now() / 1000) + 60 * 30,
                        data: { id: verify.id, email: verify.email },
                    },
                    process.env.JWT_SECRET
                );
                return res.json({ status: true, token });
            } else {
                return res.json({ errors: 'Email and password incorrect' });
            }
        } else {
            return res.json({ errors: 'Email does not exist in the database' });
        }
    } catch (error) {
        res.json({ message: error.message });
    }
};

export { register, login };
