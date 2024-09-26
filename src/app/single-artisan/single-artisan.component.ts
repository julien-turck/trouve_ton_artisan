import { Component, OnInit } from '@angular/core';
import { artisansModele } from '../modele/artisansModele';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { ArtisansService } from '../artisans.service';

@Component({
  selector: 'app-single-artisan',
  templateUrl: './single-artisan.component.html',
  styleUrl: './single-artisan.component.scss',
})
export class SingleArtisanComponent implements OnInit {
  artisan!: artisansModele;
  message =
    "Merci de remplir tous les champs afin qu'ils puissent vous répondre au mieux. N'oubliez pas de fournir un moyen de vous recontacter dans le corps du message.";
  nom = '';
  objet = '';
  texte = '';

  constructor(
    config: NgbRatingConfig,
    private artisansService: ArtisansService,
    private route: ActivatedRoute
  ) {
    /*permet de customiser les valeurs par défaut de la notation étoilée*/
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    /*récupération et exploitation de l'ID permettant l'affichage du bon artisan demandé*/
    const artisanId = this.route.snapshot.params['idAuto'];
    this.artisan = this.artisansService.getArtisanById(artisanId);
  }
  /*fonction qui vérifie la présence d'un contenu dans chacun des champs du formulaire avant de permettre l'envoi du message*/
  onSubmit() {
    if (!this.nom || !this.objet || !this.texte) {
      this.message =
        "Merci de remplir tous les champs afin qu'ils puissent vous répondre au mieux. N'oubliez pas de fournir un moyen de vous recontacter dans le corps du message.";
    } else {
      this.message = 'Votre message a bien été envoyé';
      this.nom = '';
      this.objet = '';
      this.texte = '';
    }
  }
}
