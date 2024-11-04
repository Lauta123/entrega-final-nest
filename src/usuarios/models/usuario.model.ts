export class Usuario {
    id: number; // Un identificador único para cada usuario
    nombre: string; // Nombre del usuario
    email: string; // Correo electrónico del usuario
    password: string; // Contraseña del usuario (idealmente se almacenaría encriptada)
    fechaRegistro: Date; // Fecha en que el usuario se registró en la aplicación
  
    constructor(id: number, nombre: string, email: string, password: string, fechaRegistro: Date) {
      this.id = id;
      this.nombre = nombre;
      this.email = email;
      this.password = password;
      this.fechaRegistro = fechaRegistro;
    }
  }
  