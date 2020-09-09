import express, { Application, Request, Response, NextFunction } from 'express';
import BedroomTV from './models/bedroomTV';
import Microwave from './models/microwave';

const app: express.Application = express();

let microwave = new Microwave();
microwave.turnOnOff()

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('hello');
});

app.listen(5000, () => console.log('server running...'));