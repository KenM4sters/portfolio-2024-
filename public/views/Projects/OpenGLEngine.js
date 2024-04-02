import AbstractView from "../AbstractView.js"

export default class OpenGLEngine extends AbstractView {
    constructor() {
        super();
        this.title = "OpenGL Game Engine";
        this.date = 2024;
        this.setTitle(this.title);
    }

    async getHtml() {
        return `
            <a href="/VulkanEngine" class="view-next-project" data-link> View next </a>
            <div class="unique-project-wrapper">
                <h1 class="unique-project-header"> ${this.title} </h1>
                <div class="unique-project-info-wrapper">
                    <div class="unique-project-info">
                        <div class="unique-project-details">
                            <div class="unique-project-details-small">
                                <div class="unique-project-details-item">  
                                    <h1 class="unique-project-details-item-header"> Date </h1>
                                    <p class="unique-project-details-item-description"> 02/20/24 </p>
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
                                    <a href="https://github.com/KenM4sters/sandbox_engine" target="_blank" class="unique-project-details-item-description unique-project-link"> View code here </a>
                                </div>
                            </div>
                            <div class="unique-project-details-description">  
                                <h1 class="unique-project-details-item-header"> Description </h1>
                                <p class="unique-project-summary-details">  
                                    A 3D game/graphics engine written in C++ that exposes the OpenGL API. The ambition with this project was to create a sanbbox-style scene involving a variety of different rendering techniques to further solidify my skills in all of C++ programming, applied mathematics and general code structuring.
                                </p>

                                <p class="unique-project-summary-details">  
                                    Features include but are not limited to: terrain rendering, texture loading, 3D model loading, Phong-shading and lighting, FBO(Frame Buffer Output), instance rendering and skybox creation.
                                </p>                            

                                <p class="unique-project-summary-details">  
                                    All-in-all, I've undoubtedly deepend my knowledge of everything from semantics, to proper code structure, to using the OpenGL API and more, which is exactly what I set out to do. This project is far from complete as I look to transition it into a purely terrain-focussed exercise, working on more scenery, shadows, water and more...
                                </p>
                            </div>
                        </div>
                        <div class="project-video-wrapper">
                            <video class="project-video" muted>
                                <source src="static/videos/opengl_engine_demo.mp4" type="video/mp4">
                            </video>
                            <span class="play-video"> PLAY </span>
                        </div>
                    </div>
                </div>
            </div>
            
        `
    }
}