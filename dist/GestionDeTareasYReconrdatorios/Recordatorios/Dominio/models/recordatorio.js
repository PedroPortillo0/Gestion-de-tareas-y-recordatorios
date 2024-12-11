"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recordatorio = void 0;
const uuid_1 = require("uuid");
class Recordatorio {
    constructor(tareaId, fechaRecordatorio, enviado = false, creadoEn = new Date()) {
        this.id = (0, uuid_1.v4)();
        this.tareaId = tareaId;
        this.fechaRecordatorio = fechaRecordatorio;
        this.enviado = enviado;
        this.creadoEn = creadoEn;
    }
}
exports.Recordatorio = Recordatorio;
