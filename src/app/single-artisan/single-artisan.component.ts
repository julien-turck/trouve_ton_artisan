import { Component, OnInit } from '@angular/core';
import { artisansModele } from '../modele/artisansModele';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { ArtisansService } from '../artisans.service';

@Component({
  selector: 'app-single-artisan',
  templateUrl: './single-artisan.component.html',
  styleUrl: './single-artisan.component.scss'
})
export class SingleArtisanComponent implements OnInit{
   artisan!: artisansModele;

    constructor(config: NgbRatingConfig,
                private artisansService: ArtisansService,
                private route: ActivatedRoute) {
		// customize default values of ratings used by this component tree
		config.max = 5;
		config.readonly = true;
    }

    ngOnInit(): void{
      const artisanId = this.route.snapshot.params["idAuto"];
      this.artisan = this.artisansService.getArtisanById(artisanId);
	  }
}
