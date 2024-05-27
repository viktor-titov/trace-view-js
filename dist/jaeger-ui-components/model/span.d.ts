import { Span } from '../types/trace';
/**
 * Searches the span.references to find 'CHILD_OF' reference type or returns null.
 * @param  {Span} span The span whose parent is to be returned.
 * @return {Span|null} The parent span if there is one, null otherwise.
 */
export declare function getParent(span: Span): Span;
