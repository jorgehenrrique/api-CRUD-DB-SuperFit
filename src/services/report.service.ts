import { Report } from './interfaces';

type ReportModel = {
  id: string;
  plano: string;
  total_alunos: string;
  valor_total_recebido: string;
  total_inadimplente: string;
  total_adimplente: string;
};

export class ReportService implements Report<ReportModel> {
  db: any;

  constructor(db: any) {
    this.db = db;
  }

  async get(): Promise<ReportModel> {
    const result = await this.db.query(`
    SELECT
      p.nome plano,
      COUNT(m.aluno_id) total_alunos,
      SUM(m.valor_mensalidade) valor_total_recebido,
      COUNT(CASE WHEN pes.adimplente = false THEN 1 END) total_inadimplente,
      COUNT(CASE WHEN pes.adimplente = true THEN 1 END) total_adimplente
    FROM
      planos p
    LEFT JOIN
      matriculas m ON p.id = m.plano_id
    LEFT JOIN
      pessoas pes ON m.aluno_id = pes.id
    WHERE
      p.nome IN (SELECT DISTINCT nome FROM planos)
      AND m.data_inicio BETWEEN '2023-01-01' AND '2024-12-31'
    GROUP BY
      p.nome;
    `);
    return result.rows;
  }
}
