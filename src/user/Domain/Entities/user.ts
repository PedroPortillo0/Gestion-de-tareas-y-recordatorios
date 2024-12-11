import { v4 as uuidv4 } from 'uuid';

class Usuario {
  id: string;
  nombre: string;
  email: string;
  contrasena: string;
  creadoEn: Date;

  constructor(nombre: string, email: string, contrasena: string) {
    this.id = uuidv4();
    this.nombre = nombre;
    this.email = email;
    this.contrasena = contrasena;
    this.creadoEn = new Date();
  }
}

export default Usuario;