import DetailState from '../TraceTimelineViewer/SpanDetail/DetailState';
import { TNil } from './TNil';
export type TTraceTimeline = {
    childrenHiddenIDs: Set<string>;
    detailStates: Map<string, DetailState>;
    hoverIndentGuideIds: Set<string>;
    shouldScrollToFirstUiFindMatch: boolean;
    spanNameColumnWidth: number;
    traceID: string | TNil;
};
