import React from 'react';
import { SpanData, TraceData } from '../jaeger-ui-components';
type Props = {
    trace: TraceData & {
        spans: SpanData[];
    };
};
export declare function TraceView(props: Props): React.JSX.Element;
export {};
