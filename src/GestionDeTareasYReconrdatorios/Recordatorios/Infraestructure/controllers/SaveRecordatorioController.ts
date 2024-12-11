import { Request, Response } from 'express';
import { SaveRecordatorio } from '../../Application/use-case/Saverecordatorio';

export class CreateRecordatorioController {
    private saveRecordatorio: SaveRecordatorio;

    constructor(saveRecordatorio: SaveRecordatorio) {
        this.saveRecordatorio = saveRecordatorio;
    }

    async handle(req: Request, res: Response): Promise<Response> {
        const { tareaId, fechaRecordatorio, enviado } = req.body;

        if (!tareaId || !fechaRecordatorio) {
            return res.status(400).json({ message: 'Tarea ID y fecha de recordatorio son requeridos' });
        }

        try {
            await this.saveRecordatorio.saveRecordatorio(tareaId, new Date(fechaRecordatorio), enviado);
            return res.status(201).json({ message: 'Recordatorio creado exitosamente' });
        } catch (error) {
            return res.status(500).json({ message: 'Error al crear el recordatorio', error });
        }
    }
}