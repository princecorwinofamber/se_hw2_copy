import {readTextFile} from "../GeneralClasses/General.js";
import Instruction from "./Instruction.js";


export default class SimpleAssembler {
    constructor(filePath, world) {
        this.instructions = []
        let text = readTextFile(filePath)
        let sep = text.indexOf("\r") >= 0 ? "\r\n" : "\n";
        let linesOfCode = text.split(sep)
        for (let i = 0; i < linesOfCode.length; i++) {
            this.instructions[i] = new Instruction(linesOfCode[i], world, i)
        }
    }
}