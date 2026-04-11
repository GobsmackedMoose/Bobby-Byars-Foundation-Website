export class Article {
    title: string;
    date: string;
    content: string;
    imageUrl: string;

    constructor(
        title: string, 
        date: string, //since this is a string, make sure that all dates in the backend are formatted as xx/xx/xxxx
        content: string, 
        imageUrl: string
    ) {
        this.title = title;
        this.date = date;
        this.content = content;
        this.imageUrl = imageUrl;
    }

}