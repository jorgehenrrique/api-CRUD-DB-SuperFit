import express from 'express';
import * as planos from '../controllers/handlePlanos';
import loginRequired from '../middlewares/loginRequired';

const router = express.Router();

router.use(loginRequired);

router.get('/', planos.planosList);
router.get('/:id', planos.planosListId);
router.post('/', planos.planosAdd);
router.put('/:id', planos.planosUpdate);
router.delete('/:id', planos.planosDelete);

export default router;

/*
// GET: http://localhost:3000/planos
// GET: http://localhost:3000/planos/:id
// POST: http://localhost:3000/planos
// PUT: http://localhost:3000/planos/:id
// DELETE: http://localhost:3000/planos/:id
*/
