import AbstractView from "../AbstractView.js"

export default class PrimeNumbersVisualised extends AbstractView {
    constructor() {
        super();
        this.title = "Prime Numbers Visualised";
        this.date = 2023;
        this.setTitle(this.title);
    }

    async getHtml() {
        return `
        <a href="/" class="view-next-project" data-link> End </a>
        <div class="unique-project-wrapper">
            <h1 class="unique-project-header"> ${this.title} </h1>
            <div class="unique-project-info-wrapper">
                <div class="unique-project-info">
                    <div class="unique-project-details">
                        <div class="unique-project-details-small">
                            <div class="unique-project-details-item">  
                                <h1 class="unique-project-details-item-header"> Date </h1>
                                <p class="unique-project-details-item-description"> 01/09/23 </p>
                            </div>
                            <div class="unique-project-details-item">  
                                <h1 class="unique-project-details-item-header"> Status </h1>
                                <p class="unique-project-details-item-description"> Complete </p>
                            </div>
                            <div class="unique-project-details-item">  
                            <h1 class="unique-project-details-item-header"> Live </h1>
                            <p class="unique-project-details-item-description"> N/A </p>
                            </div>
                            <div class="unique-project-details-item">  
                                <h1 class="unique-project-details-item-header"> Code </h1>
                                <a href="https://github.com/KenM4sters/prime-numbers-visualised" target="_blank" class="unique-project-details-item-description unique-project-link"> View code here </a>
                            </div>
                        </div>
                        <div class="unique-project-details-description">  
                            <h1 class="unique-project-details-item-header"> Description </h1>
                            <p class="unique-project-summary-details">  
                                There’s nothing much really going on here at the moment - the program uses a function to index into an array with all the prime numbers up to an arbitrary count, using a method from an Ancient Greek philosopher, Eratosthenes, known as the “Sieve of Eratosthenes”.
                            </p>                            
                            
                            <p class="unique-project-summary-details">  
                                As far as I’m aware, this method is the most efficient way of collecting prime numbers and from there we take each prime number and generate a polar coordinate using the prime number itself for the r value, and convert that number into radians for the second value. 
                            </p>
                            
                            <p class="unique-project-summary-details">
                                We simply then use this array of polar coordinates as position values for our points. Much like the Gravity Simulator, I plan on developing this project further.   
                            </p>
                        </div>
                    </div>
                    <div class="project-video-wrapper">
                        <video class="project-video" muted>
                            <source src="static/videos/prime-numbers-demo.mp4" type="video/mp4">
                        </video>
                        <span class="play-video"> PLAY </span>
                    </div>
                </div>
            </div>
        </div>

        `
    }
}