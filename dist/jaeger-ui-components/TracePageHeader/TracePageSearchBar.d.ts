import * as React from 'react';
import { TNil } from '../types';
export declare const getStyles: () => {
    TracePageSearchBar: string;
    TracePageSearchBarBar: string;
    TracePageSearchBarCount: string;
    TracePageSearchBarBtn: string;
    TracePageSearchBarBtnDisabled: string;
    TracePageSearchBarLocateBtn: string;
};
type TracePageSearchBarProps = {
    textFilter: string | TNil;
    prevResult: () => void;
    nextResult: () => void;
    clearSearch: () => void;
    focusUiFindMatches: () => void;
    resultCount: number;
    navigable: boolean;
    searchValue: string;
    onSearchValueChange: (value: string) => void;
    hideSearchButtons?: boolean;
};
declare const _default: React.NamedExoticComponent<TracePageSearchBarProps>;
export default _default;
