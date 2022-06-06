export class StopWatch{
   private _startTime: number;
   private _endTime: number = 0;
    constructor( ){
        this._startTime = new Date().getMilliseconds();
    }
get StartTime(){
    return this._startTime;
}
set StartTime(value: number){
    this._startTime = value;
}
get EndTime(){
    return this._endTime;
}
set EndTime(value: number){
    this._endTime = value;
}
start(): void {
this._startTime = new Date().getMilliseconds();
}
stop() : void {
    this._endTime = new Date().getMilliseconds();
}
getElapsedTime(): number {
    return this._endTime - this._startTime;
}
}