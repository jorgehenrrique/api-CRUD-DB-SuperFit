import { InterfaceCrud } from "./interfaces";

type PlanoModel = {
  id?: string;
  nome: string;
  descricao: string;
  preco: number;
};

export class PlanoService implements InterfaceCrud<PlanoModel> {
  db: any;

  constructor(db: any) {
    this.db = db;
  }

  async getAll(): Promise<PlanoModel[]> {
    const result = await this.db.query("SELECT * FROM planos");
    return result.rows as PlanoModel[];
  }

  async find(id: string): Promise<PlanoModel> {
    const result = await this.db.query("SELECT * FROM planos WHERE id=$1", [
      id,
    ]);
    return result.rows[0] as PlanoModel;
  }

  async create(payload: PlanoModel): Promise<PlanoModel> {
    const { nome, descricao, preco } = payload;
    const query = `INSERT INTO planos (nome, descricao, preco)
                  VALUES ($1, $2, $3) Returning *;`;
    const values = [nome, descricao, preco];
    const result = await this.db.query(query, values);
    return result.rows[0];
  }

  async update(id: string, payload: PlanoModel): Promise<PlanoModel> {
    const { nome, descricao, preco } = payload;
    const values = [nome, descricao, preco, id];
    const result = await this.db.query(
      `UPDATE planos
      SET nome=$1, descricao=$2, preco=$3
      WHERE id=$4 Returning *;`,
      values
    );
    return result.rows[0];
  }

  async delete(id: string): Promise<void> {
    const result = await this.db.query(
      "DELETE FROM planos WHERE id=$1 Returning *;",
      [id]
    );
    return result.rows[0];
  }
}
