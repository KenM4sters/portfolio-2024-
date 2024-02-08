import AbstractView from "./AbstractView.js";

export default class About extends AbstractView {
    constructor() {
        super();
        this.setTitle("About");
    }


    async getHtml() {
        return `
        <div class="about-wrapper">
            <div class="info-wrapper">
                <h1 class="about-content about-heading">About me</h1>
                <p class="about-content about-para">
                    My name is <strong >Samuel Brookman</strong>, and I'm an aspiring software developer  
                    looking to implement my skills into the real world.
                    I have a passion for <strong class="text-gray-300">low level programming</strong> in <strong class="text-gray-300">C++</strong>, as well
                    as exploring the world of full-stack web development in frameworks/libraries like <strong>Spring(Java)</strong> and <strong>React(JS)</strong>.
                </p>
                <p class="about-content about-para">
                    I have experience in several different fields of programming, with my most recent endeavours involving
                    the exploration of the threeJS library that wraps around the WebGL API to simplify 3D rendering to the web.
                </p>
                <p class="about-content about-para">
                    Looking forward, my priorities are clear - to surround myself with talented
                    developers/engineers from whom to learn not only how to write professional-grade
                    programs themselves, but how to write them efficiently and idiomatically.
                </p>
                <div class=" about-content contact-icons-wrapper">
                    <a class="icon" href="https://github.com/KenM4sters?tab=repositories" target="_blank"><i class="fa-brands fa-square-github fa-2xl" style="color: #002e7a;"></i></a>
                    <a class="icon" href="mailto:sam.brookman414@hotmail.com"><i class="fa-solid fa-envelope fa-2xl" style="color: #63E6BE;"></i></a>
                </div>
            </div>
            <div class="skills-wrapper">
                <h1 class="skills-heading">Skills</h1>
                <div class="skills-box">
                    <div class="skills-info-wrapper">
                        <div class="skills-list-wrapper">
                            <ul class="skills-list">
                                <li class="skills-item"> C++ </li>
                                <li class="skills-item"> Java </li>
                                <li class="skills-item"> C </li>
                                <li class="skills-item"> Typescript </li>
                                <li class="skills-item"> Javascript </li>
                                <li class="skills-item"> Spring </li>
                                <li class="skills-item"> React </li>
                                <li class="skills-item"> PostgreSQL </li>
                                <li class="skills-item"> OpenGL </li>
                                <li class="skills-item"> threeJS </li>
                                <li class="skills-item"> Linux </li>
                                <li class="skills-item"> Docker </li>
                                <li class="skills-item"> Google Cloud </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        `
    }
}