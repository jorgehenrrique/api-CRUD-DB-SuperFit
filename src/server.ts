import express from 'express';
import * as pessoas from './controllers/handlePessoas';

import dotenv from 'dotenv';
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
// app.post('/login', loginUsers);

// GET: http://localhost:3000/pessoas
app.get('/pessoas', pessoas.pessoasList);

// GET: http://localhost:3000/pessoas/:id
app.get('/pessoas/:id', pessoas.pessoasListId);

// CREATE
// POST: http://localhost:3000/pessoas
app.post('/pessoas', pessoas.pessoasAdd);

// UPDATE
// PUT: http://localhost:3000/pessoas/:id
app.put('/pessoas/:id', pessoas.pessoasUpdate);

// DELETE
// DELETE: http://localhost:3000/pessoas/:id
app.delete('/pessoas/:id', pessoas.pessoasDelete);
