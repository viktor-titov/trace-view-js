/**
 * Merge the embedded config from the query service (if present) with the
 * default config from `../../constants/default-config`.
 */
export default function getConfig(): {
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
export declare function getConfigValue(path: string): any;
