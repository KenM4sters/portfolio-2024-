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
                <span class="projects-item-wrapper"><a href="/2DGame" class="projects-item" data-link> 2D Game </a></span>
                <span class="projects-item-wrapper"><a href="/3DGameEngine" class="projects-item" data-link> 3D Game Engine </a></span>
                <span class="projects-item-wrapper"><a href="/GravitySimulator" class="projects-item" data-link> Gravity Simulator </a></span>
                <span class="projects-item-wrapper"><a href="/PrimeNumbersVisualised" class="projects-item" data-link> Pime Numbers Visualised </a></span>
                <span class="projects-item-wrapper"><a href="/RestAPI" class="projects-item" data-link> Rest API </a></span>
                <span class="projects-item-wrapper"><a href="/FBOParticles" class="projects-item" data-link> FBO Particles </a></span>
            </div>
        </div>
        `
    }
}