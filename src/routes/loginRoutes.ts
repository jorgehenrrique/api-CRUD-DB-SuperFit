import express from 'express';
import login from '../controllers/handleLogin';

const router = express.Router();

router.post('/login', login);

export default router;

// POST http://localhost:3000/login
