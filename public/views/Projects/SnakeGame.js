import AbstractView from "../AbstractView.js"

export default class SnakeGame extends AbstractView {
    constructor() {
        super();
        this.title = "Snake-Game";
        this.date = 2024;
        this.setTitle(this.title);
    }

    async getHtml() {
        return `
            <a href="/Portfolio" class="view-next-project" data-link> View next </a>
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
                                    <a href="https://github.com/KenM4sters/snake-game" target="_blank" class="unique-project-details-item-description unique-project-link"> View code here </a>
                                </div>
                            </div>
                            <div class="unique-project-details-description">  
                                <h1 class="unique-project-details-item-header"> Description </h1>
                                <p class="unique-project-summary-details">  
                                    Simple Snake game made with Java's FX library.  
                                </p>

                                <p class="unique-project-summary-details">  
                                    The objective is to become as large as possible (by eating food items).
                                </p>                            

                                <p class="unique-project-summary-details">  
                                    The snake's head can't hit either the walls or any other part of its body.
                                </p>
                            </div>
                        </div>
                        <div class="unique-project-summary">
                            <img class="project-image" src="static/images/snake-still.png" alt="${this.title}">
                        </div>
                    </div>
                </div>
            </div>
            
        `
    }
}