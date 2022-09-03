import { Router } from 'express';
import {
    getAllGender,
    getGender,
    createGender,
    updateGender,
    deleteGender,
} from '../controller/gender.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/gender', authMiddleware, getAllGender);
router.get('/gender/:id', authMiddleware, getGender);
router.post('/gender', authMiddleware, createGender);
router.put('/gender/:id', authMiddleware, updateGender);
router.delete('/gender/:id', authMiddleware, deleteGender);

export default router;
