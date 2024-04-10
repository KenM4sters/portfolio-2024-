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
                <div class="info-header-wrapper">
                    <h1 class="about-content about-heading">About me</h1>
                </div>
                <p class="about-content about-para">
                    My name is Samuel Brookman, and I’m an aspiring professional <strong>Graphics Programmer</strong> with a keen interest in rendering high-fidelity, photo-realistic graphics in <strong>real-time</strong> applications. 
                    I have extensive experience writing C++ and using graphics APIs such as OpenGL and, on a more amateur level, Vulkan, although I intend to invest a lot more time into learning DirectX/Vulkan in the near future. 
                    I also enjoy brining high quality graphics rendering to the web with TypeScript and WebGL.
                </p>
                <p class="about-content about-para">
                    I was introduced to my very first video game when I was just 4 years old, and I've been captivated by them ever since.
                    It was only more recently though that I realised that developing them is exactly
                    what I want to spend the rest of my life doing.
                </p>
                <p class="about-content about-para">
                    Looking forward, my priorities are clear - to surround myself with talented
                    developers/engineers from whom to learn as much as humanly possible about 
                    writing professional-grade graphics applications, and to help other people
                    with a similar vision to me achieve their goals. 
                </p>
            </div>
        </div>
        <ul class="skills-list">
            <li class="skills-item" id="C++"> C++ </li>
            <li class="skills-item" id="OpenGL"> OpenGL </li>
            <li class="skills-item" id="WeblGL"> WebGL </li>
            <li class="skills-item" id="C"> C </li>
            <li class="skills-item" id="Typescript"> Typescript </li>
            <li class="skills-item" id="Java"> Java </li>
            <li class="skills-item" id="Python"> Python </li>
            <li class="skills-item" id="Javascript"> Javascript </li>
            <li class="skills-item" id="Spring"> Spring </li>
            <li class="skills-item" id="React"> React </li>
            <li class="skills-item" id="PostgreSQL"> PostgreSQL </li>
            <li class="skills-item" id="ThreeJS"> ThreeJS </li>
            <li class="skills-item" id="Renderdoc"> Renderdoc </li>
            <li class="skills-item" id="Valgrind"> Valgrind </li>
            <li class="skills-item" id="Blender"> Blender </li>
            <li class="skills-item" id="Git"> Git </li>
            <li class="skills-item" id="Linux"> Linux </li>
            <li class="skills-item" id="MacOS"> MacOS </li>
            <li class="skills-item" id="Docker"> Docker </li>
            <li class="skills-item" id="GCP"> Google Cloud </li>
        </ul>
        <div class="about-options-wrapper">
            <div class="about-options-container">
                <a href="https://github.com/KenM4sters" target="_blank" class="about-option-large"> GITHUB </a>
                <a href="mailto:sam.brookman414@hotmail.com" target="_blank" class="about-option-small"> CONTACT </a>
            </div>
        </div>
        `
    }
}