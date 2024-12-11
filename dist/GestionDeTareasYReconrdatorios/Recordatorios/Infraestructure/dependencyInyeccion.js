"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRecordatorioController = void 0;
const MysqlRecordatoriosRepository_1 = require("./percsistence/MysqlRecordatoriosRepository");
const Saverecordatorio_1 = require("../Application/use-case/Saverecordatorio");
const SaveRecordatorioController_1 = require("./controllers/SaveRecordatorioController");
// Crear instancia del repositorio
const mysqlRecordatorioRepository = new MysqlRecordatoriosRepository_1.MySQLRecordatorioRepository();
// Crear instancia del caso de uso
const saveRecordatorio = new Saverecordatorio_1.SaveRecordatorio(mysqlRecordatorioRepository);
// Crear instancia del controlador
const createRecordatorioController = new SaveRecordatorioController_1.CreateRecordatorioController(saveRecordatorio);
exports.createRecordatorioController = createRecordatorioController;
