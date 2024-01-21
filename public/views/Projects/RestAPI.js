import AbstractView from "../AbstractView.js"

export default class RestAPI extends AbstractView {
    constructor() {
        super();
        this.setTitle("Rest-API");
    }

    async getHtml() {
        return `
        
            <h1>Rest API</h1>
        
        `
    }
}