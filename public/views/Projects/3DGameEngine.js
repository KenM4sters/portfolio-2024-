import AbstractView from "../AbstractView.js"

export default class GameEngine extends AbstractView {
    constructor() {
        super();
        this.title = "3D Game Engine";
        this.setTitle(this.title);
    }

    async getHtml() {
        return `
        
            <h1>3D Game Engine</h1>
        
        `
    }
}