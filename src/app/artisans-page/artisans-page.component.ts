import { Component, Input } from '@angular/core';
import { artisansModele } from '../modele/artisansModele';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artisans-page',
  templateUrl: './artisans-page.component.html',
  styleUrl: './artisans-page.component.scss'
})
export class ArtisansPageComponent {
    @Input() artisan!: artisansModele;

    constructor(config: NgbRatingConfig,
                private router: Router) {
		// customize default values of ratings used by this component tree
		config.max = 5;
		config.readonly = true;
	}
  onViewArtisan(){
    this.router.navigateByUrl(`artisans/${this.artisan.idAuto}`);
  }
}


  
