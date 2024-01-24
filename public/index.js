import Dashboard from './views/Dashboard.js'
import About from './views/About.js';
import Projects from './views/Projects.js' 
import Game from './views/Projects/2DGame.js'
import GameEngine from './views/Projects/3DGameEngine.js'
import GravitySimulator from './views/Projects/GravitySimulator.js'
import PrimeNumbersVisualised from './views/Projects/PrimeNumbersVisualised.js'
import RestAPI from './views/Projects/RestAPI.js'
import BlogWebsite from './views/Projects/BlogWebsite.js'
import FBOParticles from './views/Projects/FBOParticles.js'

import Experience from './Experience/Experience.js'


window.inExperience = false;


const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

// Routes to navigate to and from
const router = async () => {
    const routes = [
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
            path: "/RestAPI",
            view: new RestAPI(),
            group: 'project'

        },
        {
            path: "/BlogWebsite",
            view: new BlogWebsite(),
            group: 'project'

        },
        {
            path: "/FBOParticles",
            view: new FBOParticles(),
            group: 'project'

        },

    ];

    // Test each route 
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname == route.path
        }
    });

    // Finding the correct route for the 'page' that is currently in view
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

    // Allowing scrolling on projects pages to see images
    if(match.route.group === 'project') {
        document.body.style.overflow = 'visible';
    }
    else {
        document.body.style.overflow = 'hidden';
    }

    // Default route if user enters an invalid name
    if(!match) {
        match = {
            routes: routes[0],
            isMatch: true
        }
    }

    const view = match.route.view;


    // Get HTML associated with the current route only if the preload button has been clicked
    if(window.inExperience)
        document.querySelector("#app").innerHTML = await view.getHtml();
    else 
        document.querySelector('#app').innerHTML = `

            <div class="preloader-wrapper">
                <div class="preloader-menu">
                    <a class="preloader-btn" data-link> Enter </a>
                </div>
            </div>
        `
        // Since this function is only called when clicking an element with the data-link tag,
        // and the only element present with that tag is the enter button on the preloader,
        // then the user must have clicked it. 
        window.inExperience = true;
};


// Allow the user to hit the back button in the browser
window.addEventListener("popstate", router);

// Override traditional href navigation if the dom element has the data-link tag
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})

// Instantiate threeJS experience
const experience = new Experience(document.querySelector('.webgl'))
