import { Request, Response } from 'express';
import { SaveUser } from '../../Application/use-case/createUser';

export class CreateUserController {
    private saveUser: SaveUser;

    constructor(saveUser: SaveUser) {
        this.saveUser = saveUser;
    }

    async handle(req: Request, res: Response): Promise<Response> {
        const { nombre, email, contrasena } = req.body;

        if (!nombre || !email || !contrasena) {
            return res.status(400).json({ message: 'Nombre, email y contraseña son requeridos' });
        }

        try {
            await this.saveUser.saveUser(nombre, email, contrasena);
            return res.status(201).json({ message: 'Usuario creado exitosamente' });
        } catch (error) {
            return res.status(500).json({ message: 'Error al crear el usuario', error });
        }
    }
}