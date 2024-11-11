import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosController } from './usuarios/usuarios.controller';
import { UsuariosService } from './usuarios/usuarios.service';
import { CancionesController } from './canciones/canciones.controller';
import { CancionesService } from './canciones/canciones.service';

@Module({
  imports: [],
  controllers: [AppController, UsuariosController, CancionesController],
  providers: [AppService, UsuariosService, CancionesService],
})
export class AppModule {}



