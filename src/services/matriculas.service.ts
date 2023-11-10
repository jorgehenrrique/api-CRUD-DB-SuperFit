import { InterfaceCrud } from './interfaces';

type MatriculaModel = {
  id?: string;
  aluno_id: string;
  plano_id: string;
  dia_vencimento: string;
  valor_mensalidade: string;
  data_inicio: string;
  data_fim: string;
};

export class MatriculaService implements InterfaceCrud<MatriculaModel> {
  db: any;

  constructor(db: any) {
    this.db = db;
  }

  async getAll(): Promise<MatriculaModel[]> {
    const result = await this.db.query('SELECT * FROM matriculas');
    return result.rows;
  }

  async find(id: string): Promise<MatriculaModel> {
    const result = await this.db.query('SELECT * FROM matriculas WHERE id=$1', [
      id,
    ]);
    return result.rows[0];
  }

  async create(payload: MatriculaModel): Promise<MatriculaModel> {
    const {
      aluno_id,
      plano_id,
      dia_vencimento,
      valor_mensalidade,
      data_inicio,
      data_fim,
    } = payload;
    const query = `INSERT INTO matriculas (aluno_id,
      plano_id,
      dia_vencimento,
      valor_mensalidade,
      data_inicio,
      data_fim)
          VALUES ($1, $2, $3, $4, $5, $6) Returning *;`;
    const values = [
      aluno_id,
      plano_id,
      dia_vencimento,
      valor_mensalidade,
      data_inicio,
      data_fim,
    ];
    const result = await this.db.query(query, values);
    return result.rows[0];
  }

  async update(id: string, payload: MatriculaModel): Promise<MatriculaModel> {
    const {
      aluno_id,
      plano_id,
      dia_vencimento,
      valor_mensalidade,
      data_inicio,
      data_fim,
    } = payload;
    const query = `UPDATE matriculas
          SET aluno_id=$1, plano_id=$2, dia_vencimento=$3, valor_mensalidade=$4, data_inicio=$5, data_fim=$6
          WHERE id=$7 Returning *;`;
    const values = [
      aluno_id,
      plano_id,
      dia_vencimento,
      valor_mensalidade,
      data_inicio,
      data_fim,
      id,
    ];
    const result = await this.db.query(query, values);
    return result.rows[0];
  }

  async delete(id: string): Promise<void> {
    const result = await this.db.query(
      'DELETE FROM matriculas WHERE id=$1 Returning *;',
      [id]
    );
    return result.rows[0];
  }
}