import AbstractView from "../AbstractView.js"

export default class GravitySimulator extends AbstractView {
    constructor() {
        super();
        this.title = "Gravity Simulator";
        this.date = 2023;
        this.setTitle(this.title);
    }

    async getHtml() {
        return `
        <a href="/PrimeNumbersVisualised" class="view-next-project" data-link> View next </a>
        <div class="unique-project-wrapper">
            <h1 class="unique-project-header"> ${this.title} </h1>
            <div class="unique-project-info-wrapper">
                <div class="unique-project-info">
                    <div class="unique-project-details">
                        <div class="unique-project-details-small">
                            <div class="unique-project-details-item">  
                                <h1 class="unique-project-details-item-header"> Date </h1>
                                <p class="unique-project-details-item-description"> 01/09/23 </p>
                            </div>
                            <div class="unique-project-details-item">  
                                <h1 class="unique-project-details-item-header"> Status </h1>
                                <p class="unique-project-details-item-description"> Complete </p>
                            </div>
                            <div class="unique-project-details-item">  
                            <h1 class="unique-project-details-item-header"> Live </h1>
                            <p class="unique-project-details-item-description"> N/A </p>
                            </div>
                            <div class="unique-project-details-item">  
                                <h1 class="unique-project-details-item-header"> Code </h1>
                                <a href="https://github.com/KenM4sters/gravity-simulator" target="_blank" class="unique-project-details-item-description unique-project-link"> View code here </a>
                            </div>
                        </div>
                        <div class="unique-project-details-description">  
                            <h1 class="unique-project-details-item-header"> Description </h1>
                            <p class="unique-project-summary-details">  
                                Through largely simplifying the graphics pipeline in comparison to native WebGL, threeJS allows you to focus your attention entirely on developing immersive experiences that can be both appealing and educational.
                            </p>
                            
                            <p class="unique-project-summary-details">  
                                This small 2D project simulates a simplified behaviour of space-time under the presence of three particles in 2D space, one massive and two less so. It uses Isaac Newton’s Law of Universal Gravitation, 2nd law of Motion and some simple trigonometry to showcase how the particles are affected due to each other’s mass.
                            </p>                            
                            
                            <p class="unique-project-summary-details">  
                                This project is one that I’m really keen on continuing to develop over the future.
                            </p>
                        </div>
                    </div>
                    <div class="project-video-wrapper">
                        <video class="project-video" muted>
                            <source src="static/videos/gravity-simulator-demo.mp4" type="video/mp4">
                        </video>
                        <span class="play-video"> PLAY </span>
                    </div>
                </div>
            </div>
        </div>

        `
    }
}