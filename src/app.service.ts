/* aca va la logica de negocio de la aplicacion */
import { Injectable } from '@nestjs/common';

/*export interface iTrack {
  id: number;
  title: string;
  duration: number;
  artist: string;
}

export const tracks: iTrack[] = [
  {
    id: 4,
    title: 'Stairway to Heaven',
    duration: 482,
    artist: 'Led Zeppelin',
  },
  {
    id: 5,
    title: 'Bohemian Rhapsody',
    duration: 354,
    artist: 'Queen',
  },
  {
    id: 6,
    title: 'Hotel California',
    duration: 391,
    artist: 'Eagles',
  },
  {
    id: 7,
    title: 'Sweet Child O Mine',
    duration: 356,
    artist: 'Guns N Roses',
  },
  {
    id: 8,
    title: 'Back in Black',
    duration: 255,
    artist: 'AC/DC',
  },
  {
    id: 9,
    title: 'Smells Like Teen Spirit',
    duration: 301,
    artist: 'Nirvana',
  },
  {
    id: 10,
    title: 'Imagine',
    duration: 183,
    artist: 'John Lennon',
  },
];*/

@Injectable()
export class AppService {
  getTracks(): iTrack[] {
    return tracks;
  }
}
