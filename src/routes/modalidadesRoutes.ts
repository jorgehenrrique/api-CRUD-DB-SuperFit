import express from 'express';
import * as modalidades from '../controllers/handleModalidades';
import loginRequired from '../middlewares/loginRequired';

const router = express.Router();

router.get('/modalidades', modalidades.modalidadesList);
router.get('/modalidades/:id', modalidades.modalidadesListId);
router.post('/modalidades', modalidades.modalidadesAdd);
router.put('/modalidades/:id', modalidades.modalidadesUpdate);
router.delete('/modalidades/:id', modalidades.modalidadesDelete);

export default router;

/*
// GET: http://localhost:3000/modalidades
// GET: http://localhost:3000/modalidades/:id
// POST: http://localhost:3000/modalidades
// PUT: http://localhost:3000/modalidades/:id
// DELETE: http://localhost:3000/modalidades/:id
*/
