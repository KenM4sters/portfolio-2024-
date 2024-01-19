import AbstractView from "./AbstractView.js";

export default class Projects extends AbstractView {
    constructor() {
        super();
        this.setTitle("Projects");

    }

    async getHtml() {
        return `
            <h1>Welcome to the projects page</h1>
        
        `
    }
}