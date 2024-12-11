"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Usuario {
    constructor(nombre, email, contrasena) {
        this.id = (0, uuid_1.v4)();
        this.nombre = nombre;
        this.email = email;
        this.contrasena = contrasena;
        this.creadoEn = new Date();
    }
}
exports.default = Usuario;
