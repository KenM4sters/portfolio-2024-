import AbstractView from "../AbstractView.js"

export default class BlogWebsite extends AbstractView {
    constructor() {
        super();
        this.title = "Blog Website";
        this.setTitle(this.title);
    }

    async getHtml() {
        return `
        
            <h1>Blog Website</h1>
        
        `
    }
}