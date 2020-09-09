import DegreeDevice from "./basic/degreeDevice";

export default class Microwave extends DegreeDevice {
    timer: number;

    constructor() {
        super();
        this.timer = 0;
    }

    setDegree(degree: number): void {
        if (degree > 30) {
            throw new Error("degree in air microwave cant be above 30");
        } else {
            this.degree = degree;
        }
    }

    setTimer(timer: number): void {
        this.timer = timer;
    }

    queryDegree(): number {
        return this.degree;
    }
}