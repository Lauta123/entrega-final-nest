import { Injectable } from '@nestjs/common';
import { Cancion } from './models/cancion.model';

@Injectable()
export class CancionesService {
  private canciones: Cancion[] = []; // Array para almacenar las canciones en memoria

  // Crear una nueva canción
  agregarCancion(cancion: Cancion) {
    cancion.id = this.canciones.length + 1; // Asigna un ID único
    this.canciones.push(cancion);
    return cancion;
  }

  // Obtener todas las canciones
  obtenerTodas(): Cancion[] {
    return this.canciones;
  }

  // Obtener canciones por nombre
  obtenerPorNombre(nombre: string): Cancion[] {
    return this.canciones.filter((cancion) => cancion.titulo === nombre);
  }

  // Obtener canciones por artista
  obtenerPorArtista(artista: string): Cancion[] {
    return this.canciones.filter((cancion) => cancion.artista === artista);
  }

  // Actualizar una canción por su ID
  actualizarCancion(id: number, cancionActualizada: Cancion): Cancion {
    const index = this.canciones.findIndex((cancion) => cancion.id === id);
    if (index !== -1) {
      this.canciones[index] = cancionActualizada;
      return cancionActualizada;
    }
    return null;
  }

  // Eliminar una canción por su ID
  borrarCancion(id: number): boolean {
    const index = this.canciones.findIndex((cancion) => cancion.id === id);
    if (index !== -1) {
      this.canciones.splice(index, 1);
      return true;
    }
    return false;
  }
}
