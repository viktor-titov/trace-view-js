import { TNil } from '../types';
import { Span, Link, KeyValuePair, Trace } from '..';
type ProcessedTemplate = {
    parameters: string[];
    template: (template: {
        [key: string]: any;
    }) => string;
};
type ProcessedLinkPattern = {
    object: any;
    type: (link: string) => boolean;
    key: (link: string) => boolean;
    value: (value: any) => boolean;
    url: ProcessedTemplate;
    text: ProcessedTemplate;
    parameters: string[];
};
type TLinksRV = Array<{
    url: string;
    text: string;
}>;
export declare function processTemplate(template: any, encodeFn: (unencoded: any) => string): ProcessedTemplate;
export declare function createTestFunction(entry: any): (arg: any) => boolean;
export declare function processLinkPattern(pattern: any): ProcessedLinkPattern | TNil;
export declare function getParameterInArray(name: string, array: KeyValuePair[]): KeyValuePair;
export declare function getParameterInAncestor(name: string, span: Span): KeyValuePair;
export declare function computeTraceLink(linkPatterns: ProcessedLinkPattern[], trace: Trace): TLinksRV;
export declare function computeLinks(linkPatterns: ProcessedLinkPattern[], span: Span, items: KeyValuePair[], itemIndex: number): {
    url: string;
    text: string;
}[];
export declare function createGetLinks(linkPatterns: ProcessedLinkPattern[], cache: WeakMap<KeyValuePair, Link[]>): (span: Span, items: KeyValuePair[], itemIndex: number) => Link[];
export declare const getTraceLinks: (trace: Trace | undefined) => TLinksRV;
declare const _default: (span: Span, items: KeyValuePair[], itemIndex: number) => Link[];
export default _default;
