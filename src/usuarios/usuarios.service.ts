import { Injectable } from '@nestjs/common';
import { Usuario } from './models/usuario.model';

@Injectable()
export class UsuariosService {
  private usuarios: Usuario[] = []; // Array para almacenar los usuarios en memoria

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
