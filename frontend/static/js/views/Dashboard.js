import AbstractView from "./AbstractView.js";

export default class Dashboard extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");

    }

    async getHtml() {
        return `
            <h1>Welcome to the Dashboard</h1>
        `;
    }
}