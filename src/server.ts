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
import matriculasRoutes from './routes/matriculasRoutes';
import horarioaulasRoutes from './routes/horarioaulasRoutes';

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

app.use('/', loginRoutes);

app.use('/', loginRequired, relatorioRoutes);

app.use('/', loginRequired, pessoasRoutes);
app.use('/', loginRequired, modalidadesRoutes);
app.use('/', loginRequired, planosRoutes);
app.use('/', loginRequired, matriculasRoutes);
app.use('/', loginRequired, horarioaulasRoutes);

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
