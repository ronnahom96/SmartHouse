import express, { Application, Request, Response, NextFunction } from 'express';
import BedroomTV from './models/bedroomTV';
import LivingRoomTV from './models/livingRoomTV';
import Computer from './models/computer';
import AirConditioner from './models/airConditioner';
import Microwave from './models/microwave';
import router from './routes';
import { computerLimit } from './rateLimit';

const app: express.Application = express();

console.log("Welcome to the smart house system");

app.use(router);

app.listen(5000, () => console.log('server running...')); 
