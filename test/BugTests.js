import { expect } from "chai";
import Bug from "../src/logic/Entities/Bug.js";
import {Color} from "../src/logic/GeneralClasses/General.js"
import Position from "../src/logic/GeneralClasses/Position.js";


describe("Bug", () => {
    describe('#constructor', () => {
        it('should create a new Bug instance with valid parameters', () => {
            const color = new Color(255, 0, 0);
            const xPos = 10;
            const yPos = 20;
            const world = {};
            const instructions = [];
            const bug = new Bug(color, xPos, yPos, world, instructions);

            expect(bug).to.be.an.instanceof(Bug);
            expect(bug.color).to.deep.equal(color);
            expect(bug.position).to.deep.equal(new Position(xPos, yPos));
            expect(bug.resting).to.equal(14);
            expect(bug.direction).to.equal(0);
            expect(bug.hasFood).to.be.false;
            expect(bug.instructionPos).to.equal(0);
        });

        it('should throw an error if an invalid color is passed', () => {
            const invalidColor = 'not a color';
            const xPos = 10;
            const yPos = 20;
            const world = {};
            const instructions = [];

            expect(() => new Bug(invalidColor, xPos, yPos, world, instructions)).to.throw('Bug constructor failed: an element of the wrong type was passed in the color field');
        });

        it('should throw an error if xPos is not an integer', () => {
            const color = new Color(255, 0, 0);
            const invalidXPos = 'not an integer';
            const yPos = 20;
            const world = {};
            const instructions = [];

            expect(() => new Bug(color, invalidXPos, yPos, world, instructions)).to.throw('Bug constructor failed: xPos should be int');
        });

        it('should throw an error if yPos is not an integer', () => {
            const color = new Color(255, 0, 0);
            const xPos = 10;
            const invalidYPos = 'not an integer';
            const world = {};
            const instructions = [];

            expect(() => new Bug(color, xPos, invalidYPos, world, instructions)).to.throw('Bug constructor failed: yPos should be int');
        });
    });

    describe('#getPosition', () => {
        it('should return the Bug\'s position', () => {
            const color = new Color(255, 0, 0);
            const xPos = 10;
            const yPos = 20;
            const world = {};
            const instructions = [];
            const bug = new Bug(color, xPos, yPos, world, instructions);

            expect(bug.getPosition()).to.deep.equal(new Position(xPos, yPos));
        });
    });

    describe('#setPosition', () => {
        it('should set the Bug\'s position to a new Position object', () => {
            const color = new Color(255, 0, 0);
            const xPos = 10;
            const yPos = 20;
            const world = {};
            const instructions = [];
            const bug = new Bug(color, xPos, yPos, world, instructions);
            const newPosition = new Position(5, 15);

            bug.setPosition(newPosition);

            expect(bug.getPosition()).to.deep.equal(newPosition);
        });
    });
});