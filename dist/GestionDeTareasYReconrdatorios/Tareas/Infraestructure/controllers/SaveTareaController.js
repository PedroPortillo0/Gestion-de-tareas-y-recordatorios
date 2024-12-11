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
exports.CreateTareaController = void 0;
class CreateTareaController {
    constructor(saveTarea) {
        this.saveTarea = saveTarea;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usuarioId, titulo, descripcion, fechaVencimiento } = req.body;
            if (!usuarioId || !titulo) {
                return res.status(400).json({ message: 'Usuario ID y título son requeridos' });
            }
            try {
                yield this.saveTarea.saveTarea(usuarioId, titulo, descripcion, fechaVencimiento);
                return res.status(201).json({ message: 'Tarea creada exitosamente' });
            }
            catch (error) {
                return res.status(500).json({ message: 'Error al crear la tarea', error });
            }
        });
    }
}
exports.CreateTareaController = CreateTareaController;
