import AbstractView from "../AbstractView.js"

export default class GameEngine extends AbstractView {
    constructor() {
        super();
        this.title = "3D Game Engine";
        this.setTitle(this.title);
    }

    async getHtml() {
        return `
            <a href="/FBOParticles" class="view-next-project" data-link> View next </a>
            <div class="unique-project-wrapper">
                <h1 class="unique-project-header"> ${this.title} </h1>
                <div class="unique-project-info-wrapper">
                    <div class="unique-project-info">
                        <div class="unique-project-details">
                            <div class="unique-project-details-item">  
                                <h1 class="unique-project-details-item-header"> Date </h1>
                                <p class="unique-project-details-item-description"> 01/12/23 </p>
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
                                <a href="https://github.com/KenM4sters/game-engine-vulkan" target="_blank" class="unique-project-details-item-description"> View code here </a>
                            </div>
                        </div>
                        <div class="unique-project-summary">
                            <p class="unique-project-summary-details">  
                                Unlike the predecessor to this project which was developed using C and the OpenGL API, this project takes advantage of the OOP paradigm to create a 3D game engine that comprises of several different systems that manage all the different aspects of a game that you can think of, from managing the entire graphics pipeline to processing user input.
                            </p>

                            <p class="unique-project-summary-details">  
                                At the time of writing this, I’ve implemented several core systems that result in a 3D model being drawn to the screen that the user can pan around using the WASD and arrow keys. Besides the fundamentals, the project also uses some pretty cool performance enhancing techniques which, as the engine develops, will reduce CPU overhead and save memory on the GPU drastically.
                            </p>                            
                            
                            <p class="unique-project-summary-details">
                                At this moment in time, I plan on gradually transforming the engine into some kind of 3D raytracing experiment (something like a basic aim trainer), as I continue to develop my skills in less verbose APIs, such as OpenGL and WebGL.
                            </p>

                            <p class="unique-project-summary-details">  
                                A more holistic review of the development of the game-engine can be found in the Github repository. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="unique-project-images-wrapper">
            <div class="images-container"> 
                <div class="large-image-wrapper">
                    <video muted autoplay src="static/images/engine_mkvi_demo.mov" class="large-image" alt="game-demo" /> 
                </div>
                <div class="small-image-wrapper">
                    <img src="static/images/vulkan-engine-lighting.png" class="small-image" alt="game-demo" /> 
                    <img src="static/images/vulkan-engine-particles.png" class="small-image" alt="game-demo" /> 
                </div> 
            </div
        </div>
        `
    }
}