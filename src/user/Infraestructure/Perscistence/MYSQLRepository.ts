import createConnection from '../../../_config/mysql.config';
import { IUserRepository } from '../../Domain/Repository/IUserRepository';
import Usuario from '../../Domain/Entities/user';

class MySQLUserRepository implements IUserRepository {
  async save(user: Usuario): Promise<void> {
    const connection = await createConnection();
    const query = `
      INSERT INTO usuarios (id, nombre, email, contrasena, creado_en)
      VALUES (?, ?, ?, ?, ?)
    `;

    const values = [user.id, user.nombre, user.email, user.contrasena, user.creadoEn];

    try {
      await connection.execute(query, values);
    } catch (error) {
      console.error('Error al guardar el usuario en la base de datos:', error);
      throw error;
    } finally {
      await connection.end();
    }
  }
}

export { MySQLUserRepository };