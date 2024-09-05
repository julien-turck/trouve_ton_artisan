import { Component, OnInit } from '@angular/core';
import { artisansModele } from '../modele/artisansModele';
import { ArtisansService } from '../artisans.service';

@Component({
  selector: 'app-batiment',
  templateUrl: './batiment.component.html',
  styleUrl: './batiment.component.scss',
})
export class BatimentComponent implements OnInit {
  artisansArray!: artisansModele[];
  searchText = '';
  choiceText = 'Chercher un artisan';
  filter = 'name';

  constructor(private artisansService: ArtisansService) {}

  ngOnInit(): void {
    this.artisansArray = this.artisansService.getArtisan();
  }
  choice(category: string) {
    this.filter = category;
    switch (category) {
      case 'name':
        this.choiceText = 'Chercher un artisan';
        break;
      case 'specialty':
        this.choiceText = 'Chercher une spécialité';
        break;
      case 'location':
        this.choiceText = 'Chercher une commune';
        break;
      default:
        this.choiceText = 'Désolé, votre recherche est incorrect';
    }
  }
}
