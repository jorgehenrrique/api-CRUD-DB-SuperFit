import { InterfaceCrud } from './interfaces';

type MPModel = {
  plano_id: string;
  modalidade_id: string;
};

export class ModalidadePlanoService implements InterfaceCrud<MPModel> {
  db: any;

  constructor(db: any) {
    this.db = db;
  }

  async getAll(): Promise<MPModel[]> {
    const result = await this.db.query('SELECT * FROM modalidades_planos');
    return result.rows as MPModel[];
  }

  async find(ids: any): Promise<MPModel> {
    const planoId = ids.id;
    const modalidadeId = ids.id2;

    const result = await this.db.query(
      'SELECT * FROM modalidades_planos WHERE plano_id=$1 AND modalidade_id=$2',
      [planoId, modalidadeId]
    );
    return result.rows[0] as MPModel;
  }

  async create(payload: MPModel): Promise<MPModel> {
    const { plano_id, modalidade_id } = payload;
    const query = `INSERT INTO modalidades_planos (plano_id, modalidade_id)
          VALUES ($1, $2) Returning *;`;
    const values = [plano_id, modalidade_id];
    const result = await this.db.query(query, values);
    return result.rows[0];
  }

  async update(ids: any, payload: MPModel): Promise<MPModel> {
    const planoId = ids.id;
    const modalidadeId = ids.id2;
    console.log(planoId, modalidadeId);

    const { plano_id, modalidade_id } = payload;
    console.log(plano_id, modalidade_id);

    const values = [plano_id, modalidade_id, planoId, modalidadeId];
    const result = await this.db.query(
      `UPDATE modalidades_planos
      SET plano_id=$1, modalidade_id=$2
      WHERE plano_id=$3 AND modalidade_id=$4 Returning *;`,
      values
    );
    return result.rows[0];
  }

  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
