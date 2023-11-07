import createDBClient from '../db/connection';
import { PessoaService } from '../services/pessoa.service';

// Lista pessoas
export async function pessoasList(_: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const pessoaService = new PessoaService(db);

  try {
    const users = await pessoaService.getAll();
    res.json(users);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      error: 'Erro ao buscar as pessoas',
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

// Lista pessoa por id
export async function pessoasListId(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const pessoaService = new PessoaService(db);

  const { id } = req.params;

  try {
    const user = await pessoaService.find(id);
    res.json(user);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      error: `Erro ao buscar o id: ${id}`,
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

// Adiciona pessoas
export async function pessoasAdd(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const pessoaService = new PessoaService(db);

  try {
    const user = await pessoaService.create(req.body);
    res.json(user);
  } catch (error: any) {
    res.status(500).json({
      error,
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

// Atualizar pessoas
export async function pessoasUpdate(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const pessoaService = new PessoaService(db);
  const { id } = req.params;

  try {
    const userId = await pessoaService.find(id);
    const payload: {
      nome: string;
      cgc: string;
      tipo_pessoa: string;
      email: string;
      tipo_cadastro: string;
      ativo: string;
    } = {
      nome: req.body.nome || userId.nome,
      cgc: req.body.cgc || userId.cgc,
      tipo_pessoa: req.body.tipo_pessoa || userId.tipo_pessoa,
      email: req.body.email || userId.email,
      tipo_cadastro: req.body.tipo_cadastro || userId.tipo_cadastro,
      ativo: req.body.ativo || userId.ativo,
    };

    const user = await pessoaService.update(id, payload);
    res.json(user);
  } catch (error: any) {
    res.status(500).json({
      error,
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

// Deleta pessoa
export async function pessoasDelete(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const pessoaService = new PessoaService(db);

  try {
    const user = await pessoaService.delete(req.params.id);
    res.json(user);
  } catch (error: any) {
    res.status(500).json({
      error,
      message: error.message,
    });
  } finally {
    await db.end();
  }
}
