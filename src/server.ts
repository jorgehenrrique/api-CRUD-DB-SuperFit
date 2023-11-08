import express from 'express';
import * as pessoas from './controllers/handlePessoas';

import dotenv from 'dotenv';
import login from './controllers/handleLogin';
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
app.get('/pessoas', pessoas.pessoasList);

// GET: http://localhost:3000/pessoas/:id
app.get('/pessoas/:id', pessoas.pessoasListId);

// POST: http://localhost:3000/pessoas
app.post('/pessoas', pessoas.pessoasAdd);

// PUT: http://localhost:3000/pessoas/:id
app.put('/pessoas/:id', pessoas.pessoasUpdate);

// DELETE: http://localhost:3000/pessoas/:id
app.delete('/pessoas/:id', pessoas.pessoasDelete);
