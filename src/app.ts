import express, { Application, Request, Response, NextFunction } from 'express';
import Person from './models/person';

const app: express.Application = express();

let person = new Person("world");
console.log(person.name);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('hello');
});

app.listen(5000, () => console.log('server running...'));