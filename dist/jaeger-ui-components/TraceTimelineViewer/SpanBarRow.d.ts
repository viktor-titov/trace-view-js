import * as React from 'react';
import { ViewedBoundsFunctionType } from './utils';
import { TNil } from '../types';
import { Span } from '../types/trace';
import { Theme } from '../Theme';
type SpanBarRowProps = {
    className?: string;
    theme: Theme;
    color: string;
    columnDivision: number;
    isChildrenExpanded: boolean;
    isDetailExpanded: boolean;
    isMatchingFilter: boolean;
    onDetailToggled: (spanID: string) => void;
    onChildrenToggled: (spanID: string) => void;
    numTicks: number;
    rpc?: {
        viewStart: number;
        viewEnd: number;
        color: string;
        operationName: string;
        serviceName: string;
    } | TNil;
    showErrorIcon: boolean;
    getViewedBounds: ViewedBoundsFunctionType;
    traceStartTime: number;
    span: Span;
    focusSpan: (spanID: string) => void;
    hoverIndentGuideIds: Set<string>;
    addHoverIndentGuideId: (spanID: string) => void;
    removeHoverIndentGuideId: (spanID: string) => void;
    clippingLeft?: boolean;
    clippingRight?: boolean;
};
/**
 * This was originally a stateless function, but changing to a PureComponent
 * reduced the render time of expanding a span row detail by ~50%. This is
 * even true in the case where the stateless function has the same prop types as
 * this class and arrow functions are created in the stateless function as
 * handlers to the onClick props. E.g. for now, the PureComponent is more
 * performance than the stateless function.
 */
export declare class UnthemedSpanBarRow extends React.PureComponent<SpanBarRowProps> {
    static displayName: string;
    static defaultProps: Partial<SpanBarRowProps>;
    _detailToggle: () => void;
    _childrenToggle: () => void;
    render(): React.JSX.Element;
}
declare const _default: React.ComponentType<Omit<SpanBarRowProps, "theme">> & {
    wrapped: React.ComponentType<SpanBarRowProps>;
};
export default _default;
