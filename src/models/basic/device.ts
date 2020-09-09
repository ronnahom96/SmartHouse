export default class Device {
    status: boolean;

    constructor() {
        this.status = false;
    }

    turnOnOff(): void {
        this.status = !this.status;
    }

    queryStatus(): boolean {
        return this.status;
    }
}