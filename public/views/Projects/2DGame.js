import AbstractView from "../AbstractView.js"

export default class Game extends AbstractView {
    constructor() {
        super();
        this.title = "2D-Game";
        this.setTitle(this.title);
    }

    async getHtml() {
        return `
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
                            While it’s really just a very basic game, it served as a fantastic introduction into not only graphics programming, but low-level programming in C. However, I’ve since moved on to creating an actual game engine in C++ which utilises the more relevant-to-today’s-technology API, Vulkan. 
                            </p>

                            <p class="unique-project-summary-details">  
                                A more holistic review of the development of the game-engine can be found in the Github repository. 
                            </p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="white" class="arrow-right">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </div>
                </div>
            </div>
            <div class="unique-project-images-wrapper">
                
            </div>
        `
    }
}