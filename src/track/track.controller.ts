import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TrackService } from './track.service';
import { Track } from './track.interface';

@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get()
  getTracks(): Promise<Track[]> {
    return this.trackService.getTracks();
  }

  @Get(':id')
  getTrackById(@Param('id') id: string): Promise<Track> {
    return this.trackService.getTrackById(id);
  }

  @Post()
  createTrack(@Body() body: Track): Promise<Track> {
    return this.trackService.createTrack(body);
  }
}
