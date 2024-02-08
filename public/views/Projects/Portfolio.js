import AbstractView from "../AbstractView.js"

export default class Portfolio extends AbstractView {
    constructor() {
        super();
        this.title = "My Portfolio";
        this.date = 2024;
        this.setTitle(this.title);
    }

    async getHtml() {
        return `
        <a href="/2DGame" class="view-next-project" data-link> View next </a>
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
                                <a href="https://github.com/KenM4sters/portfolio-2024-" target="_blank" class="unique-project-details-item-description unique-project-link"> View code here </a>
                            </div>
                        </div>
                        <div class="unique-project-details-description">  
                            <h1 class="unique-project-details-item-header"> Description </h1>
                            <p class="unique-project-summary-details">
                                The portfolio that you're currently viewing is completely custom made by myself and makes use of only a single framework, Express. 
                            </p>
                            <p class="unique-project-summary-details">
                                On the frontend, we have vanilla Javacript that pulls from the threeJS library and uses a rendering techinque known as 'GPGPU rendering' to draw and animate millions of triangles with as little peformance cost as possible. 
                            </p>
                            
                            <p class="unique-project-summary-details">  
                                Moving to the backend, the application runs off an Express server that avoids the standard routing system and dynamically removes and creates HTML code based on the 'page' that is currently in view. This allows for everything to be techincally under a single page (SPA) and avoids browser refreshes when the route is changed, which in turn avoids the threeJS canvas from being refreshed.
                            </p>
                            
                            <p class="unique-project-summary-details">  
                                Finally, the project is containerised using Docker, and pushed to Google's Cloud Run service for web deployment. 
                            </p> 
                        </div>
                    </div>
                    <div class="project-video-wrapper">
                        <video class="project-video" muted>
                            <source src="static/videos/portfolio-demo.mp4" type="video/mp4">
                        </video>
                        <span class="play-video"> PLAY </span>
                    </div>
                </div>
            </div>
        </div>

        `
    }
}