import AbstractView from "../AbstractView.js"

export default class Raytracer extends AbstractView {
    constructor() {
        super();
        this.title = "Raytracer (Work in progress)";
        this.date = 2024;
        this.setTitle(this.title);
    }

    async getHtml() {
        return `
            <a href="/PBRRenderer" class="view-next-project" data-link> View next </a>
            <div class="unique-project-wrapper">
                <h1 class="unique-project-header"> ${this.title} </h1>
                <div class="unique-project-info-wrapper">
                    <div class="unique-project-info">
                        <div class="unique-project-details">
                            <div class="unique-project-details-small">
                                <div class="unique-project-details-item">  
                                    <h1 class="unique-project-details-item-header"> Date </h1>
                                    <p class="unique-project-details-item-description"> 04/03/24 </p>
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
                                    <a href="https://github.com/KenM4sters/ray_tracer_imgui" target="_blank" class="unique-project-details-item-description unique-project-link"> View code here </a>
                                </div>
                            </div>
                            <div class="unique-project-details-description">  
                                <h1 class="unique-project-details-item-header"> Description </h1>
                                <p class="unique-project-summary-details">  
                                    Producing the most high-fidelty, photo-realistic graphics with as little peformance overhead as possible is a huge passion of mine, and what I love the most about 3D graphics programming. There's just something about outputting real-life visuals through programmatically emulating the way light interacts with materials and mediums that I find not only inredibly interesting, but also very rewarding.  
                                </p>

                                <p class="unique-project-summary-details">  
                                    Another aspect of programming that I've taken an avid interest in since writing my first Hello World program is optimising code to be as fast possible while maintaing a competitive level of capibility. It comes as no surprise therefore, that building raytracers to draw photo-realistic graphics to the screen in as close to real-time as possible is a real hobby of mine. While so far this project only uses the GPU for the final texture rendering and runs almost all computations on the CPU, this will be changed in the near future as I look to hook the Vulkan API much deeper into the application.
                                </p>                            

                                <p class="unique-project-summary-details">  
                                </p>
                            </div>
                        </div>
                        <div class="project-video-wrapper">
                        <video class="project-video" muted>
                            <source src="static/videos/raytracer_demo.mp4" type="video/mp4">
                                </video>
                            <span class="play-video"> PLAY </span>
                        </div>
                    </div>
                </div>
            </div>
            
        `
    }
}