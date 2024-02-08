import AbstractView from "../AbstractView.js"

export default class FBOParticles extends AbstractView {
    constructor() {
        super();
        this.title = "FBO Particles";
        this.date = 2023;
        this.setTitle(this.title);
    }

    async getHtml() {
        return `
        <a href="/RestAPI" class="view-next-project" data-link> View next </a>
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
                                <a href="https://github.com/KenM4sters/FBO_Particles" target="_blank" class="unique-project-details-item-description unique-project-link"> View code here </a>
                            </div>
                        </div>
                        <div class="unique-project-details-description">  
                            <h1 class="unique-project-details-item-header"> Description </h1>
                            <p class="unique-project-summary-details">  
                                FBO (Frame Buffer Output) or GPGPU rendering is a technique to essentially draw and animate lots of triangles with as little performance cost as possible. In essence, it’s a post-processing technique that involves saving (positional) data as a texture, modifying that data directly in the fragment shader on each frame to produce the desired animations, and using that texture in the vertex shader of whichever object you wish to draw that positional data into.
                            </p>
                            
                            <p class="unique-project-summary-details">  
                                This project is a very simple example of using FBO from scratch in order to manipulate the positions of hundreds of thousands of points very efficiently. Without GPGPU rendering, many devices would see a huge drop in FPS. 
                            </p>                            
                            
                            <p class="unique-project-summary-details">  
                                There’s lots of different ways that FBO can be used and I plan on creating more projects that showcase this technique. 
                            </p>
                        </div>
                    </div>
                    <div class="unique-project-summary">
                        <img class="project-image" src="static/images/fbo-particles-still.png" alt="${this.title}">
                    </div>
                </div>
            </div>
        </div>

        `
    }
}