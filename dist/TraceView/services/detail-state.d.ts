import { DetailState, Log } from '../../jaeger-ui-components';
/**
 * Keeps state of the span detail. This means whether span details are open but also state of each detail subitem
 * like logs or tags.
 */
export declare function useDetailState(): {
    detailStates: Map<string, DetailState>;
    toggleDetail: (spanID: string) => void;
    detailLogItemToggle: (spanID: string, log: Log) => void;
    detailLogsToggle: (spanID: string) => void;
    detailWarningsToggle: (spanID: string) => void;
    detailReferencesToggle: (spanID: string) => void;
    detailProcessToggle: (spanID: string) => void;
    detailTagsToggle: (spanID: string) => void;
};
