import { Span } from '../types/trace';
import { TNil } from '../types';
export default function filterSpans(textFilter: string, spans: Span[] | TNil): Set<string>;
