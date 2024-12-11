import { IRecordatorioRepository } from '../../Dominio/repository/IRecordatorioRepository';
import {Recordatorio} from '../../Dominio/models/recordatorio';

export class SaveRecordatorio {
    private recordatorioRepository: IRecordatorioRepository;

    constructor(recordatorioRepository: IRecordatorioRepository) {
        this.recordatorioRepository = recordatorioRepository;
    }

    async saveRecordatorio(
        tareaId: string,
        fechaRecordatorio: Date,
        enviado: boolean = false
    ): Promise<void> {
        const recordatorio = new Recordatorio(tareaId, fechaRecordatorio, enviado);
        await this.recordatorioRepository.save(recordatorio);
    }
}