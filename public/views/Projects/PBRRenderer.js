import AbstractView from "../AbstractView.js"

export default class PBRRenderer extends AbstractView {
    constructor() {
        super();
        this.title = "PBR Renderer";
        this.date = 2024;
        this.setTitle(this.title);
    }

    async getHtml() {
        return `
            <a href="/OpenGLEngine" class="view-next-project" data-link> View next </a>
            <div class="unique-project-wrapper">
                <h1 class="unique-project-header"> ${this.title} </h1>
                <div class="unique-project-info-wrapper">
                    <div class="unique-project-info">
                        <div class="unique-project-details">
                            <div class="unique-project-details-small">
                                <div class="unique-project-details-item">  
                                    <h1 class="unique-project-details-item-header"> Date </h1>
                                    <p class="unique-project-details-item-description"> 03/20/24 </p>
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
                                    <a href="https://github.com/KenM4sters/Reach" target="_blank" class="unique-project-details-item-description unique-project-link"> View code here </a>
                                </div>
                            </div>
                            <div class="unique-project-details-description">  
                                <h1 class="unique-project-details-item-header"> Description </h1>
                                <p class="unique-project-summary-details">  
                                    My most recent project, this 3D OpenGL application has been developed with the ambition of learning more about different lighting models and advanced rendering techniques to produce visually-realistic shading. 
                                </p>

                                <p class="unique-project-summary-details">  
                                    Additionally, I wanted to use this project to really solidify an approach to handling the implementation of graphics APIs in a clean and readable manner, allowing for the use of multiple APIs in a single project, and abstracting them away from the programmer.
                                </p>                            

                                <p class="unique-project-summary-details">  
                                    Ultimately, I'm very happy with how I've done this, as well as how my understanding of lighting has developed throughout the process. I've definitely found a love for rendering graphics which simulate the physical properties of materials and light itself, which I'm looking to explore further with a new raytracing project, as well as through advancing this one, as I look to implement reflective properties and PBR textures. 
                                </p>
                            </div>
                        </div>
                        <div class="project-video-wrapper">
                            <video class="project-video" muted>
                                <source src="static/videos/pbr_renderer_demo.mp4" type="video/mp4">
                            </video>
                            <span class="play-video"> PLAY </span>
                        </div>
                    </div>
                </div>
            </div>
            
        `
    }
}