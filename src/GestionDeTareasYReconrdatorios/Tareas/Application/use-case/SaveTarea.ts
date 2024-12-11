import { ITareaRepository } from '../../Dominio/repository/ITareasRepository';
import {Tarea} from '../../Dominio/models/Tarea';

export class SaveTarea {
    private tareaRepository: ITareaRepository;

    constructor(tareaRepository: ITareaRepository) {
        this.tareaRepository = tareaRepository;
    }

    async saveTarea(
        usuarioId: string,
        titulo: string,
        descripcion?: string,
        fechaVencimiento?: Date
    ): Promise<void> {
        const tarea = new Tarea(usuarioId, titulo, descripcion, fechaVencimiento);
        await this.tareaRepository.save(tarea);
    }
}