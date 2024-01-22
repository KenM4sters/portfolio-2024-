import AbstractView from "../AbstractView.js"

export default class GravitySimulator extends AbstractView {
    constructor() {
        super();
        this.title = "Gravity Simulator";
        this.setTitle(this.title);
    }

    async getHtml() {
        return `
        
            <h1>Gravity Simulator</h1>
        
        `
    }
}