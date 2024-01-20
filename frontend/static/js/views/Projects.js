import AbstractView from "./AbstractView.js";

export default class Projects extends AbstractView {
    constructor() {
        super();
        this.setTitle("Projects");

    }

    async getHtml() {
        return `
        <div class="projects-wrapper">
            <h1 class="projects-header">MY WORK</h1>
            <div class="projects-info-wrapper">
                <span class="projects-item-wrapper"><a href="/" class="projects-item"> 2D Game </a></span>
                <span class="projects-item-wrapper"><a href="/" class="projects-item"> 3D Game Engine </a></span>
                <span class="projects-item-wrapper"><a href="/" class="projects-item"> Gravity Simulator </a></span>
                <span class="projects-item-wrapper"><a href="/" class="projects-item"> Pime Numbers Visualised </a></span>
                <span class="projects-item-wrapper"><a href="/" class="projects-item"> Rest API </a></span>
                <span class="projects-item-wrapper"><a href="/" class="projects-item"> Blog Website </a></span>
                <span class="projects-item-wrapper"><a href="/" class="projects-item"> FBO Particles </a></span>
            </div>
        </div>
        `
    }
}