import express from 'express';
import * as horarioaulas from '../controllers/handleHorariosAulas';
import loginRequired from '../middlewares/loginRequired';

const router = express.Router();

router.get('/horarioaulas', loginRequired, horarioaulas.horariosAulasList);
router.get(
  '/horarioaulas/:id',
  loginRequired,
  horarioaulas.horariosAulasListId
);
router.post('/horarioaulas', loginRequired, horarioaulas.horariosAulasAdd);
router.put(
  '/horarioaulas/:id',
  loginRequired,
  horarioaulas.horariosAulasUpdate
);
router.delete(
  '/horarioaulas/:id',
  loginRequired,
  horarioaulas.horariosAulasDelete
);

export default router;

/*
// GET: http://localhost:3000/horarioaulas
// GET: http://localhost:3000/horarioaulas/:id
// POST: http://localhost:3000/horarioaulas
// PUT: http://localhost:3000/horarioaulas/:id
// DELETE: http://localhost:3000/horarioaulas/:id
*/
