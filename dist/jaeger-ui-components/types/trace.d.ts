/**
 * All timestamps are in microseconds
 */
export type KeyValuePair = {
    key: string;
    type?: string;
    value: any;
};
export type Link = {
    url: string;
    text: string;
};
export type Log = {
    timestamp: number;
    fields: KeyValuePair[];
};
export type Process = {
    serviceName: string;
    tags: KeyValuePair[];
};
export type SpanReference = {
    refType: 'CHILD_OF' | 'FOLLOWS_FROM';
    span?: Span | null | undefined;
    spanID: string;
    traceID: string;
};
export type SpanData = {
    spanID: string;
    traceID: string;
    processID: string;
    operationName: string;
    startTime: number;
    duration: number;
    logs: Log[];
    tags?: KeyValuePair[];
    references?: SpanReference[];
    warnings?: string[] | null;
    flags: number;
};
export type Span = SpanData & {
    depth: number;
    hasChildren: boolean;
    process: Process;
    relativeStartTime: number;
    tags: NonNullable<SpanData['tags']>;
    references: NonNullable<SpanData['references']>;
    warnings: NonNullable<SpanData['warnings']>;
    subsidiarilyReferencedBy: SpanReference[];
};
export type TraceData = {
    processes: Record<string, Process>;
    traceID: string;
    warnings?: string[] | null;
};
export type Trace = TraceData & {
    duration: number;
    endTime: number;
    spans: Span[];
    startTime: number;
    traceName: string;
    services: Array<{
        name: string;
        numberOfSpans: number;
    }>;
};
