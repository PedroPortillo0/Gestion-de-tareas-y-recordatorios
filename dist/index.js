"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./user/Infraestructure/Routes/userRoutes"));
const TareaRoutes_1 = __importDefault(require("./GestionDeTareasYReconrdatorios/Tareas/Infraestructure/routes/TareaRoutes"));
const RecordatorioRoutes_1 = __importDefault(require("./GestionDeTareasYReconrdatorios/Recordatorios/Infraestructure/routes/RecordatorioRoutes"));
const mysql_config_1 = __importDefault(require("./_config/mysql.config"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use('/api/v1/users', userRoutes_1.default);
app.use('/api/v1/tareas', TareaRoutes_1.default);
app.use('/api/v1/recordatorios', RecordatorioRoutes_1.default);
// Verificar la conexión a la base de datos
(0, mysql_config_1.default)()
    .then(() => {
    console.log('Conexión a la base de datos establecida exitosamente');
})
    .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
});
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
