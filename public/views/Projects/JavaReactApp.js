import AbstractView from "../AbstractView.js"

export default class JavaReactApp extends AbstractView {
    constructor() {
        super();
        this.title = "Video Games App";
        this.date = 2024;
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
                                    <a href="https://github.com/KenM4sters/React-Spring" target="_blank" class="unique-project-details-item-description unique-project-link"> View code here </a>
                                </div>
                            </div>
                            <div class="unique-project-details-description">  
                                <h1 class="unique-project-details-item-header"> Description </h1>
                                <p class="unique-project-summary-details">  
                                    This full-stack web application enables users to add, edit and remove game titles. 
                                </p>

                                <p class="unique-project-summary-details">  
                                    The backend is done in Java using the Spring framework and a PostgreSQL database, and the frontend utilises React for SPA integration.
                                </p>                            
                            </div>
                        </div>
                        <div class="project-video-wrapper">
                            <video class="project-video" muted>
                                <source src="static/videos/games-list-demo.mp4" type="video/mp4">
                            </video>
                            <span class="play-video"> PLAY </span>
                        </div>
                    </div>
                </div>
            </div>
            
        `
    }
}