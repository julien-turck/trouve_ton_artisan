import { Component, OnInit } from '@angular/core';
import { artisansModele } from './modele/artisansModele';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  
  artisansArray!: artisansModele [];

  Cestsuphair!: artisansModele;

  ngOnInit(): void {
    this.artisansArray = [
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
    )
    ];
    this.artisansArray[0].setWebsite("https://sup-hair.fr");
  }
}
