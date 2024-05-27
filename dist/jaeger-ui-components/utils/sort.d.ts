export function localeStringComparator(itemA: any, itemB: any): any;
export function numberSortComparator(itemA: any, itemB: any): number;
export function classNameForSortDir(dir: any): string;
export function getNewSortForClick(prevSort: any, column: any): {
    key: any;
    dir: any;
};
export function createSortClickHandler(column: any, currentSortKey: any, currentSortDir: any, updateSort: any): () => void;
