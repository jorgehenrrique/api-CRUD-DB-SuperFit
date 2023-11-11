import createDBClient from '../db/connection';
import { ModalidadePlanoService } from '../services/modalidadePlano.service';

export async function modalidadesPlanosList(_: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const modalidadePlanoService = new ModalidadePlanoService(db);

  try {
    const modalidadesPlanos = await modalidadePlanoService.getAll();
    res.json(modalidadesPlanos);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      error: 'Erro ao buscar as modalidades_planos',
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

export async function modalidadesPlanosListId(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const modalidadePlanoService = new ModalidadePlanoService(db);

  try {
    const modalidadePlano = await modalidadePlanoService.find(req.params);
    if (!modalidadePlano) {
      return res.status(404).json({ status: `Par de ids não encontrado` });
    }
    res.json(modalidadePlano);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      error: `Erro ao buscar os ids`,
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

export async function modalidadesPlanosAdd(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const modalidadePlanoService = new ModalidadePlanoService(db);

  try {
    const modalidadePlano = await modalidadePlanoService.create(req.body);
    res.json(modalidadePlano);
  } catch (error: any) {
    res.status(500).json({
      error,
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

export async function modalidadesplanosUpdate(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const modalidadePlanoService = new ModalidadePlanoService(db);
  // const { id } = req.params;

  try {
    // const modalidadePlanoId = await modalidadePlanoService.find(req.params);
    // const payload = {
    //   plano_id: req.body.plano_id || modalidadePlanoId.plano_id,
    //   modalidade_id: req.body.plano_id || modalidadePlanoId.plano_id,
    // };

    const modalidadePlano = await modalidadePlanoService.update(
      req.params,
      req.body
    );
    if (!modalidadePlano) {
      return res.status(404).json({ status: `Par de ids não encontrado` });
    }
    res.json(modalidadePlano);
  } catch (error: any) {
    res.status(500).json({
      error,
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

export async function modalidadesplanosDelete(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const modalidadePlanoService = new ModalidadePlanoService(db);

  try {
    const user = await modalidadePlanoService.delete(req.params.id);
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
