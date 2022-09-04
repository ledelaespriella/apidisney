import { Router } from 'express';
import { verify } from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const authMiddleware = Router();

authMiddleware.use((req, res, next) => {
    const token =
        // eslint-disable-next-line dot-notation
        req.body.token || req.query.token || req.headers['authorization'];

    if (token) {
        verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) return res.status(401).json({ errors: 'Invalid Token' });
            req.user = decoded;
            next();
        });
    } else {
        return res.status(403).send({ errors: 'Token not found.' });
    }
});

export { authMiddleware };
