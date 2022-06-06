import { StopWatch } from "./stopwatch";
let stopwatch : StopWatch = new StopWatch();
stopwatch.start();
let sum = 0;
for (let i = 0; i < 10000000;i++) {
    sum +=i;
}
stopwatch.stop();
console.log(stopwatch.getElapsedTime());
