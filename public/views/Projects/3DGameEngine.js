import AbstractView from "../AbstractView.js"

export default class GameEngine extends AbstractView {
    constructor() {
        super();
        this.title = "3D Game Engine";
        this.date = 2023;
        this.setTitle(this.title);
    }

    async getHtml() {
        return `
        <a href="/SnakeGame" class="view-next-project" data-link> View next </a>
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
                                <a href="https://github.com/KenM4sters/game-engine-vulkan" target="_blank" class="unique-project-details-item-description unique-project-link"> View code here </a>
                            </div>
                        </div>
                        <div class="unique-project-details-description">  
                            <h1 class="unique-project-details-item-header"> Description </h1>
                            <p class="unique-project-summary-details">  
                                Unlike the predecessor to this project which was developed using C and the OpenGL API, this project takes advantage of the OOP paradigm to create a 3D game engine that comprises of several different systems that manage all the different aspects of a game that you can think of, from managing the entire graphics pipeline to processing user input.
                            </p>                         
                            <p class="unique-project-summary-details">  
                                A more holistic review of the development of the game-engine can be found in the Github repository. 
                            </p>
                        </div>
                    </div>
                    <div class="project-video-wrapper">
                        <video class="project-video" muted>
                            <source src="static/videos/vulkan-engine-demo.mp4" type="video/mp4">
                        </video>
                        <span class="play-video"> PLAY </span>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}