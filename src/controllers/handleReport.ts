import createDBClient from '../db/connection';
import { ReportService } from '../services/report.service';

export async function displayReport(_: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const reportService = new ReportService(db);

  try {
    const report = await reportService.get();
    if (report == null) {
      return res
        .status(404)
        .json({ status: `Dados insuficientes para gerar relatório.` });
    }
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
