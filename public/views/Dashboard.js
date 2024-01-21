import AbstractView from "./AbstractView.js";

export default class Dashboard extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");

    }

    async getHtml() {
        return `
        <div class="dashboard-wrapper">
            <h1 class="dashboard-content dashboard-heading">WELCOME</h1>
            <p class="dashboard-content dashboard-para">ASPIRING DEVELOPER</p>
        </div>
        `;
    }
}