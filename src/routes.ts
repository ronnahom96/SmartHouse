import express, { Application, Request, Response, NextFunction } from 'express';
import DeviceHandler from './deviceHandler';
import { computerLimit, roomsLimit, airConditionerLimit } from './rateLimit';

const router = express.Router();

const deviceHandler: DeviceHandler = new DeviceHandler();

// Set limitation
router.use('/computer', computerLimit);
router.use('/bedroomTV', roomsLimit);
router.use('/livingRoomTV', roomsLimit);
router.use('/airConditioner', airConditionerLimit);

router.get("/bedroomTV/queryStatus", function (req: Request, res: Response) {
    const status = deviceHandler.bedroomTV.queryStatus();
    res.send(status);
});

router.get("/microwave/queryStatus", function (req: Request, res: Response) {
    const status = deviceHandler.microwave.queryStatus();
    res.send(status);
});

router.get("/computer/queryStatus", function (req: Request, res: Response) {
    const status = deviceHandler.computer.queryStatus();
    res.send(status);
});

router.get("/livingRoomTV/queryStatus", function (req: Request, res: Response) {
    const status = deviceHandler.livingRoomTV.queryStatus();
    res.send(status);
});

router.get("/airConditioner/queryStatus", function (req: Request, res: Response) {
    const status = deviceHandler.airConditioner.queryStatus();
    res.send(status);
});

router.get("/airConditioner/turnOnOff", function (req: Request, res: Response) {
    deviceHandler.airConditioner.turnOnOff();
    res.send("airConditioner turnOnOff");
});

router.get("/bedroomTV/turnOnOff", function (req: Request, res: Response) {
    deviceHandler.bedroomTV.turnOnOff();
    res.send("bedroomTV turnOnOff");
});

router.get("/microwave/turnOnOff", function (req: Request, res: Response) {
    deviceHandler.microwave.turnOnOff();
    res.send("microwave turnOnOff");
});

router.get("/computer/turnOnOff", function (req: Request, res: Response) {
    deviceHandler.computer.turnOnOff();
    res.send('computer turnOnOff');
});

router.get("/livingRoomTV/turnOnOff", function (req: Request, res: Response) {
    deviceHandler.livingRoomTV.turnOnOff();
    res.send('livingRoomTV turnOnOff');
});

router.get("/bedroomTV/queryChannel", function (req: Request, res: Response) {
    const channel = deviceHandler.bedroomTV.queryChannel().toString();
    res.send(channel);
});

router.get("/livingRoomTV/queryChannel", function (req: Request, res: Response) {
    const channel = deviceHandler.livingRoomTV.queryChannel().toString();
    res.send(channel);
});

router.get("/bedroomTV/switchChannel", function (req: Request, res: Response) {
    const channel: any = req.query.channel;
    deviceHandler.bedroomTV.switchChannel(channel);
    res.send('bedroomTV switchChannel');
});

router.get("/livingRoomTV/switchChannel", function (req: Request, res: Response) {
    const channel: any = req.query.channel;
    deviceHandler.livingRoomTV.switchChannel(channel);
    res.send('livingRoomTV switchChannel');
});

router.get("/microwave/queryDegree", function (req: Request, res: Response) {
    const degree = deviceHandler.microwave.queryDegree().toString();
    res.send(degree);
});

router.get("/airConditioner/QueryDegree", function (req: Request, res: Response) {
    const degree = deviceHandler.airConditioner.queryDegree().toString();
    res.send(degree);
});

router.get("/microwave/setDegree", function (req: Request, res: Response) {
    const degree: any = req.query.degree;
    deviceHandler.microwave.setDegree(degree);
    res.send('microwave setDegree');
});

router.get("/airConditioner/setDegree", function (req: Request, res: Response) {
    const degree: any = req.query.degree;
    deviceHandler.airConditioner.setDegree(degree);
    res.send('airConditioner setDegree');
});

export default router;

