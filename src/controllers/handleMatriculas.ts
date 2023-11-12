import createDBClient from '../db/connection';
import { MatriculaService } from '../services/matriculas.service';

export async function matriculasList(_: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const matriculaService = new MatriculaService(db);

  try {
    const matriculas = await matriculaService.getAll();
    res.json(matriculas);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      error: 'Erro ao buscar as matriculas.',
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

export async function matriculasListId(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const matriculaService = new MatriculaService(db);

  const { id } = req.params;

  try {
    const matricula = await matriculaService.find(id);
    res.json(matricula);
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

export async function matriculasAdd(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const matriculaService = new MatriculaService(db);

  try {
    const matricula = await matriculaService.create(req.body);
    res.json(matricula);
  } catch (error: any) {
    res.status(500).json({
      error,
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

export async function matriculasUpdate(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const matriculaService = new MatriculaService(db);
  const { id } = req.params;

  try {
    const matriculaId = await matriculaService.find(id);
    const payload = {
      aluno_id: req.body.aluno_id || matriculaId.aluno_id,
      plano_id: req.body.plano_id || matriculaId.plano_id,
      dia_vencimento: req.body.dia_vencimento || matriculaId.dia_vencimento,
      valor_mensalidade:
        req.body.valor_mensalidade || matriculaId.valor_mensalidade,
      data_inicio: req.body.data_inicio || matriculaId.data_inicio,
      data_fim: req.body.data_fim || matriculaId.data_fim,
    };

    const matricula = await matriculaService.update(id, payload);
    res.json(matricula);
  } catch (error: any) {
    res.status(500).json({
      error,
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

export async function matriculasDelete(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const matriculaService = new MatriculaService(db);

  try {
    const user = await matriculaService.delete(req.params.id);
    if (user == null) {
      return res.status(404).json({ status: `Id não existe.` });
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
