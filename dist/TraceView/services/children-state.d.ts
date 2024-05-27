import { Span } from '../../jaeger-ui-components';
/**
 * Children state means whether spans are collapsed or not. Also provides some functions to manipulate that state.
 */
export declare function useChildrenState(): {
    childrenHiddenIDs: Set<string>;
    expandOne: (spans: Span[]) => void;
    collapseOne: (spans: Span[]) => void;
    expandAll: () => void;
    collapseAll: (spans: Span[]) => void;
    childrenToggle: (spanID: string) => void;
};
