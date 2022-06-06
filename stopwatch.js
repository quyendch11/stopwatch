"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopWatch = void 0;
class StopWatch {
    constructor() {
        this._endTime = 0;
        this._startTime = new Date().getMilliseconds();
    }
    get StartTime() {
        return this._startTime;
    }
    set StartTime(value) {
        this._startTime = value;
    }
    get EndTime() {
        return this._endTime;
    }
    set EndTime(value) {
        this._endTime = value;
    }
    start() {
        this._startTime = new Date().getMilliseconds();
    }
    stop() {
        this._endTime = new Date().getMilliseconds();
    }
    getElapsedTime() {
        return this._endTime - this._startTime;
    }
}
exports.StopWatch = StopWatch;
