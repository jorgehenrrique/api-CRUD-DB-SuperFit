import express from 'express';
import * as matriculas from '../controllers/handleMatriculas';
import loginRequired from '../middlewares/loginRequired';

const router = express.Router();

router.use(loginRequired);

router.get('/', matriculas.matriculasList);
router.get('/:id', matriculas.matriculasListId);
router.post('/', matriculas.matriculasAdd);
router.put('/:id', matriculas.matriculasUpdate);
router.delete('/:id', matriculas.matriculasDelete);

export default router;

/*
// GET: http://localhost:3000/matriculas
// GET: http://localhost:3000/matriculas/:id
// POST: http://localhost:3000/matriculas
// PUT: http://localhost:3000/matriculas/:id
// DELETE: http://localhost:3000/matriculas/:id
*/
