import * as React from 'react';
import { FetchedState, TNil } from '../types';
import { ApiError } from '../types/api-error';
type Props = {
    className?: string;
    error?: ApiError | TNil;
    state?: FetchedState | TNil;
    traceName?: string | TNil;
};
export default function TraceName(props: Props): React.JSX.Element;
export {};
