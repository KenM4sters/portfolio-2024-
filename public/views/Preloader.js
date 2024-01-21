import AbstractView from "./AbstractView.js";

export default class Preloader extends AbstractView {
    constructor() {
        super();
        this.setTitle("Welcome Room")
    }

    async getHtml() {
        return `
            <div class="preloader-wrapper">
                <div class="preloader-menu">
                    <a href="/dashboard" class="preloader-button" data-link> ENTER </a>
                </div>
            </div>
        
        `
    }
}