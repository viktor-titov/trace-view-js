import * as React from 'react';
import { TNil } from '../../types';
import { KeyValuePair, Link } from '../../types/trace';
import { Theme } from '../../Theme';
export declare const getStyles: (theme: Theme) => {
    header: string;
    headerEmpty: string;
    headerHighContrast: string;
    emptyIcon: string;
    summary: string;
    summaryItem: string;
    summaryLabel: string;
    summaryDelim: string;
};
type AccordianKeyValuesProps = {
    className?: string | TNil;
    data: KeyValuePair[];
    highContrast?: boolean;
    interactive?: boolean;
    isOpen: boolean;
    label: string;
    linksGetter: ((pairs: KeyValuePair[], index: number) => Link[]) | TNil;
    onToggle?: null | (() => void);
};
export declare function KeyValuesSummary(props: {
    data?: KeyValuePair[];
}): React.JSX.Element;
export declare namespace KeyValuesSummary {
    var defaultProps: {
        data: any;
    };
}
declare function AccordianKeyValues(props: AccordianKeyValuesProps): React.JSX.Element;
declare namespace AccordianKeyValues {
    var defaultProps: {
        className: any;
        highContrast: boolean;
        interactive: boolean;
        onToggle: any;
    };
}
export default AccordianKeyValues;
