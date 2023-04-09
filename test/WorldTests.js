import { expect } from "chai";
import World from "../src/logic/World.js";

describe('World', function () {
    // Define a test case for the constructor function
    describe('#constructor', function () {
        it('should create a new World object with the specified width, height, and cells', function () {
            const cells = [[{obstructed: true}, {obstructed: false}], [{obstructed: false}, {obstructed: true}]];
            const world = new World(2, 2, cells);
            expect(world.width).to.equal(2);
            expect(world.height).to.equal(2);
            expect(world.cells).to.deep.equal(cells);
        });
    });
});