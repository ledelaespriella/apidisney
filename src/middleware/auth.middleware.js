import { Router } from 'express';
import { verify } from 'jsonwebtoken';

const authMiddleware = Router();
var r = 0;

authMiddleware.use((req, res, next) => {
  const token = req.headers['authorization'];

  if (token) {
    verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.json({ status: false, errors: 'Token inválida' });
      req.user = decoded;
      next();
    });
  } else {
    return res.send({
      status: false,
      errors: 'Token not found.',
    });
  }
});

export { authMiddleware };
