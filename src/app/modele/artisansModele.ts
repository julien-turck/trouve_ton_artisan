export class artisansModele {

    website?: string;

    constructor(public id: number,
                public name: string,
                public specialty: string,
                public note: number,
                public location: string,
                public about: string,
                public email: string,
                public category: string,
                public top: boolean,
                public imageUrl: string){}

    addNote(): void{
        this.note++
    }
    removeNote(): void {
        this.note--
    }
    setWebsite(website: string): void {
        this.website = website;
    }
}