"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLRecordatorioRepository = void 0;
const mysql_config_1 = __importDefault(require("../../../../_config/mysql.config"));
class MySQLRecordatorioRepository {
    save(recordatorio) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield (0, mysql_config_1.default)();
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
                yield connection.execute(query, values);
            }
            catch (error) {
                console.error('Error al guardar el recordatorio en la base de datos:', error);
                throw error;
            }
            finally {
                yield connection.end();
            }
        });
    }
}
exports.MySQLRecordatorioRepository = MySQLRecordatorioRepository;
