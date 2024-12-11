import {Recordatorio} from "../models/recordatorio";

export interface IRecordatorioRepository{
    getTareaAndUsuario(tareaId: string): { email: string; titulo: string; } | PromiseLike<{ email: string; titulo: string; }>;
    save(user: Recordatorio): Promise<void>;

}

