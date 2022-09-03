import { Router } from 'express';
import {
    getAllMovies,
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie,
} from '../controller/movie.controller.js';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.get('/movies', authMiddleware, getAllMovies);
router.get('/movies/:id', authMiddleware, getMovie);
router.post('/movies', authMiddleware, createMovie);
router.put('/movies/:id', authMiddleware, updateMovie);
router.delete('/movies/:id', authMiddleware, deleteMovie);

export default router;
