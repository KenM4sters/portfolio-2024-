import Dashboard from './views/Dashboard.js'
import About from './views/About.js';
import Projects from './views/Projects.js' 
import Game from './views/Projects/2DGame.js'
import GameEngine from './views/Projects/3DGameEngine.js'
import GravitySimulator from './views/Projects/GravitySimulator.js'
import PrimeNumbersVisualised from './views/Projects/PrimeNumbersVisualised.js'
import FBOParticles from './views/Projects/FBOParticles.js'
import Portfolio from './views/Projects/Portfolio.js';
import JavaReactApp from './views/Projects/JavaReactApp.js';
import SnakeGame from './views/Projects/SnakeGame.js';
import BankingApp from './views/Projects/BankingApp.js'

import Experience from './Experience/Experience.js'
import EventEmitter from './Experience/Utils/EventEmitter.js';


// Singleton (not necessary)
let instance = null;

export default class Router extends EventEmitter {
    constructor() {
        // Setting singleton
        if(instance)
            return instance;

        super();
        instance = this;

        // Boolean to keep track of whether the user has clicked to enter or not
        window.inExperience = false;
        // Initally set route to null
        this.match = null;
        this.view = null;

        // Allow the user to hit the back button in the browser
        window.addEventListener("popstate", this.router);

        // Override traditional href navigation if the dom element has the data-link tag
        document.addEventListener('DOMContentLoaded', () => {
            document.body.addEventListener('click', (e) => {
                if (e.target.matches("[data-link]")) {
                    e.preventDefault();
                    this.navigateTo(e.target.href);
                    

                    // Appending navbar once preloader button has been clicked
                    if(e.target.classList.contains('preloader-btn')) {
                        this.trigger('EnteringExperience');
                        document.querySelector('#navbar').innerHTML = `
                            <a href="/" class="navbar-unloaded home_button camera_look_forward nav__link" data-link>HOME</a>
                            <a href="/about" class="navbar-unloaded camera_look_right nav__link" data-link>ABOUT</a>
                            <a href="/projects" class="navbar-unloaded camera_look_right nav__link" data-link>PROJECTS</a>
                        `
                    }


                    // Callback function to tell threeJS camera to rotate
                    if(this.match.route.path === '/')
                        this.trigger('viewingHome');
                    else if(this.match.route.path === '/about' || this.match.route.path === '/projects' || this.match.route.group === 'project')
                        this.trigger('viewingAboutOrProjects');
                }
            })


            this.router();
        })

    }

    navigateTo(url) {
        history.pushState(null, null, url);
        this.router();
    }

    // Routes to navigate to and from
    async router() {
        this.routes = [
            {
                path: "/",
                view: new Dashboard(),
                group: 'main'
            },
            {
                path: "/about",
                view: new About(),
                group: 'main'
    
            },
            {
                path: "/projects",
                view: new Projects(),
                group: 'main'
    
            },
            {
                path: "/2DGame",
                view: new Game(),
                group: 'project'
    
            },
            {
                path: "/3DGameEngine",
                view: new GameEngine(),
                group: 'project'
    
            },
            {
                path: "/GravitySimulator",
                view: new GravitySimulator(),
                group: 'project'
    
            },
            {
                path: "/PrimeNumbersVisualised",
                view: new PrimeNumbersVisualised(),
                group: 'project'
    
            },
            {
                path: "/FBOParticles",
                view: new FBOParticles(),
                group: 'project'
    
            },
            {
                path: "/Portfolio",
                view: new Portfolio(),
                group: 'project'
    
            },
            {
                path: "/JavaReactApp",
                view: new JavaReactApp(),
                group: 'project'
    
            },
            {
                path: "/SnakeGame",
                view: new SnakeGame(),
                group: 'project'
            },
            {
                path: "/BankingApp",
                view: new BankingApp(),
                group: 'project'
            }
    
        ];

        // Reset title
        document.title = 'samuel-brookman';
    
        // Test each route 
        this.potentialMatches = this.routes.map(route => {
            return {
                route: route,
                isMatch: location.pathname == route.path
            }
        });
        
        // Finding the correct route for the 'page' that is currently in view
        this.match = this.potentialMatches.find(potentialMatch => potentialMatch.isMatch)
    
        // Allowing/Disallowing scrolling on projects pages to see the images - undecided
        if(this.match.route.group === 'project') {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'hidden';
        }
    
        // Default route if user enters an invalid name
        if(!this.match) {
            this.match = {
                routes: routes[0],
                isMatch: true
            }
        }
    
        this.view = this.match.route.view;
    
        // Get HTML associated with the current route only if the preload button has been clicked
        if(window.inExperience) {
            document.querySelector("#app").innerHTML = await this.view.getHtml();
        }
        else {
            document.querySelector('#app').innerHTML = `
    
                <div class="preloader-wrapper">
                    <div class="preloader-menu">
                        <span class="preloader-icon"></span>
                        <div class="preload-btn-wrapper"></div>
                    </div>
                </div>
            `
        }
        // Since this function is only called when clicking an element with the data-link tag,
        // and the only element present with that tag is the enter button on the preloader,
        // then the user must have clicked it.
        this.video = document.querySelector(".project-video");
        this.playButton = document.querySelector(".play-video"); 
        window.inExperience = true;
        if(this.match.route.group == "project" && this.playButton) {
            this.playButton.addEventListener('click', () => {
                this.video.play();
                this.playButton.classList.add("hide");
                this.video.classList.add("playing");
                this.video.setAttribute("controls", "controls");
            })
        }

    };
}

// Instantiate Router first
const router = new Router();

// Instantiate threeJS experience
const experience = new Experience(document.querySelector('.webgl'))
