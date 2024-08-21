import { Component, Input, OnInit } from '@angular/core';
import { artisansModele } from '../modele/artisansModele';

@Component({
  selector: 'app-artisans-page',
  templateUrl: './artisans-page.component.html',
  styleUrl: './artisans-page.component.scss'
})
export class ArtisansPageComponent implements OnInit{
    @Input() artisan!: artisansModele;
    noteButtonText!: string;
    userHasNote!: boolean;

    ngOnInit(): void {
    this.noteButtonText = "Notez",
    this.userHasNote = false
    }

    onNote() {
      if (this.userHasNote) {
        this.unNote();
      }else {
        this.Note();
      }      
    }
    unNote(){
      this.artisan.removeNote;
      this.noteButtonText = "Notez";
      this.userHasNote = false
    }
    Note(){
      this.artisan.addNote;
      this.noteButtonText = "Dénotez";
      this.userHasNote = true
    }
}
