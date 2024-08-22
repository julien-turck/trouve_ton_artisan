import { Injectable } from '@angular/core';
import { artisansModele } from './modele/artisansModele';

@Injectable({
  providedIn: 'root'
})
export class ArtisansService {
  private artisansService: artisansModele[] = [
      new artisansModele(
      17,
      "C'est sup'hair",
      "Coiffeur",
      4.1,    
      "Romans-sur-Isère",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "sup-hair@gmail.com",
      "Services",
      false,
      "coiffure.png"
    ).withWebSite("https://sup-hair.fr"),
    ];

    getArtisan(): artisansModele[] {
      return [...this.artisansService];
    }
}
