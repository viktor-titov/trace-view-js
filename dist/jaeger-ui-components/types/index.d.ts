import { ApiError } from './api-error';
import { Trace } from './trace';
export * from './trace';
export { default as TTraceTimeline } from './TTraceTimeline';
export { default as TNil } from './TNil';
export type FetchedState = 'FETCH_DONE' | 'FETCH_ERROR' | 'FETCH_LOADING';
export type FetchedTrace = {
    data?: Trace;
    error?: ApiError;
    id: string;
    state?: FetchedState;
};
