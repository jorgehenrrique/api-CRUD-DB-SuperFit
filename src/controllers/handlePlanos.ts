import createDBClient from '../db/connection';
import { PlanoService } from '../services/plano.service';

export async function planosList(_: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const planoService = new PlanoService(db);

  try {
    const planos = await planoService.getAll();
    res.json(planos);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      error: 'Erro ao buscar os planos',
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

export async function planosListId(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const planoService = new PlanoService(db);

  const { id } = req.params;

  try {
    const plano = await planoService.find(id);
    if (plano == null) {
      return res.status(404).json({ status: `Id não encontrado` });
    }
    res.json(plano);
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

export async function planosAdd(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const planoService = new PlanoService(db);

  try {
    const plano = await planoService.create(req.body);
    res.json(plano);
  } catch (error: any) {
    res.status(500).json({
      error,
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

export async function planosUpdate(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const planoService = new PlanoService(db);
  const { id } = req.params;

  try {
    const planoId = await planoService.find(id);
    const payload = {
      nome: req.body.nome || planoId.nome,
      descricao: req.body.descricao || planoId.descricao,
      preco: req.body.preco || planoId.preco,
    };

    const plano = await planoService.update(id, payload);
    if (plano == null) {
      return res.status(404).json({ status: `Id não encontrado` });
    }
    res.json(plano);
  } catch (error: any) {
    res.status(500).json({
      error,
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

export async function planosDelete(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const planoService = new PlanoService(db);

  try {
    const user = await planoService.delete(req.params.id);
    if (user == null) {
      return res.status(404).json({ status: `Id não existe` });
    }
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
