import { Request, Response } from 'express';
import { SaveRecordatorio } from '../../Application/use-case/Saverecordatorio';
import { sendRecordatorioEmail } from '../Service/Email.Service';

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
      const { email, titulo } = await this.saveRecordatorio.saveRecordatorio(tareaId, new Date(fechaRecordatorio), enviado);
      await sendRecordatorioEmail(
        email,
        'Nuevo Recordatorio',
        `Tienes un nuevo recordatorio para la tarea "${titulo}" en la fecha: ${fechaRecordatorio}`
      );
      return res.status(201).json({ message: 'Recordatorio creado y correo enviado exitosamente' });
    } catch (error) {
      return res.status(500).json({ message: 'Error al crear el recordatorio', error });
    }
  }
}