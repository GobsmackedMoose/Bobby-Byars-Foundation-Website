export class Article {
    title: string;
    amount: string;
    eligibility: string;
    dueDate: string;
    description: string;
    externalLink: string;
    slug: string; //this will be used to create the url for the article page. It should be a lowercase, hyphenated version of the title (e.g. "Test Article Title" would become "test-article-title")

    constructor(
        title: string, 
        amount: string,
        eligibility: string, //since this is a string, make sure that all dates in the backend are formatted as xx/xx/xxxx
        dueDate: string, 
        description: string,
        externalLink: string
    ) {

        this.title = title;
        this.amount = amount;
        this.eligibility = eligibility;
        this.dueDate = dueDate;
        this.description = description;
        this.externalLink = externalLink;

        this.slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    }

}