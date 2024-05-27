import * as React from 'react';
import { TNil } from '../../types';
import { Log, KeyValuePair, Link } from '../../types/trace';
type AccordianLogsProps = {
    interactive?: boolean;
    isOpen: boolean;
    linksGetter: ((pairs: KeyValuePair[], index: number) => Link[]) | TNil;
    logs: Log[];
    onItemToggle?: (log: Log) => void;
    onToggle?: () => void;
    openedItems?: Set<Log>;
    timestamp: number;
};
declare function AccordianLogs(props: AccordianLogsProps): React.JSX.Element;
declare namespace AccordianLogs {
    var defaultProps: {
        interactive: boolean;
        linksGetter: any;
        onItemToggle: any;
        onToggle: any;
        openedItems: any;
    };
}
export default AccordianLogs;
