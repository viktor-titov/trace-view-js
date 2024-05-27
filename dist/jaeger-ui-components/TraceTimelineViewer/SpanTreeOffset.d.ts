import React from 'react';
import { Span } from '../types/trace';
import { Theme } from '../Theme';
export declare const getStyles: (theme: Theme) => {
    SpanTreeOffset: string;
    SpanTreeOffsetParent: string;
    indentGuide: string;
    indentGuideActive: string;
    iconWrapper: string;
};
type TProps = {
    childrenVisible?: boolean;
    onClick?: () => void;
    span: Span;
    showChildrenIcon?: boolean;
    hoverIndentGuideIds: Set<string>;
    addHoverIndentGuideId: (spanID: string) => void;
    removeHoverIndentGuideId: (spanID: string) => void;
    theme: Theme;
};
export declare class UnthemedSpanTreeOffset extends React.PureComponent<TProps> {
    static displayName: string;
    ancestorIds: string[];
    static defaultProps: {
        childrenVisible: boolean;
        showChildrenIcon: boolean;
    };
    constructor(props: TProps);
    /**
     * If the mouse leaves to anywhere except another span with the same ancestor id, this span's ancestor id is
     * removed from the set of hoverIndentGuideIds.
     *
     * @param {Object} event - React Synthetic event tied to mouseleave. Includes the related target which is
     *     the element the user is now hovering.
     * @param {string} ancestorId - The span id that the user was hovering over.
     */
    handleMouseLeave: (event: React.MouseEvent<HTMLSpanElement>, ancestorId: string) => void;
    /**
     * If the mouse entered this span from anywhere except another span with the same ancestor id, this span's
     * ancestorId is added to the set of hoverIndentGuideIds.
     *
     * @param {Object} event - React Synthetic event tied to mouseenter. Includes the related target which is
     *     the last element the user was hovering.
     * @param {string} ancestorId - The span id that the user is now hovering over.
     */
    handleMouseEnter: (event: React.MouseEvent<HTMLSpanElement>, ancestorId: string) => void;
    render(): React.JSX.Element;
}
declare const _default: React.ComponentType<Omit<TProps, "theme">> & {
    wrapped: React.ComponentType<TProps>;
};
export default _default;
