"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stopwatch_1 = require("./stopwatch");
let stopwatch = new stopwatch_1.StopWatch();
stopwatch.start();
let sum = 0;
for (let i = 0; i < 10000000; i++) {
    sum += i;
}
stopwatch.stop();
console.log(stopwatch.getElapsedTime());
