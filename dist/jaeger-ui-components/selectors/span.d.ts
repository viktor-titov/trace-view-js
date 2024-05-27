export function getSpanId(span: any): any;
export function getSpanName(span: any): any;
export function getSpanDuration(span: any): any;
export function getSpanTimestamp(span: any): any;
export function getSpanProcessId(span: any): any;
export function getSpanReferences(span: any): any;
export const getSpanReferenceByType: ((state: any, ...params: any[]) => any) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (...resultFuncArgs: readonly any[]) => any;
    memoizedResultFunc: ((...resultFuncArgs: readonly any[]) => any) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => any;
    dependencies: import("reselect").SelectorArray<any>;
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("reselect").weakMapMemoize;
    memoize: typeof import("reselect").weakMapMemoize;
};
export const getSpanParentId: ((state: any, ...params: any[]) => any) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (...resultFuncArgs: readonly any[]) => any;
    memoizedResultFunc: ((...resultFuncArgs: readonly any[]) => any) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => any;
    dependencies: import("reselect").SelectorArray<any>;
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("reselect").weakMapMemoize;
    memoize: typeof import("reselect").weakMapMemoize;
};
export function getSpanProcess(span: any): any;
export const getSpanServiceName: ((state: any) => any) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: any) => any;
    memoizedResultFunc: ((resultFuncArgs_0: any) => any) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => any;
    dependencies: [(span: any) => any];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("reselect").weakMapMemoize;
    memoize: typeof import("reselect").weakMapMemoize;
};
export const filterSpansForTimestamps: ((state: any, ...params: any[]) => any) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (...resultFuncArgs: readonly any[]) => any;
    memoizedResultFunc: ((...resultFuncArgs: readonly any[]) => any) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => any;
    dependencies: import("reselect").SelectorArray<any>;
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("reselect").weakMapMemoize;
    memoize: typeof import("reselect").weakMapMemoize;
};
export const filterSpansForText: ((state: any, ...params: any[]) => any[]) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (...resultFuncArgs: readonly any[]) => any[];
    memoizedResultFunc: ((...resultFuncArgs: readonly any[]) => any[]) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => any[];
    dependencies: import("reselect").SelectorArray<any>;
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("reselect").weakMapMemoize;
    memoize: typeof import("reselect").weakMapMemoize;
};
export const highlightSpansForTextFilter: ((state: any, ...params: any[]) => any) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (...resultFuncArgs: readonly any[]) => any;
    memoizedResultFunc: ((...resultFuncArgs: readonly any[]) => any) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => any;
    dependencies: import("reselect").SelectorArray<any>;
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("reselect").weakMapMemoize;
    memoize: typeof import("reselect").weakMapMemoize;
};
