import AbstractView from "../AbstractView.js"

export default class BlogWebsite extends AbstractView {
    constructor() {
        super();
        this.setTitle("Blog-Website");
    }

    async getHtml() {
        return `
        
            <h1>Blog Website</h1>
        
        `
    }
}