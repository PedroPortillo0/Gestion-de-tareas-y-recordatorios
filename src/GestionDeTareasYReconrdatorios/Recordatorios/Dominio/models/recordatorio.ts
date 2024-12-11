import { v4 as uuidv4 } from 'uuid';

export class Recordatorio {
    id: string; // UUID
    tareaId: string; // UUID
    fechaRecordatorio: Date;
    enviado: boolean;
    creadoEn: Date;

    constructor(
        tareaId: string,
        fechaRecordatorio: Date,
        enviado: boolean = false,
        creadoEn: Date = new Date()
    ) {
        this.id = uuidv4();
        this.tareaId = tareaId;
        this.fechaRecordatorio = fechaRecordatorio;
        this.enviado = enviado;
        this.creadoEn = creadoEn;
    }
}