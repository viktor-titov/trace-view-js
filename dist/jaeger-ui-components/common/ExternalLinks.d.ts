import * as React from 'react';
type Link = {
    text: string;
    url: string;
};
type ExternalLinksProps = {
    links: Link[];
    className?: string;
};
export declare const linkValueList: (links: Link[]) => React.JSX.Element;
export default function ExternalLinks(props: ExternalLinksProps): React.JSX.Element;
export {};
