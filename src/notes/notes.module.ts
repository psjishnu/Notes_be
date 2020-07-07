import { Module } from '@nestjs/common';
import { notesController } from './notes.controller';
import { notesService } from './notes.service';

@Module({
  controllers: [notesController],
  providers: [notesService],
})
export class notesModule {}
