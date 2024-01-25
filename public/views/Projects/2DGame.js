import AbstractView from "../AbstractView.js"

export default class Game extends AbstractView {
    constructor() {
        super();
        this.title = "2D-Game";
        this.setTitle(this.title);
    }

    async getHtml() {
        return `
            <a href="/3DGameEngine" class="view-next-project" data-link> View next </a>
            <div class="unique-project-wrapper">
                <h1 class="unique-project-header"> ${this.title} </h1>
                <div class="unique-project-info-wrapper">
                    <div class="unique-project-info">
                        <div class="unique-project-details">
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
                                <a href="https://github.com/KenM4sters/opengl-game" target="_blank" class="unique-project-details-item-description"> View code here </a>
                            </div>
                        </div>
                        <div class="unique-project-summary">
                            <p class="unique-project-summary-details">  
                                As my first proper exposure to programming an application in C, technically, I found this to be very challenging, which has made the whole project all the more rewarding for me. 
                            </p>

                            <p class="unique-project-summary-details">  
                                From setting up makefiles, to rendering bullets and everything else in between, I’ve come out a completely different developer as to who I started as. 
                            </p>                            
                            
                            <p class="unique-project-summary-details">  
                            While it's really just a very basic game, it served as a fantastic introduction into not only graphics programming, but low-level programming in C. However, I’ve since moved on to creating an actual game engine in C++ which utilises the more relevant-to-today’s-technology API, Vulkan. 
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
                        <video muted autoplay src="static/images/game_demo.mp4" class="large-image" alt="game-demo" /> 
                    </div>
                    <div class="small-image-wrapper">
                        <img src="static/images/ken-masters.jpg" class="small-image" alt="game-demo" /> 
                        <img src="static/images/ken-masters.jpg" class="small-image" alt="game-demo" /> 
                    </div> 
                </div
            </div>
        `
    }
}