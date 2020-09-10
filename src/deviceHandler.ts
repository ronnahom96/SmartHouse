import BedroomTV from "./models/bedroomTV";
import Microwave from "./models/microwave";
import AirConditioner from "./models/airConditioner";
import Computer from "./models/computer";
import LivingRoomTV from "./models/livingRoomTV";

export default class DeviceHandler {
    bedroomTV: BedroomTV;
    livingRoomTV: LivingRoomTV;
    computer: Computer;
    airConditioner: AirConditioner
    microwave: Microwave;

    constructor() {
        this.bedroomTV = new BedroomTV();
        this.livingRoomTV = new LivingRoomTV();
        this.computer = new Computer();
        this.airConditioner = new AirConditioner();
        this.microwave = new Microwave();
    }
}