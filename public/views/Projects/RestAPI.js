import AbstractView from "../AbstractView.js"

export default class RestAPI extends AbstractView {
    constructor() {
        super();
        this.title = "Rest API";
        this.date = 2023;
        this.setTitle(this.title);
    }

    async getHtml() {
        return `
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
                                <a href="https://github.com/KenM4sters/actix-web-postgresql-api" target="_blank" class="unique-project-details-item-description unique-project-link"> View code here </a>
                            </div>
                        </div>
                        <div class="unique-project-details-description">  
                            <h1 class="unique-project-details-item-header"> Description </h1>
                            <p class="unique-project-summary-details">
                                Learning Rust, even if just barely, was something that I've always wanted to do ever since learning to program in C, and even more so once realising how versatile of a language it can be.  
                            </p>
                            
                            <p class="unique-project-summary-details">  
                                After learning the basic syntax and ecosystem, I decided to put together a simple REST API using actix web as the framework of choice, although others such as Rocket were also considered. 
                            </p>
                            
                            <p class="unique-project-summary-details">  
                                It was also an ample opportunity to get to grips with working with databases, of which I chose Postgresql used in conjunction with Docker for containerisation for this particular project.
                            </p>                            
                        </div>
                    </div>
                    <div class="unique-project-summary">
                        <img class="project-image" src="static/images/actix-web-still.png" alt="${this.title}">
                    </div>
                </div>
            </div>
        </div>

        `
    }
}