export class artisansModele {

    website?: string;
    idAuto: string;

    constructor(public id: number,
                public name: string,
                public specialty: string,
                public note: number,
                public location: string,
                public about: string,
                public email: string,
                public category: string,
                public top: boolean){
        this.idAuto = crypto.randomUUID();        
    }
    setWebsite(website: string): void {
        this.website = website;
    }
    withWebSite(website: string): artisansModele {
        this.setWebsite(website);
        return this;
    }
}