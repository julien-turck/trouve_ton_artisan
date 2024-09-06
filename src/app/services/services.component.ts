import { Component, OnInit } from '@angular/core';
import { artisansModele } from '../modele/artisansModele';
import { ArtisansService } from '../artisans.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent implements OnInit {
  artisansArray!: artisansModele[];
  searchText = '';
  choiceText = 'Rechercher par artisan';
  filter = 'name';

  constructor(private artisansService: ArtisansService) {}

  ngOnInit(): void {
    this.artisansArray = this.artisansService.getArtisan();
  }
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
