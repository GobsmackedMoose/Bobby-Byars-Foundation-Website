export class Article {
    title: string;
    subtitle: string;
    date: string;
    content: string;
    imageUrl: string;
    imageAltText: string;

    constructor(
        title: string, 
        subtitle: string,
        date: string, //since this is a string, make sure that all dates in the backend are formatted as xx/xx/xxxx
        content: string, 
        imageUrl: string,
        imageAltText: string
    ) {
        this.title = title;
        this.subtitle = subtitle;
        this.date = date;
        this.content = content;
        this.imageUrl = imageUrl;
        this.imageAltText = imageAltText;
    }

}