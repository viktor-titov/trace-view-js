import * as React from 'react';
import { TUpdateViewRangeTimeFunction, ViewRange, ViewRangeTimeUpdate } from '../..';
import { Trace } from '../..';
type SpanGraphProps = {
    height?: number;
    trace: Trace;
    viewRange: ViewRange;
    updateViewRangeTime: TUpdateViewRangeTimeFunction;
    updateNextViewRangeTime: (nextUpdate: ViewRangeTimeUpdate) => void;
};
/**
 * Store `items` in state so they are not regenerated every render. Otherwise,
 * the canvas graph will re-render itself every time.
 */
type SpanGraphState = {
    items: Array<{
        valueOffset: number;
        valueWidth: number;
        serviceName: string;
    }>;
};
export default class SpanGraph extends React.PureComponent<SpanGraphProps, SpanGraphState> {
    state: SpanGraphState;
    static defaultProps: {
        height: number;
    };
    constructor(props: SpanGraphProps);
    componentWillReceiveProps(nextProps: SpanGraphProps): void;
    render(): React.JSX.Element;
}
export {};
