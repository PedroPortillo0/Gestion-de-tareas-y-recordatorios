import createConnection from '../../../../_config/mysql.config';
import { ITareaRepository } from '../../Dominio/repository/ITareasRepository';
import {Tarea} from '../../Dominio/models/Tarea';

class MySQLTareaRepository implements ITareaRepository {
  async save(tarea: Tarea): Promise<void> {
    const connection = await createConnection();
    const query = `
      INSERT INTO tareas (id, usuario_id, titulo, descripcion, fecha_vencimiento, completada, creado_en, actualizado_en)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      tarea.id,
      tarea.usuarioId,
      tarea.titulo,
      tarea.descripcion,
      tarea.fechaVencimiento,
      tarea.completada,
      tarea.creadoEn,
      tarea.actualizadoEn
    ];

    try {
      await connection.execute(query, values);
    } catch (error) {
      console.error('Error al guardar la tarea en la base de datos:', error);
      throw error;
    } finally {
      await connection.end();
    }
  }
}

export { MySQLTareaRepository };