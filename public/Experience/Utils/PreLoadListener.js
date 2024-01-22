import EventEmitter from "./EventEmitter.js"

export default class PreLoadListener extends EventEmitter {
    constructor() {
        super();
        window.addEventListener("DOMContentLoaded", (e) => {
            this.enterButton = document.querySelector('.preloader-button');
            this.navbar = document.querySelectorAll('.navbar-unloaded');
            this.listenToClick();
        })
    }

    listenToClick() {
        this.enterButton.addEventListener('click', () => {
            this.trigger('EnteringExperience');

            for(let i = 0; i < this.navbar.length; i++) {
                this.navbar[i].classList.remove('navbar-unloaded');
                this.navbar[i].classList.add('nav__link');
            }
            
        })
    }
}