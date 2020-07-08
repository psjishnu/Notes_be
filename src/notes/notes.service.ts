import { Injectable, NotFoundException } from '@nestjs/common';
import { note } from './notes.model';
@Injectable()
export class notesService {
  private notes: note[] = [];

  insertnote(title: string, content: string) {
    const prodId = new Date().toString();
    const newnote = new note(prodId, title, content);
    this.notes.push(newnote);
    return prodId;
  }

  getnotes() {
    return [...this.notes];
  }

  removeNotes(prodId) {
    const note = this.notes;
    const newnote = [];
    for (let i = 0; i < note.length; i++) {
      if (note[i] !== null) {
        if (note[i].id !== prodId) {
          newnote.push(note[i]);
        }
        this.notes = newnote;
      }
    }
    return 1;
  }

  getsinglenote(noteId: string) {
    const note = this.notes.find((prod) => prod.title == noteId);
    if (!note) {
      throw new NotFoundException('Not found');
    }
    return { ...note };
  }
}
