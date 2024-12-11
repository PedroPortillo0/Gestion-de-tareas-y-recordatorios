"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTareaController = void 0;
const MysqlTareaRepository_1 = require("./percsistence/MysqlTareaRepository");
const SaveTarea_1 = require("../Application/use-case/SaveTarea");
const SaveTareaController_1 = require("./controllers/SaveTareaController");
// Crear instancia del repositorio
const mysqlTareaRepository = new MysqlTareaRepository_1.MySQLTareaRepository();
// Crear instancia del caso de uso
const saveTarea = new SaveTarea_1.SaveTarea(mysqlTareaRepository);
// Crear instancia del controlador
const createTareaController = new SaveTareaController_1.CreateTareaController(saveTarea);
exports.createTareaController = createTareaController;
