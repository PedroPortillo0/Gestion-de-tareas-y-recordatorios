import { MySQLTareaRepository } from './percsistence/MysqlTareaRepository';
import { SaveTarea } from '../Application/use-case/SaveTarea';
import { CreateTareaController } from './controllers/SaveTareaController';

// Crear instancia del repositorio
const mysqlTareaRepository = new MySQLTareaRepository();

// Crear instancia del caso de uso
const saveTarea = new SaveTarea(mysqlTareaRepository);

// Crear instancia del controlador
const createTareaController = new CreateTareaController(saveTarea);

export {
    createTareaController
};