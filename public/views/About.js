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
                    My name is <strong >Samuel Brookman</strong>, and I'm an aspiring software engineer  
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