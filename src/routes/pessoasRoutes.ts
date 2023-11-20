import express from 'express';
import * as pessoas from '../controllers/handlePessoas';
import loginRequired from '../middlewares/loginRequired';

const router = express.Router();

router.use(loginRequired);

router.get('/', pessoas.pessoasList);
router.get('/:id', pessoas.pessoasListId);
router.post('/', pessoas.pessoasAdd);
router.put('/:id', pessoas.pessoasUpdate);
router.delete('/:id', pessoas.pessoasDelete);

export default router;

/*
// GET: http://localhost:3000/pessoas
// GET: http://localhost:3000/pessoas/:id
// POST: http://localhost:3000/pessoas
// PUT: http://localhost:3000/pessoas/:id
// DELETE: http://localhost:3000/pessoas/:id
*/
