import AbstractView from "../AbstractView.js"

export default class PrimeNumbersVisualised extends AbstractView {
    constructor() {
        super();
        this.title = "Prime Numbers Visualised";
        this.setTitle(this.title);
    }

    async getHtml() {
        return `
        
            <h1>Prime Numbers Visualised</h1>
        
        `
    }
}