import{Tarea} from '../models/Tarea';

export interface ITareaRepository{
    save(user: Tarea): Promise<void>;

}

