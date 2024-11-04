import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios/usuarios.controller';
import { UsuariosService } from './usuarios/usuarios.service';
import { CancionesController } from './canciones/canciones.controller';
import { CancionesService } from './canciones/canciones.service';

@Module({
  imports: [],
  controllers: [UsuariosController, CancionesController],
  providers: [UsuariosService, CancionesService],
})
export class AppModule {}
