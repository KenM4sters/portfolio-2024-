import AbstractView from "../AbstractView.js"

export default class BankingApp extends AbstractView {
    constructor() {
        super();
        this.title = "Banking App";
        this.date = 2024;
        this.setTitle(this.title);
    }

    async getHtml() {
        return `
            <a href="/JavaReactApp" class="view-next-project" data-link> View next </a>
            <div class="unique-project-wrapper">
                <h1 class="unique-project-header"> ${this.title} </h1>
                <div class="unique-project-info-wrapper">
                    <div class="unique-project-info">
                        <div class="unique-project-details">
                            <div class="unique-project-details-small">
                                <div class="unique-project-details-item">  
                                    <h1 class="unique-project-details-item-header"> Date </h1>
                                    <p class="unique-project-details-item-description"> 12/02/24 </p>
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
                                    <a href="https://github.com/KenM4sters/banking-app-frontend" target="_blank" class="unique-project-details-item-description unique-project-link"> View code here </a>
                                </div>
                            </div>
                            <div class="unique-project-details-description">  
                                <h1 class="unique-project-details-item-header"> Description </h1>
                                <p class="unique-project-summary-details">  
                                    A fullstack React/Spring application that allows users to sign up, verify their email, and login to make debit/credit transactions to their card.
                                </p>

                                <p class="unique-project-summary-details">  
                                    Each users' information is stored in a PostgreSQL database, of which a Spring backend communicates with to map requests made from a React frontend to the database. 
                                </p>                            

                                <p class="unique-project-summary-details">  
                                    Additionally, in the top left corner of the application, a Cog icon can be found that opens up a review of the project. 
                                </p>
                            </div>
                        </div>
                        <div class="project-video-wrapper">
                            <video class="project-video" muted>
                                <source src="static/videos/banking-app-demo.mp4" type="video/mp4">
                            </video>
                            <span class="play-video"> PLAY </span>
                        </div>
                    </div>
                </div>
            </div>
            
        `
    }
}