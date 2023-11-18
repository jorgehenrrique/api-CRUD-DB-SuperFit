import express from 'express';
import * as planos from '../controllers/handlePlanos';
import loginRequired from '../middlewares/loginRequired';

const router = express.Router();

router.get('/planos', loginRequired, planos.planosList);
router.get('/planos/:id', loginRequired, planos.planosListId);
router.post('/planos', loginRequired, planos.planosAdd);
router.put('/planos/:id', loginRequired, planos.planosUpdate);
router.delete('/planos/:id', loginRequired, planos.planosDelete);

export default router;

/*
// GET: http://localhost:3000/planos
// GET: http://localhost:3000/planos/:id
// POST: http://localhost:3000/planos
// PUT: http://localhost:3000/planos/:id
// DELETE: http://localhost:3000/planos/:id
*/
