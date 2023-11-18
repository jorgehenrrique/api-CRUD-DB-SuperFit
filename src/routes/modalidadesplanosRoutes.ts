import express from 'express';
import * as modalidadesplanos from '../controllers/handleModalidadesPlanos';
import loginRequired from '../middlewares/loginRequired';

const router = express.Router();

router.get('/modalidadesplanos', modalidadesplanos.modalidadesPlanosList);
router.get(
  '/modalidadesplanos/:id/:id2',
  modalidadesplanos.modalidadesPlanosListId
);
router.post('/modalidadesplanos', modalidadesplanos.modalidadesPlanosAdd);
router.put(
  '/modalidadesplanos/:id/:id2',
  modalidadesplanos.modalidadesplanosUpdate
);
router.delete(
  '/modalidadesplanos/:id/:id2',
  modalidadesplanos.modalidadesplanosDelete
);

export default router;

/*
// GET: http://localhost:3000/modalidadesplanos
// GET: http://localhost:3000/modalidadesplanos/:id/:id2
// POST: http://localhost:3000/modalidadesplanos
// PUT: http://localhost:3000/modalidadesplanos/:id/:id2
// DELETE: http://localhost:3000/modalidadesplanos/:id/:id2
*/
