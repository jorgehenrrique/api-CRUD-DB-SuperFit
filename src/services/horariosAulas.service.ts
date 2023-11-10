import { InterfaceCrud } from './interfaces';

type HorarioAulaModel = {
  id?: string;
  dia_semana: string;
  hora_inicio: string;
  hora_fim: string;
  modalidade_id: string;
  instrutor_id: string;
};

export class HorarioAulaService implements InterfaceCrud<HorarioAulaModel> {
  db: any;

  constructor(db: any) {
    this.db = db;
  }

  async getAll(): Promise<HorarioAulaModel[]> {
    const result = await this.db.query('SELECT * FROM horario_aulas');
    return result.rows;
  }

  async find(id: string): Promise<HorarioAulaModel> {
    const result = await this.db.query(
      'SELECT * FROM horario_aulas WHERE id=$1',
      [id]
    );
    return result.rows[0];
  }

  async create(payload: HorarioAulaModel): Promise<HorarioAulaModel> {
    const { dia_semana, hora_inicio, hora_fim, modalidade_id, instrutor_id } =
      payload;
    const query = `INSERT INTO horario_aulas (dia_semana, hora_inicio, hora_fim, modalidade_id, instrutor_id)
      VALUES ($1, $2, $3, $4, $5) Returning *;`;
    const values = [
      dia_semana,
      hora_inicio,
      hora_fim,
      modalidade_id,
      instrutor_id,
    ];
    const result = await this.db.query(query, values);

    return result.rows[0];
  }

  async update(
    id: string,
    payload: HorarioAulaModel
  ): Promise<HorarioAulaModel> {
    const { dia_semana, hora_inicio, hora_fim, modalidade_id, instrutor_id } =
      payload;
    const values = [
      dia_semana,
      hora_inicio,
      hora_fim,
      modalidade_id,
      instrutor_id,
      id,
    ];
    const query = `UPDATE horario_aulas
    SET dia_semana=$1, hora_inicio=$2, hora_fim=$3, modalidade_id=$4, instrutor_id=$5
    WHERE id=$6 Returning *;`;
    const result = await this.db.query(query, values);
    return result.rows[0];
  }

  async delete(id: string): Promise<void> {
    const result = await this.db.query(
      'DELETE FROM horario_aulas WHERE id=$1 Returning *;',
      [id]
    );
    return result.rows[0];
  }
}