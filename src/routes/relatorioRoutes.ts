import express from 'express';
import { displayReport } from '../controllers/handleReport';
import loginRequired from '../middlewares/loginRequired';

const router = express.Router();

router.use(loginRequired);

router.get('/relatorio', displayReport);

export default router;

// GET http://localhost:3000/relatorio
