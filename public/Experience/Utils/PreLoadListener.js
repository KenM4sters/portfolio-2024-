import EventEmitter from "./EventEmitter.js"

export default class PreLoadListener extends EventEmitter {
    constructor() {
        super();
        window.addEventListener("DOMContentLoaded", (e) => {
            this.enterButton = document.querySelector('.preloader-button');
            this.listenToClick();
        })
    }

    listenToClick() {
        this.enterButton.addEventListener('click', () => {
            this.trigger('EnteringExperience');
        })
    }
}