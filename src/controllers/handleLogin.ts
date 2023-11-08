import jwt from 'jsonwebtoken';
import createDBClient from '../db/connection';
import { PessoaService } from '../services/pessoa.service';

const { TOKEN_SECRET } = process.env;

export default async function login(req: any, res: any) {
  const db = createDBClient();
  await db.connect();

  const { email, cgc } = req.body;

  const pessoaService = new PessoaService(db);

  try {
    const users = await pessoaService.getAll();
    const currentUser = users.find(
      (u) => u.email === email && u.cgc === cgc && u.tipo_pessoa === 'J'
    );

    if (!currentUser)
      return res.status(401).json({
        error: 'Email ou cgc inválidos.',
      });

    if (currentUser?.tipo_cadastro !== 'I') {
      return res.status(403).json({
        error: 'Usuario deve ser um instrutor!',
      });
    }

    // console.log(currentUser);
    if (currentUser) {
      const token = jwt.sign(currentUser, TOKEN_SECRET as string, {
        expiresIn: '24h',
      });
      console.log('Usuario logado com sucesso');
      return res.json({ message: 'Usuario logado com sucesso!', token });
    }
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      error: 'Erro ao fazer login',
      message: error.message,
    });
  } finally {
    await db.end();
  }
}
