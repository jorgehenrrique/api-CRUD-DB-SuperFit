import express from 'express';

import loginRoutes from './routes/loginRoutes';
import relatorioRoutes from './routes/relatorioRoutes';
import pessoasRoutes from './routes/pessoasRoutes';
import modalidadesRoutes from './routes/modalidadesRoutes';
import planosRoutes from './routes/planosRoutes';
import matriculasRoutes from './routes/matriculasRoutes';
import horarioaulasRoutes from './routes/horarioaulasRoutes';
import modalidadesplanosRoutes from './routes/modalidadesplanosRoutes';

import dotenv from 'dotenv';
import loginRequired from './middlewares/loginRequired';
dotenv.config();

const app = express();
const { HOST_PORT } = process.env;

app.use(express.json());

app.listen(HOST_PORT, () => {
  console.log('Server ok port: ' + HOST_PORT);
});

app.use('/', loginRoutes);

app.use('/pessoas', pessoasRoutes);
app.use('/modalidades', modalidadesRoutes);
app.use('/planos', planosRoutes);
app.use('/', matriculasRoutes);
app.use('/', horarioaulasRoutes);
app.use('/', modalidadesplanosRoutes);

app.use('/', loginRequired, relatorioRoutes);

// Resposta padrão para quaisquer outras requisições:
app.use((_: any, res: any) => {
  res.status(404).send({ message: 'Link inexistente!' });
});
