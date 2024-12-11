import { MySQLRecordatorioRepository } from './percsistence/MysqlRecordatoriosRepository';
import { SaveRecordatorio } from '../Application/use-case/Saverecordatorio';
import { CreateRecordatorioController } from './controllers/SaveRecordatorioController';

// Crear instancia del repositorio
const mysqlRecordatorioRepository = new MySQLRecordatorioRepository();

// Crear instancia del caso de uso
const saveRecordatorio = new SaveRecordatorio(mysqlRecordatorioRepository);

// Crear instancia del controlador
const createRecordatorioController = new CreateRecordatorioController(saveRecordatorio);

export {
    createRecordatorioController
};