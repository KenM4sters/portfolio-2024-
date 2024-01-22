import AbstractView from "../AbstractView.js"

export default class RestAPI extends AbstractView {
    constructor() {
        super();
        this.title = "Rest API";
        this.setTitle(this.title);
    }

    async getHtml() {
        return `
        
            <h1>Rest API</h1>
        
        `
    }
}