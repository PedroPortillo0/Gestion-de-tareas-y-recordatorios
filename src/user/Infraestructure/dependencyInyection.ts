import { MySQLUserRepository } from './Perscistence/MYSQLRepository';
import { SaveUser } from '../Application/use-case/createUser';
import { CreateUserController } from './Controller/CreateUserController';

// Crear instancia del repositorio
const mysqlUserRepository = new MySQLUserRepository();

// Crear instancia del caso de uso
const saveUser = new SaveUser(mysqlUserRepository);

// Crear instancia del controlador
const createUserController = new CreateUserController(saveUser);

export {
    createUserController
};