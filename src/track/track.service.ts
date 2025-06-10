/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { Track } from './track.interface';

const BASE_URL = 'http://localhost:3030/tracks';

@Injectable()
export class TrackService {
  async getTrackById(id: string): Promise<Track> {
    const res = await fetch(`${BASE_URL}/${id}`);
    const parsed = await res.json();
    return parsed;
  }
  async getTracks(): Promise<Track[]> {
    const res = await fetch(BASE_URL);
    const parsed = await res.json();
    return parsed;
  }

  async createTrack(track: Track): Promise<Track> {
    const idn = await this.setId();
    const newTrack: Track = {
      id: idn,
      title: track.title,
      duration: track.duration,
      artist: track.artist,
    };
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTrack),
    });
    const parsed = await res.json();
    return parsed;
  }

  private async setId(): Promise<number> {
    const tracks = await this.getTracks();
    const id = tracks[tracks.length - 1].id + 1;
    return id;
  }
}
