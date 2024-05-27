import * as React from 'react';
import { TUpdateViewRangeTimeFunction, ViewRange, ViewRangeTimeUpdate } from '..';
import { TNil } from '../types';
import { Trace } from '..';
type TracePageHeaderEmbedProps = {
    canCollapse: boolean;
    clearSearch: () => void;
    focusUiFindMatches: () => void;
    hideMap: boolean;
    hideSummary: boolean;
    nextResult: () => void;
    onSlimViewClicked: () => void;
    onTraceGraphViewClicked: () => void;
    prevResult: () => void;
    resultCount: number;
    slimView: boolean;
    textFilter: string | TNil;
    trace: Trace;
    traceGraphView: boolean;
    updateNextViewRangeTime: (update: ViewRangeTimeUpdate) => void;
    updateViewRangeTime: TUpdateViewRangeTimeFunction;
    viewRange: ViewRange;
    searchValue: string;
    onSearchValueChange: (value: string) => void;
    hideSearchButtons?: boolean;
};
export declare const HEADER_ITEMS: ({
    key: string;
    label: string;
    renderer: (trace: Trace) => string | React.JSX.Element;
} | {
    key: string;
    label: string;
    renderer: (trace: Trace) => number;
})[];
export default function TracePageHeader(props: TracePageHeaderEmbedProps): React.JSX.Element;
export {};
