import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './models/usuario.model';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  // Crear un nuevo usuario
  @Post()
  agregarUsuario(@Body() usuario: Usuario): Usuario {
    return this.usuariosService.agregarUsuario(usuario);
  }

  // Obtener un usuario por su ID
  @Get(':id')
  obtenerUsuarioPorId(@Param('id') id: number): Usuario {
    return this.usuariosService.obtenerUsuarioPorId(+id);
  }

  // Actualizar un usuario por su ID
  @Put(':id')
  actualizarUsuario(@Param('id') id: number, @Body() usuarioActualizado: Usuario): Usuario {
    return this.usuariosService.actualizarUsuario(+id, usuarioActualizado);
  }

  // Eliminar un usuario por su ID
  @Delete(':id')
  borrarUsuario(@Param('id') id: number): boolean {
    return this.usuariosService.borrarUsuario(+id);
  }
}
