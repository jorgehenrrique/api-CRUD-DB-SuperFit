import express from 'express';
import * as matriculas from '../controllers/handleMatriculas';
import loginRequired from '../middlewares/loginRequired';

const router = express.Router();

router.get('/matriculas', matriculas.matriculasList);
router.get('/matriculas/:id', matriculas.matriculasListId);
router.post('/matriculas', matriculas.matriculasAdd);
router.put('/matriculas/:id', matriculas.matriculasUpdate);
router.delete('/matriculas/:id', matriculas.matriculasDelete);

export default router;

/*
// GET: http://localhost:3000/matriculas
// GET: http://localhost:3000/matriculas/:id
// POST: http://localhost:3000/matriculas
// PUT: http://localhost:3000/matriculas/:id
// DELETE: http://localhost:3000/matriculas/:id
*/
