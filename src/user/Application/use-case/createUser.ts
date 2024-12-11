import { IUserRepository } from '../../Domain/Repository/IUserRepository';
import Usuario from '../../Domain/Entities/user';

export class SaveUser {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async saveUser(nombre: string, email: string, contrasena: string): Promise<void> {
        const user = new Usuario(nombre, email, contrasena);
        await this.userRepository.save(user);
    }
}