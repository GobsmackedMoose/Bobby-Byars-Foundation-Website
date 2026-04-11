export class Article {
    title: string;
    date: string;
    content: string;
    imageUrl: string;

    constructor(
        title: string, 
        date: string, 
        content: string, 
        imageUrl: string
    ) {
        this.title = title;
        this.date = date;
        this.content = content;
        this.imageUrl = imageUrl;
    }

}