declare const _default: {
    readonly archiveEnabled: boolean;
    readonly dependencies: {
        readonly dagMaxNumServices: 100;
        readonly menuEnabled: boolean;
    };
    readonly linkPatterns: readonly any[];
    readonly menu: readonly {
        readonly label: string;
        readonly items: readonly {
            readonly label: string;
            readonly url: string;
        }[];
    }[];
    readonly search: {
        readonly maxLookback: {
            readonly label: string;
            readonly value: string;
        };
        readonly maxLimit: number;
    };
    readonly tracking: {
        readonly gaID: any;
        readonly trackErrors: boolean;
    };
};
export default _default;
export declare const deprecations: {
    formerKey: string;
    currentKey: string;
}[];
