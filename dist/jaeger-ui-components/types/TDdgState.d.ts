import { ApiError } from './api-error';
import { fetchedState } from '../constants';
import { TDdgModel } from '../model/ddg/types';
export type TDdgStateEntry = {
    state: typeof fetchedState.LOADING;
} | {
    error: ApiError;
    state: typeof fetchedState.ERROR;
} | {
    model: TDdgModel;
    state: typeof fetchedState.DONE;
    viewModifiers: Map<number, number>;
};
type TDdgState = Record<string, TDdgStateEntry>;
export default TDdgState;
