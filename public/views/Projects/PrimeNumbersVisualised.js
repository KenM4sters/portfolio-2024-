import AbstractView from "../AbstractView.js"

export default class PrimeNumbersVisualised extends AbstractView {
    constructor() {
        super();
        this.setTitle("Prime-Numbers-Visualised");
    }

    async getHtml() {
        return `
        
            <h1>Prime Numbers Visualised</h1>
        
        `
    }
}