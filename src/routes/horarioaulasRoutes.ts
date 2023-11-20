import express from 'express';
import * as horarioaulas from '../controllers/handleHorariosAulas';
import loginRequired from '../middlewares/loginRequired';

const router = express.Router();

router.use(loginRequired);

router.get('/', horarioaulas.horariosAulasList);
router.get('/:id', horarioaulas.horariosAulasListId);
router.post('/', horarioaulas.horariosAulasAdd);
router.put('/:id', horarioaulas.horariosAulasUpdate);
router.delete('/:id', horarioaulas.horariosAulasDelete);

export default router;

/*
// GET: http://localhost:3000/horarioaulas
// GET: http://localhost:3000/horarioaulas/:id
// POST: http://localhost:3000/horarioaulas
// PUT: http://localhost:3000/horarioaulas/:id
// DELETE: http://localhost:3000/horarioaulas/:id
*/
