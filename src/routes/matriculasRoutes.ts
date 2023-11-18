import express from 'express';
import * as matriculas from '../controllers/handleMatriculas';
import loginRequired from '../middlewares/loginRequired';

const router = express.Router();

router.get('/matriculas', loginRequired, matriculas.matriculasList);
router.get('/matriculas/:id', loginRequired, matriculas.matriculasListId);
router.post('/matriculas', loginRequired, matriculas.matriculasAdd);
router.put('/matriculas/:id', loginRequired, matriculas.matriculasUpdate);
router.delete('/matriculas/:id', loginRequired, matriculas.matriculasDelete);

export default router;

/*
// GET: http://localhost:3000/matriculas
// GET: http://localhost:3000/matriculas/:id
// POST: http://localhost:3000/matriculas
// PUT: http://localhost:3000/matriculas/:id
// DELETE: http://localhost:3000/matriculas/:id
*/
