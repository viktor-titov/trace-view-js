/// <reference types="react" />
import { Span } from '../../jaeger-ui-components';
/**
 * Controls the state of search input that highlights spans if they match the search string.
 * @param spans
 */
export declare function useSearch(spans?: Span[]): {
    search: string;
    setSearch: import("react").Dispatch<import("react").SetStateAction<string>>;
    spanFindMatches: Set<string>;
};
