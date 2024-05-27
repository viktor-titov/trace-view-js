import { TNil } from './types';
interface ITweenState {
    done: boolean;
    value: number;
}
type TTweenCallback = (state: ITweenState) => void;
type TTweenOptions = {
    delay?: number;
    duration: number;
    from: number;
    onComplete?: TTweenCallback;
    onUpdate?: TTweenCallback;
    to: number;
};
export default class Tween {
    callbackComplete: TTweenCallback | TNil;
    callbackUpdate: TTweenCallback | TNil;
    delay: number | TNil;
    duration: number;
    from: number;
    requestID: number | TNil;
    startTime: number;
    timeoutID: number | TNil;
    to: number;
    constructor({ duration, from, to, delay, onUpdate, onComplete }: TTweenOptions);
    _frameCallback: () => void;
    cancel(): void;
    getCurrent(): ITweenState;
}
export {};
