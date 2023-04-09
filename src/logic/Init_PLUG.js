// default map
const defaultMap = 
"10\n" +
"10\n" +
"# # # # # # # # # #\n" +
"# 9 9 . . . . 3 3 #\n" +
"# 9 # . - - - . - # #\n" +
"# . # - - - - - - #\n" +
"# . . 5 - - - - - #\n" +
"# + + + + + 5 . . #\n" +
"# + + + + + + # . #\n" +
"# + + + + + . # 9 #\n" +
"# 3 3 . . . . 9 9 #\n" +
"# # # # # # # # # #";

// Define Initializer class
class Initializer {
    constructor() {
        // Load map and create world object
        let mapLoader = new MapLoader(defaultMap);
        let world = new World(mapLoader.width, mapLoader.height, mapLoader.cells);
        // Set the last simulation cycle time
        this.last = Date.now();
        // Create simulator object
        this.simulator = new Simulator(world);
        // Set font and color for context
        ctx.fillStyle = "#000";
        ctx.font = "24px Verdana";
        // Load black bug images
        for (let i = 0; i < 6; i++) {
            bugBlack[i] = new Image();
            bugBlack[i].src = "img/bugBlack" + (i + 1) % 6 + ".png";
        }
    }


    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    // Define draw method to simulate and draw world
    draw() {
        // Wait time till the next cycle
        this.sleep(500).then( () => {
                // Simulate one cycle
                this.simulator.simulateOneCycle();
                // Update last cycle time
                this.last = Date.now();
            // Request next animation frame for drawing
            requestAnimationFrame(() => this.draw());
        });
    }

}




