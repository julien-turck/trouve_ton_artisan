import { Component, Input } from '@angular/core';
import { artisansModele } from '../modele/artisansModele';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-artisans-page',
  templateUrl: './artisans-page.component.html',
  styleUrl: './artisans-page.component.scss'
})
export class ArtisansPageComponent {
    @Input() artisan!: artisansModele;

    constructor(config: NgbRatingConfig) {
		// customize default values of ratings used by this component tree
		config.max = 5;
		config.readonly = true;
	}
}
