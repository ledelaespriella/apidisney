import { Router } from 'express';
import {
    getAllCharacters,
    getCharacter,
    createCharacter,
    updateCharacter,
    deleteCharacter,
} from '../controller/character.controller.js';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.get('/characters', authMiddleware, getAllCharacters);
router.get('/characters/:id', authMiddleware, getCharacter);
router.post('/characters', authMiddleware, createCharacter);
router.put('/characters/:id', authMiddleware, updateCharacter);
router.delete('/characters/:id', authMiddleware, deleteCharacter);

export default router;
