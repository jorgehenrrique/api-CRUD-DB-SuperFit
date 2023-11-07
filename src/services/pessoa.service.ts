import { InterfaceCrud } from './interfaces';

type PessoaModel = {
  id?: string;
  nome: string;
  email: string;
  cgc: string;
  tipo_pessoa: string;
  tipo_cadastro: string;
  ativo: string;
};

export class PessoaService implements InterfaceCrud<PessoaModel> {
  db: any;

  constructor(db: any) {
    this.db = db;
  }

  async getAll(): Promise<PessoaModel[]> {
    const result = await this.db.query('SELECT * FROM pessoas');
    return result.rows as PessoaModel[];
  }

  async find(id: string): Promise<PessoaModel> {
    const result = await this.db.query('SELECT * FROM pessoas WHERE id=$1', [
      id,
    ]);
    return result.rows[0] as PessoaModel;
  }

  async create(payload: PessoaModel): Promise<PessoaModel> {
    const { nome, cgc, tipo_pessoa, email, tipo_cadastro, ativo } = payload;
    const query = `
    INSERT INTO pessoas (nome, cgc, tipo_pessoa, email, tipo_cadastro, ativo) 
    VALUES ($1, $2, $3, $4, $5, $6) Returning *;`;
    const values = [nome, cgc, tipo_pessoa, email, tipo_cadastro, ativo];
    const result = await this.db.query(query, values);
    return result.rows[0];
  }

  async update(id: string, payload: PessoaModel): Promise<PessoaModel> {
    const { nome, cgc, tipo_pessoa, email, tipo_cadastro, ativo } = payload;
    const values = [nome, cgc, tipo_pessoa, email, tipo_cadastro, ativo, id];
    const result = await this.db.query(
      `UPDATE pessoas
      SET nome=$1, cgc=$2, tipo_pessoa=$3, email=$4, tipo_cadastro=$5, ativo=$6
      WHERE id=$7 Returning *;`,
      values
    );
    return result.rows[0];
  }

  async delete(id: string): Promise<void> {
    const result = await this.db.query(
      'DELETE FROM pessoas WHERE id=$1 Returning *;',
      [id]
    );
    return result.rows[0];
  }
}
