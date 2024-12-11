"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = void 0;
const MYSQLRepository_1 = require("./Perscistence/MYSQLRepository");
const createUser_1 = require("../Application/use-case/createUser");
const CreateUserController_1 = require("./Controller/CreateUserController");
// Crear instancia del repositorio
const mysqlUserRepository = new MYSQLRepository_1.MySQLUserRepository();
// Crear instancia del caso de uso
const saveUser = new createUser_1.SaveUser(mysqlUserRepository);
// Crear instancia del controlador
const createUserController = new CreateUserController_1.CreateUserController(saveUser);
exports.createUserController = createUserController;
