import React from 'react';
import DetailState from './SpanDetail/DetailState';
import { Theme } from '../Theme';
import { Log, Span, KeyValuePair, Link } from '../types/trace';
type SpanDetailRowProps = {
    color: string;
    columnDivision: number;
    detailState: DetailState;
    onDetailToggled: (spanID: string) => void;
    linksGetter: (span: Span, links: KeyValuePair[], index: number) => Link[];
    logItemToggle: (spanID: string, log: Log) => void;
    logsToggle: (spanID: string) => void;
    processToggle: (spanID: string) => void;
    referencesToggle: (spanID: string) => void;
    warningsToggle: (spanID: string) => void;
    span: Span;
    tagsToggle: (spanID: string) => void;
    traceStartTime: number;
    focusSpan: (uiFind: string) => void;
    hoverIndentGuideIds: Set<string>;
    addHoverIndentGuideId: (spanID: string) => void;
    removeHoverIndentGuideId: (spanID: string) => void;
    theme: Theme;
};
export declare class UnthemedSpanDetailRow extends React.PureComponent<SpanDetailRowProps> {
    _detailToggle: () => void;
    _linksGetter: (items: KeyValuePair[], itemIndex: number) => Link[];
    render(): React.JSX.Element;
}
declare const _default: React.ComponentType<Omit<SpanDetailRowProps, "theme">> & {
    wrapped: React.ComponentType<SpanDetailRowProps>;
};
export default _default;
