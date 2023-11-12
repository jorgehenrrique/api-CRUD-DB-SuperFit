import createDBClient from '../db/connection';
import { ReportService } from '../services/report.service';

export async function relatorio(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const reportService = new ReportService(db);

  try {
    const report = await reportService.get();
    res.json(report);
  } catch (error: any) {
    res.status(500).json({
      error: 'Erro ao gerar relatório.',
      message: error.message,
    });
  } finally {
    await db.end();
  }
}
