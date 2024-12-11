import { v4 as uuidv4 } from 'uuid';

export class Tarea {
    id: string; // UUID
    usuarioId: string; // UUID
    titulo: string;
    descripcion?: string;
    fechaVencimiento?: Date;
    completada: boolean;
    creadoEn: Date;
    actualizadoEn: Date;

    constructor(
        usuarioId: string,
        titulo: string,
        descripcion?: string,
        fechaVencimiento?: Date,
        completada: boolean = false,
        creadoEn: Date = new Date(),
        actualizadoEn: Date = new Date()
    ) {
        this.id = uuidv4();
        this.usuarioId = usuarioId;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fechaVencimiento = fechaVencimiento;
        this.completada = completada;
        this.creadoEn = creadoEn;
        this.actualizadoEn = actualizadoEn;
    }
}