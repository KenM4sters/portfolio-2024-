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

import Sketch from './Experience/main.js';

const sketch = new Sketch();

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}


const router = async () => {
    const routes = [
        {
            path: "/dashboard",
            view: new Dashboard(),
        },
        {
            path: "/about",
            view: new About(),

        },
        {
            path: "/projects",
            view: new Projects(),

        },
        {
            path: "/2DGame",
            view: new Game(),

        },
        {
            path: "/3DGameEngine",
            view: new GameEngine(),

        },
        {
            path: "/GravitySimulator",
            view: new GravitySimulator(),

        },
        {
            path: "/PrimeNumbersVisualised",
            view: new PrimeNumbersVisualised(),

        },
        {
            path: "/RestAPI",
            view: new RestAPI(),

        },
        {
            path: "/BlogWebsite",
            view: new BlogWebsite(),

        },
        {
            path: "/FBOParticles",
            view: new FBOParticles(),

        },

    ];

    // Test each route 
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname == route.path
        }
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

    if(!match) {
        match = {
            routes: routes[0],
            isMatch: true
        }
    }

    const view = match.route.view;

    document.querySelector("#app").innerHTML = await view.getHtml();

};

window.addEventListener("popstate", router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})
