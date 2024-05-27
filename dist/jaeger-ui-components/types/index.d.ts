import { ApiError } from './api-error';
import { Trace } from './trace';
export * from './trace';
export * from './TNil';
export * from './TTraceTimeline';
export type FetchedState = 'FETCH_DONE' | 'FETCH_ERROR' | 'FETCH_LOADING';
export type FetchedTrace = {
    data?: Trace;
    error?: ApiError;
    id: string;
    state?: FetchedState;
};
