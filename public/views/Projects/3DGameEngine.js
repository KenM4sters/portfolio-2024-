import AbstractView from "../AbstractView.js"

export default class GameEngine extends AbstractView {
    constructor() {
        super();
        this.setTitle("3D-Game-Engine")
    }

    async getHtml() {
        return `
        
            <h1>3D Game Engine</h1>
        
        `
    }
}