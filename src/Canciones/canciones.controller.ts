import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { CancionesService } from './canciones.service';
import { Cancion } from './models/cancion.model';

@Controller('canciones')
export class CancionesController {
  constructor(private readonly cancionesService: CancionesService) {}

  // Crear una nueva canción
  @Post()
  agregarCancion(@Body() cancion: Cancion): Cancion {
    return this.cancionesService.agregarCancion(cancion);
  }

  // Obtener todas las canciones
  @Get()
  obtenerTodas(): Cancion[] {
    return this.cancionesService.obtenerTodas();
  }

  // Obtener canciones por nombre
  @Get('buscar/nombre')
  obtenerPorNombre(@Query('nombre') nombre: string): Cancion[] {
    return this.cancionesService.obtenerPorNombre(nombre);
  }

  // Obtener canciones por artista
  @Get('buscar/artista')
  obtenerPorArtista(@Query('artista') artista: string): Cancion[] {
    return this.cancionesService.obtenerPorArtista(artista);
  }

  // Actualizar una canción por su ID
  @Put(':id')
  actualizarCancion(@Param('id') id: number, @Body() cancionActualizada: Cancion): Cancion {
    return this.cancionesService.actualizarCancion(+id, cancionActualizada);
  }

  // Eliminar una canción por su ID
  @Delete(':id')
  borrarCancion(@Param('id') id: number): boolean {
    return this.cancionesService.borrarCancion(+id);
  }
}
