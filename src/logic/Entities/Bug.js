const DEFAULT_RESTING = 14;
class Bug {
    static curId = 0;

    constructor(color, xPos, yPos, world, instructions) {
        assert(color instanceof Color, "Bug constructor failed: an element of the wrong type was passed in the color field");
        assert(xPos == null || Number.isInteger(xPos), "Bug constructor failed: xPos should be int");
        assert(yPos == null || Number.isInteger(yPos), "Bug constructor failed: yPos should be int");
        this.world = world
        this.bugId = Bug.curId++;
        this.color = color;
        this.position = new Position(xPos, yPos)
        this.resting = DEFAULT_RESTING;
        this.direction = 0;
        this.hasFood = false;
        this.instructionPos = 0;
        this.stateMachine = new StateMachine(instructions, this)
    }

    drawBug() {
        if (this.position.y % 2 === 0) {
            ctx.drawImage(bugBlack[this.direction], this.position.x * 50 + 16 - (bugBlack[this.direction].width - 32) / 2,
                this.position.y * 44 + 16 - (bugBlack[this.direction].height - 32) / 2, bugBlack[this.direction].width,
                bugBlack[this.direction].height);
        } else {
            ctx.drawImage(bugBlack[this.direction], this.position.x * 50 + 41 - (bugBlack[this.direction].width - 32) / 2,
                this.position.y * 44 + 16 - (bugBlack[this.direction].height - 32) / 2, bugBlack[this.direction].width,
                bugBlack[this.direction].height);
        }
    }

    update() {
        this.stateMachine.proceedInstruction();
        this.drawBug()
    }


    kill() {
        //TODO
    }

    getPosition() {
        return this.position;
    }

    setPosition(pos) {
        this.position = pos
    }

    getColor() {
        return this.color;
    }

    turnLeft() {
        this.direction = (this.direction + 5) % 6;
    }

    turnRight() {
        this.direction = (this.direction + 1) % 6;
    }
}
