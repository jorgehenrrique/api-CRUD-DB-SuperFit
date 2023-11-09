import jwt from 'jsonwebtoken';
import { PessoaService } from '../services/pessoa.service';
import createDBClient from '../db/connection';

const { TOKEN_SECRET } = process.env;

export default async function loginRequired(req: any, res: any, next: any) {
  const db = createDBClient();
  await db.connect();

  const pessoaService = new PessoaService(db);

  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      error: 'Token requirido',
    });
  }

  try {
    const data = jwt.verify(authorization, TOKEN_SECRET as string) as any;
    const { email, cgc, id } = data;

    const user = await pessoaService.find(id);

    if (
      user.email !== email &&
      user.cgc !== cgc &&
      user.tipo_cadastro !== 'I'
    ) {
      return res.status(401).json({
        error: 'Usuário inválido',
      });
    }

    return next();
  } catch (e) {
    return res.status(401).json({
      error: 'Token expirado ou inválido.',
    });
  } finally {
    await db.end();
  }
}
