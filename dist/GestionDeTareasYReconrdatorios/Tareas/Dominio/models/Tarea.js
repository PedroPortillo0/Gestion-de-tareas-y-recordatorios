"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = void 0;
const uuid_1 = require("uuid");
class Tarea {
    constructor(usuarioId, titulo, descripcion, fechaVencimiento, completada = false, creadoEn = new Date(), actualizadoEn = new Date()) {
        this.id = (0, uuid_1.v4)();
        this.usuarioId = usuarioId;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fechaVencimiento = fechaVencimiento;
        this.completada = completada;
        this.creadoEn = creadoEn;
        this.actualizadoEn = actualizadoEn;
    }
}
exports.Tarea = Tarea;
