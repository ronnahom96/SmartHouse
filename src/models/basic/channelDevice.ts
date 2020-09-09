import Device from "./device";

export default class ChannelDevice extends Device {
    channel: number;

    constructor() {
        super();
        this.channel = 1;
    }

    switchChannel(channel: number): void {
        this.channel = channel;
    }

    queryChannel(): number {
        return this.channel;
    }
}