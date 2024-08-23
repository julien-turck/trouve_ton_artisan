import { Component, OnInit } from '@angular/core';
import { artisansModele } from '../modele/artisansModele';
import { ArtisansService } from '../artisans.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
   artisansArray!: artisansModele [];
  

   constructor(private artisansService: ArtisansService){}

  ngOnInit(): void {
    this.artisansArray = this.artisansService.getArtisan();
  }
}
