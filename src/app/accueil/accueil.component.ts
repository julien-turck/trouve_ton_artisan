import { Component, OnInit } from '@angular/core';
import { artisansModele } from '../modele/artisansModele';
import { ArtisansService } from '../artisans.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss',
})
export class AccueilComponent implements OnInit {
  /*Création du tableau des fiches artisans du top 3 du mois*/
  artisansArray!: artisansModele[];

  constructor(private artisansService: ArtisansService) {}
  /*permet l'ajout des données du service au tableau*/
  ngOnInit(): void {
    this.artisansArray = this.artisansService.getArtisan();
  }
}
