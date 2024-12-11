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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRecordatorioController = void 0;
class CreateRecordatorioController {
    constructor(saveRecordatorio) {
        this.saveRecordatorio = saveRecordatorio;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tareaId, fechaRecordatorio, enviado } = req.body;
            if (!tareaId || !fechaRecordatorio) {
                return res.status(400).json({ message: 'Tarea ID y fecha de recordatorio son requeridos' });
            }
            try {
                yield this.saveRecordatorio.saveRecordatorio(tareaId, new Date(fechaRecordatorio), enviado);
                return res.status(201).json({ message: 'Recordatorio creado exitosamente' });
            }
            catch (error) {
                return res.status(500).json({ message: 'Error al crear el recordatorio', error });
            }
        });
    }
}
exports.CreateRecordatorioController = CreateRecordatorioController;
