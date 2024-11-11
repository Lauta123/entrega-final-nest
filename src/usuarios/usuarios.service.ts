import { Injectable } from '@nestjs/common';
import { Usuario } from './models/usuario.model';

@Injectable()
export class UsuariosService {
  private usuarios = []; // Array para almacenar los usuarios en memoria
  constructor() {
    let usuario= {
      id: 2,
      nombre: "federico lestta",
      email: "fede@example.com",
      password: "fede123",
      fechaRegistro: "27/5"
    }
    this.usuarios.push(usuario);
  }
  // Crear un nuevo usuario
  agregarUsuario(usuario: Usuario) {
    usuario.id = this.usuarios.length + 1; // Asigna un ID único
    this.usuarios.push(usuario);
    return usuario;
  }

  // Obtener un usuario por su ID
  obtenerUsuarioPorId(id: number): Usuario {
    return this.usuarios.find((usuario) => usuario.id === id);
  }

  obtenerTodosLosUsuarios(): Usuario[] {
    return this.usuarios;
  }

  // Actualizar un usuario por su ID
  actualizarUsuario(id: number, usuarioActualizado: Usuario): Usuario {
    const index = this.usuarios.findIndex((usuario) => usuario.id === id);
    if (index !== -1) {
      this.usuarios[index] = usuarioActualizado;
      return usuarioActualizado;
    }
    return null;
  }


  // Eliminar un usuario por su ID
  borrarUsuario(id: number): boolean {
    const index = this.usuarios.findIndex((usuario) => usuario.id === id);
    if (index !== -1) {
      this.usuarios.splice(index, 1);
      return true;
    }
    return false;
  }
}
