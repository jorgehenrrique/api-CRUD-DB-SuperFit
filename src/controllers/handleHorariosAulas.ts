import createDBClient from '../db/connection';
import { HorarioAulaService } from '../services/horariosAulas.service';

export async function horariosAulasList(_: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const horarioAulaService = new HorarioAulaService(db);

  try {
    const horarioAulas = await horarioAulaService.getAll();
    res.json(horarioAulas);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      error: 'Erro ao buscar os horario_aulas.',
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

export async function horariosAulasListId(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const horarioAulaService = new HorarioAulaService(db);

  const { id } = req.params;

  try {
    const horarioAula = await horarioAulaService.find(id);
    if (horarioAula == null) {
      return res.status(404).json({ status: `Id não encontrado.` });
    }
    res.json(horarioAula);
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

export async function horariosAulasAdd(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const horarioAulaService = new HorarioAulaService(db);

  try {
    const horarioAula = await horarioAulaService.create(req.body);
    res.json(horarioAula);
  } catch (error: any) {
    res.status(500).json({
      error,
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

export async function horariosAulasUpdate(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const horarioAulaService = new HorarioAulaService(db);
  const { id } = req.params;

  try {
    const horarioAulaId = await horarioAulaService.find(id);
    const payload = {
      dia_semana: req.body.dia_semana || horarioAulaId.dia_semana,
      hora_inicio: req.body.hora_inicio || horarioAulaId.hora_inicio,
      hora_fim: req.body.hora_fim || horarioAulaId.hora_fim,
      modalidade_id: req.body.modalidade_id || horarioAulaId.modalidade_id,
      instrutor_id: req.body.instrutor_id || horarioAulaId.instrutor_id,
    };

    const horarioAula = await horarioAulaService.update(id, payload);
    if (horarioAula == null) {
      return res.status(404).json({ status: `Id não encontrado.` });
    }
    res.json(horarioAula);
  } catch (error: any) {
    res.status(500).json({
      error,
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

export async function horariosAulasDelete(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const horarioAulaService = new HorarioAulaService(db);

  try {
    const user = await horarioAulaService.delete(req.params.id);
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
