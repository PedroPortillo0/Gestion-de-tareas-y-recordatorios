import Usuario from "../Entities/user";

export interface IUserRepository{
    save(user: Usuario): Promise<void>;

}

