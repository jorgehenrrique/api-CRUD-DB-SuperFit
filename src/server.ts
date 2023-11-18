import express from 'express';
// import * as pessoas from './controllers/handlePessoas';
// import * as modalidades from './controllers/handleModalidades';
// import * as planos from './controllers/handlePlanos';
import * as matriculas from './controllers/handleMatriculas';
import * as horariosAulas from './controllers/handleHorariosAulas';
import * as modalidadesPlanos from './controllers/handleModalidadesPlanos';
// import { displayReport } from './controllers/handleReport';

import loginRoutes from './routes/loginRoutes';
import relatorioRoutes from './routes/relatorioRoutes';
import pessoasRoutes from './routes/pessoasRoutes';
import modalidadesRoutes from './routes/modalidadesRoutes';
import planosRoutes from './routes/planosRoutes';

import dotenv from 'dotenv';
// import login from './controllers/handleLogin';
import loginRequired from './middlewares/loginRequired';
dotenv.config();

const app = express();
const { HOST_PORT } = process.env;

app.use(express.json());

app.listen(HOST_PORT, () => {
  console.log('Server ok port: ' + HOST_PORT);
});

// POST http://localhost:3000/login
app.use('/', loginRoutes);

// GET http://localhost:3000/relatorio
app.use('/', loginRequired, relatorioRoutes);

app.use('/', loginRequired, pessoasRoutes);
app.use('/', loginRequired, modalidadesRoutes);
app.use('/', loginRequired, planosRoutes);

// ----------------------------------------------------------------

// // GET: http://localhost:3000/planos
// app.get('/planos', loginRequired, planos.planosList);

// // GET: http://localhost:3000/planos/:id
// app.get('/planos/:id', loginRequired, planos.planosListId);

// // POST: http://localhost:3000/planos
// app.post('/planos/', loginRequired, planos.planosAdd);

// // PUT: http://localhost:3000/planos/:id
// app.put('/planos/:id', loginRequired, planos.planosUpdate);

// // DELETE: http://localhost:3000/planos/:id
// app.delete('/planos/:id', loginRequired, planos.planosDelete);

// ----------------------------------------------------------------

// GET: http://localhost:3000/matriculas
app.get('/matriculas', loginRequired, matriculas.matriculasList);

// GET: http://localhost:3000/matriculas/:id
app.get('/matriculas/:id', loginRequired, matriculas.matriculasListId);

// POST: http://localhost:3000/matriculas
app.post('/matriculas/', loginRequired, matriculas.matriculasAdd);

// PUT: http://localhost:3000/matriculas/:id
app.put('/matriculas/:id', loginRequired, matriculas.matriculasUpdate);

// DELETE: http://localhost:3000/matriculas/:id
app.delete('/matriculas/:id', loginRequired, matriculas.matriculasDelete);

// ----------------------------------------------------------------

// GET: http://localhost:3000/horarioaulas
app.get('/horarioaulas', loginRequired, horariosAulas.horariosAulasList);

// GET: http://localhost:3000/horarioaulas/:id
app.get('/horarioaulas/:id', loginRequired, horariosAulas.horariosAulasListId);

// POST: http://localhost:3000/horarioaulas
app.post('/horarioaulas/', loginRequired, horariosAulas.horariosAulasAdd);

// PUT: http://localhost:3000/horarioaulas/:id
app.put('/horarioaulas/:id', loginRequired, horariosAulas.horariosAulasUpdate);

// DELETE: http://localhost:3000/horarioaulas/:id
app.delete(
  '/horarioaulas/:id',
  loginRequired,
  horariosAulas.horariosAulasDelete
);

// ----------------------------------------------------------------

// GET: http://localhost:3000/modalidadesplanos
app.get(
  '/modalidadesplanos',
  loginRequired,
  modalidadesPlanos.modalidadesPlanosList
);

// GET: http://localhost:3000/modalidadesplanos/:id/:id2
app.get(
  '/modalidadesplanos/:id/:id2',
  loginRequired,
  modalidadesPlanos.modalidadesPlanosListId
);

// POST: http://localhost:3000/modalidadesplanos
app.post(
  '/modalidadesplanos/',
  loginRequired,
  modalidadesPlanos.modalidadesPlanosAdd
);

// PUT: http://localhost:3000/modalidadesplanos/:id/:id2
app.put(
  '/modalidadesplanos/:id/:id2',
  loginRequired,
  modalidadesPlanos.modalidadesplanosUpdate
);

// DELETE: http://localhost:3000/modalidadesplanos/:id/:id2
app.delete(
  '/modalidadesplanos/:id/:id2',
  loginRequired,
  modalidadesPlanos.modalidadesplanosDelete
);

// ----------------------------------------------------------------

// Resposta padrão para quaisquer outras requisições:
app.use((_: any, res: any) => {
  res.status(404).send({ message: 'Link inexistente!' });
});
