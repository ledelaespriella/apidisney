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

router.get('/character', authMiddleware, getAllCharacters);
router.get('/character/:id', authMiddleware, getCharacter);
router.post('/character', authMiddleware, createCharacter);
router.put('/character/:id', authMiddleware, updateCharacter);
router.delete('/character/:id', authMiddleware, deleteCharacter);

export default router;
