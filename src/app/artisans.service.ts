import { Injectable } from '@angular/core';
import { artisansModele } from './modele/artisansModele';

@Injectable({
  providedIn: 'root'
})
export class ArtisansService {
  private artisansService: artisansModele[] = [
      new artisansModele(
        1,
        "Vallis Bellemare",
        "Plombier",
        4,
        "Vienne",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        "v.bellemare@gmail.com",
        "Bâtiment",
        false,
        ).withWebSite("https://plomberie-bellemare.com"),
      new artisansModele(
        2,
        "Amitee Lécuyer",
        "Couturier",
        4.5,
        "Annecy",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        "a.amitee@hotmail.com",
        "Fabrication",
        false,
        ).withWebSite("https://lecuyer-couture.com"),
      new artisansModele(
        3,
        "Leala Dennis",
        "Coiffeur",
        3.8,
        "Chambéry",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        "l.dennos@hotmail.fr",
        "Services",
        false,
        ).withWebSite("https://coiffure-leala-chambery.fr"),
      new artisansModele(
        4,
		    "Chocolaterie Labbé",
		    "Chocolatier",
		    4.9,
		    "Grenoble",
		    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
		    "chocolaterie-labbe@gmail.com",
		    "Alimentation",
		    true,
        ).withWebSite("https://chocolaterie-labbe.fr"),
      new artisansModele(
        5,
        "Claude Quinn",
        "Bijoutier",
        4.2,
        "Aix-les-bains",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        "claude.quinn@gmail.com",
        "Fabrication",
        false
      ),
      new artisansModele(
        6,
        "Valérie Laderoute",
        "Toiletteur",
        4.5,
        "Valence",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        "v-laredoute@gmail.com",
        "Services",
        false
      ),
      new artisansModele(
        7,
        "Boutot & fils",
        "Menuisier",
        4.7,
        "Bourg-en-bresse",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        "boutot-menuiserie@gmail.com",
        "Bâtiment",
        false,
        ).withWebSite("https://boutot-menuiserie.com"),
      new artisansModele(
        8,
        "CM Graphisme",
        "Webdesign",
        4.4,
        "Valence",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        "contact@cm-graphisme.com",
        "Services",
        false,
        ).withWebSite("https://cm-graphisme.com"),
      new artisansModele(
        9,
        "Orville Salmons",
        "Chauffagiste",
        5,
        "Evian",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        "o-salmons@live.com",
        "Bâtiment",
        true
      ),
      new artisansModele(
        10,
        "Au pain chaud",
        "Boulanger",
        4.8,
        "Montélimar",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        "aupainchaud@hotmail.com",
        "Alimentation",
        true
      ),
      new artisansModele(
        11,
        "Boucherie Dumont",
        "Boucher",
        4.5,
        "Lyon",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        "boucherie.dumond@gmail.com",
        "Alimentation",
        false
      ),
      new artisansModele(
        12,
        "Mont Blanc Eléctricité",
        "Electricien",
        4.5,
        "Chamonix",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        "contact@mont-blanc-electricite.com",
        "Bâtiment",
        false,
        ).withWebSite("https://mont-blanc-electricite.com"),
      new artisansModele(
        13,
        "Traiteur Truchon",
        "Traiteur",
        4.1,
        "Privas",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        "contact@truchon-traiteur.fr",
        "Alimentation",
        false,
        ).withWebSite("https://truchon-traiteur.fr"),
      new artisansModele(
        14,
        "Le monde des fleurs",
        "Fleuriste",
        4.6,
        "Annonay",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        "contact@le-monde-des-fleurs-annonay.fr",
        "Services",
        false,
        ).withWebSite("https://le-monde-des-fleurs-annonay.fr"),
      new artisansModele(
        15,
        "Royden Charbonneau",
        "Carrossier",
        3.8,
        "Saint-Priest",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        "r.charbonneau@gmail.com",
        "Services",
        false
      ),
      new artisansModele(
        16,
        "Ernest Carignan",
        "Ferronier",
        5,
        "Le Puy-en-Velay",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        "e-carigan@hotmail.com",
        "Fabrication",
        false
      ),
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
      ).withWebSite("https://sup-hair.fr"),
    ];

    getArtisan(): artisansModele[] {
      return [...this.artisansService];
    }

    getArtisanById(artisanId: string): artisansModele {
      const foundArtisan = this.artisansService.find(artisansModele =>  artisansModele.idAuto === artisanId);
      if(!foundArtisan) {
        throw new Error ('artisan inconnu');
      }
      return foundArtisan;
    }

}
