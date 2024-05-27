/**
 * This is used internally to handle hover state of indent guide. As indent guides are separate
 * components per each row/span and you need to highlight all in multiple rows to make the effect of single line
 * they need this kind of common imperative state changes.
 *
 * Ideally would be changed to trace view internal state.
 */
export declare function useHoverIndentGuide(): {
    hoverIndentGuideIds: Set<string>;
    addHoverIndentGuideId: (spanID: string) => void;
    removeHoverIndentGuideId: (spanID: string) => void;
};
