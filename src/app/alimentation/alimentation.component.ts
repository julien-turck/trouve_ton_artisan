import { Component, OnInit } from '@angular/core';
import { artisansModele } from '../modele/artisansModele';
import { ArtisansService } from '../artisans.service';

@Component({
  selector: 'app-alimentation',
  templateUrl: './alimentation.component.html',
  styleUrl: './alimentation.component.scss',
})
export class AlimentationComponent implements OnInit {
  artisansArray!: artisansModele[];
  searchText = '';
  choiceText = 'Rechercher par artisan';
  filter = 'name';

  constructor(private artisansService: ArtisansService) {}
  /*permet l'ajout des données du service au tableau*/
  ngOnInit(): void {
    this.artisansArray = this.artisansService.getArtisan();
  }
  /*fonction qui permet le changement de choix de catégorie de la recherche*/
  choice(category: string) {
    this.filter = category;
    switch (category) {
      case 'name':
        this.choiceText = 'Rechercher par artisan';
        break;
      case 'specialty':
        this.choiceText = 'Rechercher par spécialité';
        break;
      case 'location':
        this.choiceText = 'Rechercher par commune';
        break;
      default:
        this.choiceText = 'Désolé, votre recherche est incorrect';
    }
  }
}
