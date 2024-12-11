import createConnection from '../../../../_config/mysql.config';
import { IRecordatorioRepository } from '../../Dominio/repository/IRecordatorioRepository';
import {Recordatorio} from '../../Dominio/models/recordatorio';

class MySQLRecordatorioRepository implements IRecordatorioRepository {
  async save(recordatorio: Recordatorio): Promise<void> {
    const connection = await createConnection();
    const query = `
      INSERT INTO recordatorios (id, tarea_id, fecha_recordatorio, enviado, creado_en)
      VALUES (?, ?, ?, ?, ?)
    `;

    const values = [
      recordatorio.id,
      recordatorio.tareaId,
      recordatorio.fechaRecordatorio,
      recordatorio.enviado,
      recordatorio.creadoEn
    ];

    try {
      await connection.execute(query, values);
    } catch (error) {
      console.error('Error al guardar el recordatorio en la base de datos:', error);
      throw error;
    } finally {
      await connection.end();
    }
  }
}

export { MySQLRecordatorioRepository };