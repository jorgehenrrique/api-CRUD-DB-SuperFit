import express from 'express';
import * as pessoas from './controllers/handlePessoas';
import * as modalidades from './controllers/handleModalidades';
import * as planos from './controllers/handlePlanos';

import dotenv from 'dotenv';
import login from './controllers/handleLogin';
import loginRequired from './middlewares/loginRequired';
dotenv.config();

const app = express();
const port = process.env.HOST_PORT;

app.use(express.json());

// Inicia o sevidor
app.listen(port, () => {
  console.log('Server ok port: ' + port);
});

// CRUD - CREATE READ UPDATE DELETE

// Logar usuario
// POST http://localhost:3000/login
app.post('/login', login);

// GET: http://localhost:3000/pessoas
app.get('/pessoas', loginRequired, pessoas.pessoasList);

// GET: http://localhost:3000/pessoas/:id
app.get('/pessoas/:id', loginRequired, pessoas.pessoasListId);

// POST: http://localhost:3000/pessoas
app.post('/pessoas', loginRequired, pessoas.pessoasAdd);

// PUT: http://localhost:3000/pessoas/:id
app.put('/pessoas/:id', loginRequired, pessoas.pessoasUpdate);

// DELETE: http://localhost:3000/pessoas/:id
app.delete('/pessoas/:id', loginRequired, pessoas.pessoasDelete);

// ----------------------------------------------------------------

// GET: http://localhost:3000/modalidades
app.get('/modalidades', modalidades.modalidadesList);

// GET: http://localhost:3000/modalidades/:id
app.get('/modalidades/:id', modalidades.modalidadesListId);

// POST: http://localhost:3000/modalidades
app.post('/modalidades', modalidades.modalidadesAdd);

// PUT: http://localhost:3000/modalidades/:id
app.put('/modalidades/:id', modalidades.modalidadesUpdate);

// DELETE: http://localhost:3000/modalidades/:id
app.delete('/modalidades/:id', modalidades.modalidadesDelete);

// ----------------------------------------------------------------

// GET: http://localhost:3000/planos
app.get('/planos', planos.planosList);

// GET: http://localhost:3000/planos/:id
app.get('/planos/:id', planos.planosListId);

// POST: http://localhost:3000/planos
app.post('/planos/', planos.planosAdd);

// PUT: http://localhost:3000/planos/:id
app.put('/planos/:id', planos.planosUpdate);

// DELETE: http://localhost:3000/planos/:id
app.delete('/planos/:id', planos.planosDelete);

// ----------------------------------------------------------------
