import { Component, OnInit } from '@angular/core';
import { artisansModele } from '../modele/artisansModele';
import { ArtisansService } from '../artisans.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent implements OnInit {
   artisansArray!: artisansModele [];
  

   constructor(private artisansService: ArtisansService){}

  ngOnInit(): void {
    this.artisansArray = this.artisansService.getArtisan();
  }
}
