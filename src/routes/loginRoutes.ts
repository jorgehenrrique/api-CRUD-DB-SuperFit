import express from 'express';
import login from '../controllers/handleLogin';

const router = express.Router();

router.post('/login', login);

export default router;
