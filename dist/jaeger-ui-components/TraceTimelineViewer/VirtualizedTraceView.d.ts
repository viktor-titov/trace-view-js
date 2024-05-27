import * as React from 'react';
import ListView from './ListView';
import { ViewedBoundsFunctionType } from './utils';
import { Accessors } from '../ScrollManager';
import { TNil } from '../types';
import { Log, Span, Trace, KeyValuePair, Link } from '../types/trace';
import { TTraceTimeline } from '../types/TTraceTimeline';
import { Theme } from '../Theme';
type TExtractUiFindFromStateReturn = {
    uiFind: string | undefined;
};
type RowState = {
    isDetail: boolean;
    span: Span;
    spanIndex: number;
};
type TVirtualizedTraceViewOwnProps = {
    currentViewRangeTime: [number, number];
    findMatchesIDs: Set<string> | TNil;
    scrollToFirstVisibleSpan: () => void;
    registerAccessors: (accesors: Accessors) => void;
    trace: Trace;
    focusSpan: (uiFind: string) => void;
    linksGetter: (span: Span, items: KeyValuePair[], itemIndex: number) => Link[];
    childrenToggle: (spanID: string) => void;
    clearShouldScrollToFirstUiFindMatch: () => void;
    detailLogItemToggle: (spanID: string, log: Log) => void;
    detailLogsToggle: (spanID: string) => void;
    detailWarningsToggle: (spanID: string) => void;
    detailReferencesToggle: (spanID: string) => void;
    detailProcessToggle: (spanID: string) => void;
    detailTagsToggle: (spanID: string) => void;
    detailToggle: (spanID: string) => void;
    setSpanNameColumnWidth: (width: number) => void;
    setTrace: (trace: Trace | TNil, uiFind: string | TNil) => void;
    hoverIndentGuideIds: Set<string>;
    addHoverIndentGuideId: (spanID: string) => void;
    removeHoverIndentGuideId: (spanID: string) => void;
    theme: Theme;
};
type VirtualizedTraceViewProps = TVirtualizedTraceViewOwnProps & TExtractUiFindFromStateReturn & TTraceTimeline;
export declare const DEFAULT_HEIGHTS: {
    bar: number;
    detail: number;
    detailWithLogs: number;
};
export declare class UnthemedVirtualizedTraceView extends React.Component<VirtualizedTraceViewProps> {
    clipping: {
        left: boolean;
        right: boolean;
    };
    listView: ListView | TNil;
    rowStates: RowState[];
    getViewedBounds: ViewedBoundsFunctionType;
    constructor(props: VirtualizedTraceViewProps);
    shouldComponentUpdate(nextProps: VirtualizedTraceViewProps): boolean;
    componentWillUpdate(nextProps: VirtualizedTraceViewProps): void;
    componentDidUpdate(): void;
    getAccessors(): {
        getViewRange: () => [number, number];
        getSearchedSpanIDs: () => Set<string>;
        getCollapsedChildren: () => Set<string>;
        getViewHeight: () => number;
        getBottomRowIndexVisible: () => number;
        getTopRowIndexVisible: () => number;
        getRowPosition: (index: number) => {
            height: number;
            y: number;
        };
        mapRowIndexToSpanIndex: (index: number) => number;
        mapSpanIndexToRowIndex: (index: number) => number;
    };
    getViewRange: () => [number, number];
    getSearchedSpanIDs: () => Set<string>;
    getCollapsedChildren: () => Set<string>;
    mapRowIndexToSpanIndex: (index: number) => number;
    mapSpanIndexToRowIndex: (index: number) => number;
    setListView: (listView: ListView | TNil) => void;
    getKeyFromIndex: (index: number) => string;
    getIndexFromKey: (key: string) => number;
    getRowHeight: (index: number) => number;
    renderRow: (key: string, style: React.CSSProperties, index: number, attrs: {}) => React.JSX.Element;
    renderSpanBarRow(span: Span, spanIndex: number, key: string, style: React.CSSProperties, attrs: {}): React.JSX.Element;
    renderSpanDetailRow(span: Span, key: string, style: React.CSSProperties, attrs: {}): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: React.ComponentType<Omit<VirtualizedTraceViewProps, "theme">> & {
    wrapped: React.ComponentType<VirtualizedTraceViewProps>;
};
export default _default;
