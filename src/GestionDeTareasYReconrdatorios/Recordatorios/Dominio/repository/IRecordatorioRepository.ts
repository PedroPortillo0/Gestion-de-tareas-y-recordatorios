import {Recordatorio} from "../models/recordatorio";

export interface IRecordatorioRepository{
    save(user: Recordatorio): Promise<void>;

}

