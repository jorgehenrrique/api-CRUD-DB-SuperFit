import express from 'express';
import * as pessoas from '../controllers/handlePessoas';

const router = express.Router();

router.get('/pessoas', pessoas.pessoasList);
router.get('/pessoas/:id', pessoas.pessoasListId);
router.post('/pessoas', pessoas.pessoasAdd);
router.put('/pessoas/:id', pessoas.pessoasUpdate);
router.delete('/pessoas/:id', pessoas.pessoasDelete);

export default router;

/*
// GET: http://localhost:3000/pessoas
// GET: http://localhost:3000/pessoas/:id
// POST: http://localhost:3000/pessoas
// PUT: http://localhost:3000/pessoas/:id
// DELETE: http://localhost:3000/pessoas/:id
*/
