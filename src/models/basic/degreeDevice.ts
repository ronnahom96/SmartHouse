import Device from "./device";

export default class DegreeDevice extends Device {
    degree: number;

    constructor() {
        super();
        this.degree = 0;
    }

    setDegree(degree: number): void {
        this.degree = degree;
    }

    queryDegree(): number {
        return this.degree;
    }
}