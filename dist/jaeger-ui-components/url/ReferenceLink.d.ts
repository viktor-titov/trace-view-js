import React from 'react';
import { SpanReference } from '../types/trace';
type ReferenceLinkProps = {
    reference: SpanReference;
    children: React.ReactNode;
    className?: string;
    focusSpan: (spanID: string) => void;
    onClick?: () => void;
};
export default function ReferenceLink(props: ReferenceLinkProps): React.JSX.Element;
export {};
