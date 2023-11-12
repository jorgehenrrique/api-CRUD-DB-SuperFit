import createDBClient from '../db/connection';
import { ModalidadeService } from '../services/modalidade.service';

export async function modalidadesList(_: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const modalidadeService = new ModalidadeService(db);

  try {
    const modalidades = await modalidadeService.getAll();
    res.json(modalidades);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      error: 'Erro ao buscar as modalidades',
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

export async function modalidadesListId(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const modalidadeService = new ModalidadeService(db);

  const { id } = req.params;

  try {
    const user = await modalidadeService.find(id);
    if (user == null) {
      return res.status(404).json({ status: `Id não encontrado` });
    }
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

export async function modalidadesAdd(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const modalidadeService = new ModalidadeService(db);

  try {
    const modalidade = await modalidadeService.create(req.body);
    res.json(modalidade);
  } catch (error: any) {
    res.status(500).json({
      error,
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

export async function modalidadesUpdate(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const modalidadeService = new ModalidadeService(db);
  const { id } = req.params;

  try {
    const modalidadeId = await modalidadeService.find(id);
    const payload = {
      nome: req.body.nome || modalidadeId.nome,
    };

    const modalidade = await modalidadeService.update(id, payload);
    if (modalidade == null) {
      return res.status(404).json({ status: `Id não encontrado` });
    }
    res.json(modalidade);
  } catch (error: any) {
    res.status(500).json({
      error,
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

export async function modalidadesDelete(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const modalidadeService = new ModalidadeService(db);

  try {
    const user = await modalidadeService.delete(req.params.id);
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
