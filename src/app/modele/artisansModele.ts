export class artisansModele {
  //propriété optionnelle, si l'artisan à un site web
  website?: string;

  idAuto: string;

  constructor(
    public id: number,
    public name: string,
    public specialty: string,
    public note: number,
    public location: string,
    public about: string,
    public email: string,
    public category: string,
    public top: boolean
  ) {
    //génération automatique d'un ID unique pour chaque artisan, exploité pour l'affichage des fiches individuelles
    this.idAuto = crypto.randomUUID();
  }
  //fonction qui ajoute le site web à la fiche de l'artidan ou qui précise que l'artisan ne l'a pas renseigné
  setWebsite(website: string): void {
    this.website = website;
  }
  //fonction qui vérifie la présence d'un site web dans la fiche de l'artisan
  withWebSite(website: string): artisansModele {
    this.setWebsite(website);
    return this;
  }
}
