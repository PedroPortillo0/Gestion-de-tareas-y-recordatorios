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

  async getTareaAndUsuario(tareaId: string): Promise<{ email: string, titulo: string }> {
    const connection = await createConnection();
    const query = `
      SELECT u.email, t.titulo
      FROM tareas t
      JOIN usuarios u ON t.usuario_id = u.id
      WHERE t.id = ?
    `;

    try {
      const [rows]: any = await connection.execute(query, [tareaId]);
      if (rows.length > 0) {
        return rows[0];
      } else {
        throw new Error('Tarea no encontrada');
      }
    } catch (error) {
      console.error('Error al obtener la tarea y el usuario:', error);
      throw error;
    } finally {
      await connection.end();
    }
  }
}

export { MySQLRecordatorioRepository };