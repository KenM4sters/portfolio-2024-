import AbstractView from "../AbstractView.js"

export default class GravitySimulator extends AbstractView {
    constructor() {
        super();
        this.title = "Gravity Simulator";
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
                            <div class="unique-project-details-item">  
                                <h1 class="unique-project-details-item-header"> Date </h1>
                                <p class="unique-project-details-item-description"> 10/01/24 </p>
                            </div>
                            <div class="unique-project-details-item">  
                                <h1 class="unique-project-details-item-header"> Status </h1>
                                <p class="unique-project-details-item-description"> On-going </p>
                            </div>
                            <div class="unique-project-details-item">  
                                <h1 class="unique-project-details-item-header"> Live </h1>
                                <p class="unique-project-details-item-description"> N/A </p>
                            </div>
                            <div class="unique-project-details-item">  
                                <h1 class="unique-project-details-item-header"> Code </h1>
                                <a href="https://github.com/KenM4sters/gravity-simulator" target="_blank" class="unique-project-details-item-description"> View code here </a>
                            </div>
                        </div>
                        <div class="unique-project-summary">
                            <p class="unique-project-summary-details">  
                                Using threeJS to produce visual representations of mathematical concepts and physical phenomena is my absolute favourite way to use this library. Through largely simplifying the graphics pipeline in comparison to native WebGL, threeJS allows you to focus your attention entirely on developing immersive experiences that can be both appealing and educational.
                            </p>

                            <p class="unique-project-summary-details">  
                                This small 2D project simulates a simplified behaviour of space-time under the presence of three particles in 2D space, one massive and two less so. It uses Isaac Newton’s Law of Universal Gravitation, 2nd law of Motion and some simple trigonometry to showcase how the particles are affected due to each other’s mass.
                            </p>                            
                            
                            <p class="unique-project-summary-details">  
                                This project is one that I’m really keen on continuing to develop over the future since there's so much that can be done to make everything a bit more immersive, such as a debug GUI, lines to represent the direction of the particles acceleration, visual representations of their angles relative to (0, 0) etc…
                            </p>

                            <p class="unique-project-summary-details">  
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="unique-project-images-wrapper">
            <div class="images-container"> 
                <div class="large-image-wrapper">
                    <img src="static/images/japan.jpg" class="large-image" alt="game-demo" /> 
                </div>
                <div class="small-image-wrapper">
                    <img src="static/images/japan.jpg" class="small-image" alt="game-demo" /> 
                    <img src="static/images/japan.jpg" class="small-image" alt="game-demo" /> 
                </div> 
            </div
        </div>
        `
    }
}