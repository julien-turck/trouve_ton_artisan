import { Component, OnInit } from '@angular/core';
import { artisansModele } from '../modele/artisansModele';
import { ArtisansService } from '../artisans.service';

@Component({
  selector: 'app-fabrication',
  templateUrl: './fabrication.component.html',
  styleUrl: './fabrication.component.scss'
})
export class FabricationComponent implements OnInit {
   artisansArray!: artisansModele [];
  

   constructor(private artisansService: ArtisansService){}

  ngOnInit(): void {
    this.artisansArray = this.artisansService.getArtisan();
  }
}
