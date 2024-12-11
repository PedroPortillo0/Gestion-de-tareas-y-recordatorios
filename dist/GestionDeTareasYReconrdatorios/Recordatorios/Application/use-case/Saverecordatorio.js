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
exports.SaveRecordatorio = void 0;
const recordatorio_1 = require("../../Dominio/models/recordatorio");
class SaveRecordatorio {
    constructor(recordatorioRepository) {
        this.recordatorioRepository = recordatorioRepository;
    }
    saveRecordatorio(tareaId_1, fechaRecordatorio_1) {
        return __awaiter(this, arguments, void 0, function* (tareaId, fechaRecordatorio, enviado = false) {
            const recordatorio = new recordatorio_1.Recordatorio(tareaId, fechaRecordatorio, enviado);
            yield this.recordatorioRepository.save(recordatorio);
        });
    }
}
exports.SaveRecordatorio = SaveRecordatorio;
