import { ViewRangeTimeUpdate, ViewRange } from '../../jaeger-ui-components';
/**
 * Controls state of the zoom function that can be used through minimap in header or on the timeline. ViewRange contains
 * state not only for current range that is showing but range that is currently being selected by the user.
 */
export declare function useViewRange(): {
    viewRange: ViewRange;
    updateViewRangeTime: (start: number, end: number) => void;
    updateNextViewRangeTime: (update: ViewRangeTimeUpdate) => void;
};
