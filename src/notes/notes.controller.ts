import { Controller, Post, Body, Param, Get, Logger } from '@nestjs/common';
import { notesService } from './notes.service';
@Controller('notes')
export class notesController {
  constructor(private readonly notesService: notesService) {}
  @Post()
  addnotes(
    @Body('title') prodTitle: string,
    @Body('content') prodcontent: string,
  ): any {
    const returnId = this.notesService.insertnote(prodTitle, prodcontent);
    return { id: returnId };
  }

  @Get()
  getAllnotes() {
    const notes = this.notesService.getnotes();
    return { notes };
  }

  @Get(':id')
  getnote(@Param('id') prodId: string) {
    Logger.log('sasas');
    return this.notesService.getsinglenote(prodId);
  }
}
