import Device from "./basic/device";
import DegreeDevice from "./basic/degreeDevice";

export default class AirConditioner extends DegreeDevice {
    setDegree(degree: number): void {
        if (degree > 30 || degree < 10) {
            throw new Error("degree in air conditioner cant be above 30 or less than 10");
        } else {
            this.degree = degree;
        }
    }

    queryDegree(): number {
        return this.degree;
    }
}