import { Component, OnInit } from '@angular/core';
import { artisansModele } from '../modele/artisansModele';
import { ArtisansService } from '../artisans.service';

@Component({
  selector: 'app-alimentation',
  templateUrl: './alimentation.component.html',
  styleUrl: './alimentation.component.scss'
})
export class AlimentationComponent implements OnInit {
   artisansArray!: artisansModele [];
  

   constructor(private artisansService: ArtisansService){}

  ngOnInit(): void {
    this.artisansArray = this.artisansService.getArtisan();
  }
}{

}
