import express from 'express';
import * as modalidades from '../controllers/handleModalidades';
import loginRequired from '../middlewares/loginRequired';

const router = express.Router();

router.get('/modalidades', loginRequired, modalidades.modalidadesList);
router.get('/modalidades/:id', loginRequired, modalidades.modalidadesListId);
router.post('/modalidades', loginRequired, modalidades.modalidadesAdd);
router.put('/modalidades/:id', loginRequired, modalidades.modalidadesUpdate);
router.delete('/modalidades/:id', loginRequired, modalidades.modalidadesDelete);

export default router;

/*
// GET: http://localhost:3000/modalidades
app.get('/modalidades', loginRequired, modalidades.modalidadesList);

// GET: http://localhost:3000/modalidades/:id
app.get('/modalidades/:id', loginRequired, modalidades.modalidadesListId);

// POST: http://localhost:3000/modalidades
app.post('/modalidades', loginRequired, modalidades.modalidadesAdd);

// PUT: http://localhost:3000/modalidades/:id
app.put('/modalidades/:id', loginRequired, modalidades.modalidadesUpdate);

// DELETE: http://localhost:3000/modalidades/:id
app.delete('/modalidades/:id', loginRequired, modalidades.modalidadesDelete);
*/
