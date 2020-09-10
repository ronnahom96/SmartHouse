import rateLimit from "express-rate-limit";

export const roomsLimit = rateLimit({
    windowMs: 3 * 1000,
    max: 1
});

export const computerLimit = rateLimit({
    windowMs: 5 * 1000,
    max: 10
});

export const airConditionerLimit = rateLimit({
    windowMs: 4 * 1000,
    max: 2
});