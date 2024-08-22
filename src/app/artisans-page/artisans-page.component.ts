import { Component, Input } from '@angular/core';
import { artisansModele } from '../modele/artisansModele';

@Component({
  selector: 'app-artisans-page',
  templateUrl: './artisans-page.component.html',
  styleUrl: './artisans-page.component.scss'
})
export class ArtisansPageComponent {
    @Input() artisan!: artisansModele;
}
