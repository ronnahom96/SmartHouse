import {
    QUERY_BEDROOM_TV_STATUS,
    QUERY_MICROWAVE_STATUS,
    QUERY_AIR_CONDITIONER_DEGREES,
    QUERY_COMPUTER_STATUS,
    QUERY_LIVING_ROOM_TV_STATUS,
    QUERY_AIR_CONDITIONER_STATUS,
    TURN_ON_OFF_AIR_CONDITIONER,
    TURN_ON_OFF_LIVING_ROOM_TV,
    TURN_ON_OFF_BEDROOM_TV,
    TURN_ON_OFF_COMPUTER,
    TURN_ON_OFF_MICROWAVE,
    QUERY_BEDROOM_TV_CHANNEL,
    QUERY_LIVING_ROOM_TV_CHANNEL,
    SWITCH_BEDROOM_TV_CHANNEL,
    SWITCH_LIVING_ROOM_TV_CHANNEL,
    QUERY_MICROWAVE_DEGREES,
    SET_MICROWAVE_DEGREE_AND_TIMER,
    SET_AIR_CONDITIONER_DEGREE
} from './commands';
import BedroomTV from './models/bedroomTV';
import LivingRoomTV from './models/livingRoomTV';
import Computer from './models/computer';
import AirConditioner from './models/airConditioner';
import Microwave from './models/microwave';

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

// Create devices
let bedroomTV: BedroomTV = new BedroomTV();
let livingRoomTV: LivingRoomTV = new LivingRoomTV();
let computer: Computer = new Computer();
let airConditioner: AirConditioner = new AirConditioner();
let microwave: Microwave = new Microwave();

console.log("Welcome to the smart house system");

rl.setPrompt('Please enter a command: ');
rl.prompt();

rl.on('line', async function (command: string) {
    switch (command) {
        case (QUERY_BEDROOM_TV_STATUS): {
            console.log(bedroomTV.queryStatus());
            break
        }
        case (QUERY_MICROWAVE_STATUS): {
            console.log(microwave.queryStatus());
            break;
        }
        case (QUERY_COMPUTER_STATUS): {
            console.log(computer.queryStatus());
            break;
        }
        case (QUERY_LIVING_ROOM_TV_STATUS): {
            console.log(livingRoomTV.queryStatus());
            break;
        }
        case (QUERY_AIR_CONDITIONER_STATUS): {
            console.log(airConditioner.queryStatus());
            break;
        }
        case (TURN_ON_OFF_AIR_CONDITIONER): {
            console.log(airConditioner.turnOnOff());
            break;
        }
        case (TURN_ON_OFF_LIVING_ROOM_TV): {
            console.log(livingRoomTV.turnOnOff());
            break;
        }
        case (TURN_ON_OFF_BEDROOM_TV): {
            console.log(bedroomTV.turnOnOff());
            break;
        }
        case (TURN_ON_OFF_COMPUTER): {
            console.log(computer.turnOnOff());
            break;
        }
        case (TURN_ON_OFF_MICROWAVE): {
            console.log(microwave.turnOnOff());
            break;
        }
        case (QUERY_BEDROOM_TV_CHANNEL): {
            console.log(bedroomTV.queryChannel());
            break;
        }
        case (QUERY_LIVING_ROOM_TV_CHANNEL): {
            console.log(livingRoomTV.queryChannel());
            break;
        }

        case (SWITCH_BEDROOM_TV_CHANNEL): {
            const switchChannel = () => {
                return new Promise((resolve, reject) => {
                    rl.question('Choose channel: ', (channel: number) => {
                        bedroomTV.switchChannel(channel)
                        resolve()
                    })
                })
            }

            await switchChannel();

            break;
        }
        case (SWITCH_LIVING_ROOM_TV_CHANNEL): {
            const switchChannel = () => {
                return new Promise((resolve, reject) => {
                    rl.question('Choose channel: ', (channel: number) => {
                        livingRoomTV.switchChannel(channel)
                        resolve()
                    })
                })
            }

            await switchChannel();

            break;
        }

        case (QUERY_MICROWAVE_DEGREES): {
            console.log(microwave.queryDegree());
            break;
        }
        case (QUERY_AIR_CONDITIONER_DEGREES): {
            console.log(airConditioner.queryDegree());
            break;
        }

        case (SET_MICROWAVE_DEGREE_AND_TIMER): {
            const setDegree = () => {
                return new Promise((resolve, reject) => {
                    rl.question('Choose degree: ', (degree: number) => {
                        if (degree > 30) {
                            console.log("degree in air microwave cant be above 30");
                        } else {
                            microwave.setDegree(degree)
                        }

                        resolve()
                    })
                })
            }

            await setDegree();
            break;
        }
        case (SET_AIR_CONDITIONER_DEGREE): {
            const setDegree = () => {
                return new Promise((resolve, reject) => {
                    rl.question('Choose degree: ', (degree: number) => {
                        if (degree > 30 || degree < 10) {
                            console.log("degree in air conditioner cant be above 30 or less than 10");
                        } else {
                            airConditioner.setDegree(degree)
                        }

                        resolve()
                    })
                })
            }

            await setDegree();
            break;
        }
        case ('exit'): {
            rl.close();
            break;
        }
        default: {
            console.log("invalid command");
            break;
        }
    }
    rl.prompt();
}).on('close', function () {
    console.log('Have a great day!');
    process.exit(0);
});