import express from 'express';
import * as pessoas from '../controllers/handlePessoas';
import loginRequired from '../middlewares/loginRequired';

const router = express.Router();

router.get('/pessoas', loginRequired, pessoas.pessoasList);
router.get('/pessoas/:id', loginRequired, pessoas.pessoasListId);
router.post('/pessoas', loginRequired, pessoas.pessoasAdd);
router.put('/pessoas/:id', loginRequired, pessoas.pessoasUpdate);
router.delete('/pessoas/:id', loginRequired, pessoas.pessoasDelete);

export default router;

/*
// GET: http://localhost:3000/pessoas
// GET: http://localhost:3000/pessoas/:id
// POST: http://localhost:3000/pessoas
// PUT: http://localhost:3000/pessoas/:id
// DELETE: http://localhost:3000/pessoas/:id
*/
