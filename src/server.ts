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
