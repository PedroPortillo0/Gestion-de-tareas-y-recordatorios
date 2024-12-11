import { Request, Response } from 'express';
import { SaveTarea } from '../../Application/use-case/SaveTarea';

export class CreateTareaController {
    private saveTarea: SaveTarea;

    constructor(saveTarea: SaveTarea) {
        this.saveTarea = saveTarea;
    }

    async handle(req: Request, res: Response): Promise<Response> {
        const { usuarioId, titulo, descripcion, fechaVencimiento } = req.body;

        if (!usuarioId || !titulo) {
            return res.status(400).json({ message: 'Usuario ID y título son requeridos' });
        }

        try {
            await this.saveTarea.saveTarea(usuarioId, titulo, descripcion, fechaVencimiento);
            return res.status(201).json({ message: 'Tarea creada exitosamente' });
        } catch (error) {
            return res.status(500).json({ message: 'Error al crear la tarea', error });
        }
    }
}