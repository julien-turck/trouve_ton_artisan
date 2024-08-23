import { Component, OnInit } from '@angular/core';
import { artisansModele } from '../modele/artisansModele';
import { ArtisansService } from '../artisans.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-artisans-liste',
  templateUrl: './artisans-liste.component.html',
  styleUrl: './artisans-liste.component.scss'
})
export class ArtisansListeComponent implements OnInit {
   artisansArray!: artisansModele [];
  

   constructor(private artisansService: ArtisansService){}

  ngOnInit(): void {
    this.artisansArray = this.artisansService.getArtisan();
  }
}
