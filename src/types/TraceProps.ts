import { SpanData, TraceData } from "../jaeger-ui-components";

/** Свойства для отображения Трейса. */
export interface TraceProps {
    trace: TraceData & { spans: SpanData[] };
};