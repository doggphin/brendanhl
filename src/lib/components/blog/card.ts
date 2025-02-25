export class Card {
    title: string;
    image: string;
    link: string;
    description: string;
    date: Date;

    constructor(title : string, image : string, link : string, description : string, date : Date) {
        this.title = title;
        this.image = image;
        this.link = link;
        this.description = description;
        date.setMonth(date.getMonth() - 1);
        this.date = date;
    }
}