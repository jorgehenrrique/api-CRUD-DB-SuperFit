import express from 'express';
import * as horarioaulas from '../controllers/handleHorariosAulas';
import loginRequired from '../middlewares/loginRequired';

const router = express.Router();

router.get('/horarioaulas', horarioaulas.horariosAulasList);
router.get('/horarioaulas/:id', horarioaulas.horariosAulasListId);
router.post('/horarioaulas', horarioaulas.horariosAulasAdd);
router.put('/horarioaulas/:id', horarioaulas.horariosAulasUpdate);
router.delete('/horarioaulas/:id', horarioaulas.horariosAulasDelete);

export default router;

/*
// GET: http://localhost:3000/horarioaulas
// GET: http://localhost:3000/horarioaulas/:id
// POST: http://localhost:3000/horarioaulas
// PUT: http://localhost:3000/horarioaulas/:id
// DELETE: http://localhost:3000/horarioaulas/:id
*/
