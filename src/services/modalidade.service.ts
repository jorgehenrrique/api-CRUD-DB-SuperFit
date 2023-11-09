import { InterfaceCrud } from "./interfaces";

type ModalidadeModel = {
  id?: string;
  nome: string;
};

export class ModalidadeService implements InterfaceCrud<ModalidadeModel> {
  db: any;

  constructor(db: any) {
    this.db = db;
  }

  async getAll(): Promise<ModalidadeModel[]> {
    const result = await this.db.query("SELECT * FROM modalidades");
    return result.rows as ModalidadeModel[];
  }

  async find(id: string): Promise<ModalidadeModel> {
    const result = await this.db.query(
      "SELECT * FROM modalidades WHERE id=$1",
      [id]
    );
    return result.rows[0] as ModalidadeModel;
  }

  async create(payload: ModalidadeModel): Promise<ModalidadeModel> {
    const { nome } = payload;
    const query = `INSERT INTO modalidades (nome)
          VALUES ($1) Returning *;`;
    const values = [nome];
    const result = await this.db.query(query, values);
    return result.rows[0];
  }

  async update(id: string, payload: ModalidadeModel): Promise<ModalidadeModel> {
    const { nome } = payload;
    const values = [nome, id];
    const result = await this.db.query(
      `UPDATE modalidades
      SET nome=$1 WHERE id=$2 Returning *;`,
      values
    );
    return result.rows[0];
  }

  async delete(id: string): Promise<void> {
    const result = await this.db.query(
      "DELETE FROM modalidades WHERE id=$1 Returning *;",
      [id]
    );
    return result.rows[0];
  }
}
