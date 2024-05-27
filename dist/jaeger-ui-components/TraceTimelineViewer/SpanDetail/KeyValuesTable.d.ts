import * as React from 'react';
import { TNil } from '../../types';
import { KeyValuePair, Link } from '../../types/trace';
import { Theme } from '../../Theme';
export declare const getStyles: (theme: Theme) => {
    KeyValueTable: string;
    body: string;
    row: string;
    keyColumn: string;
    copyColumn: string;
    linkIcon: string;
    copyIcon: string;
};
export declare const LinkValue: {
    (props: {
        href: string;
        title?: string;
        children: React.ReactNode;
    }): React.JSX.Element;
    defaultProps: {
        title: string;
    };
};
type KeyValuesTableProps = {
    data: KeyValuePair[];
    linksGetter: ((pairs: KeyValuePair[], index: number) => Link[]) | TNil;
};
export default function KeyValuesTable(props: KeyValuesTableProps): React.JSX.Element;
export {};
