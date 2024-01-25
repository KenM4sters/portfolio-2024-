import AbstractView from "../AbstractView.js"

export default class PrimeNumbersVisualised extends AbstractView {
    constructor() {
        super();
        this.title = "Prime Numbers Visualised";
        this.setTitle(this.title);
    }

    async getHtml() {
        return `
            <a href="/RestAPI" class="view-next-project" data-link> View next </a>
            <div class="unique-project-wrapper">
                <h1 class="unique-project-header" style="font-size: calc(0.20rem + 4vw)"> ${this.title} </h1>
                <div class="unique-project-info-wrapper">
                    <div class="unique-project-info">
                        <div class="unique-project-details">
                            <div class="unique-project-details-item">  
                                <h1 class="unique-project-details-item-header"> Date </h1>
                                <p class="unique-project-details-item-description"> 10/01/24 </p>
                            </div>
                            <div class="unique-project-details-item">  
                                <h1 class="unique-project-details-item-header"> Status </h1>
                                <p class="unique-project-details-item-description"> On-going </p>
                            </div>
                            <div class="unique-project-details-item">  
                                <h1 class="unique-project-details-item-header"> Live </h1>
                                <p class="unique-project-details-item-description"> N/A </p>
                            </div>
                            <div class="unique-project-details-item">  
                                <h1 class="unique-project-details-item-header"> Code </h1>
                                <a href="https://github.com/KenM4sters/prime-numbers-visualised" target="_blank" class="unique-project-details-item-description"> View code here </a>
                            </div>
                        </div>
                        <div class="unique-project-summary">
                            <p class="unique-project-summary-details">  
                                When displayed using Polar Coordinates (r, angle) as opposed to standard Cartesian (x, y, z), prime numbers are known to exhibit some really visually fascinating patterns. While looking somewhat disordered in the first hundred-thousand primes, beyond that clear spirals can be identified, something which I thought would be cool to show using threeJS. 
                            </p>

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
                </div>
            </div>
            <div class="unique-project-images-wrapper">
            <div class="images-container"> 
                <div class="large-image-wrapper">
                    <img src="static/images/japan.jpg" class="large-image" alt="game-demo" /> 
                </div>
                <div class="small-image-wrapper">
                    <img src="static/images/japan.jpg" class="small-image" alt="game-demo" /> 
                    <img src="static/images/japan.jpg" class="small-image" alt="game-demo" /> 
                </div> 
            </div
        </div>
        `
    }
}