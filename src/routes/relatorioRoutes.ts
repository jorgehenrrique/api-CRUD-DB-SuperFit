import express from 'express';
import { displayReport } from '../controllers/handleReport';

const router = express.Router();

router.get('/relatorio', displayReport);

export default router;

// GET http://localhost:3000/relatorio
