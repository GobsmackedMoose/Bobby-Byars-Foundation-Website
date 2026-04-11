export class Article {
    title: string;
    subtitle: string;
    date: string;
    content: string;
    imageUrl: string;
    imageAltText: string;
    slug: string; //this will be used to create the url for the article page. It should be a lowercase, hyphenated version of the title (e.g. "Test Article Title" would become "test-article-title")

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

        this.slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    }

}