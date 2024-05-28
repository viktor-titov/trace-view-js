import TraceView from './Trace';
import type { TraceProps } from './types/TraceProps';
import type { TraceConfig } from './types/TraceConfig';
import type { TraceViewInterface } from './types/Trace';
import { type TraceData, type SpanData  } from './jaeger-ui-components';

import { transformTraceData } from "./jaeger-ui-components";
import traceGenerators from "./jaeger-ui-components/demo/trace-generators";
    
export {
    TraceView,
    type TraceProps,
    type TraceConfig,
    type TraceData,
    type SpanData,
    type TraceViewInterface,
}

export function generateMockTrace(): TraceProps["trace"] {
    return transformTraceData(traceGenerators.trace({}));
}