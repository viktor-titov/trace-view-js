import * as React from 'react';
import { TUpdateViewRangeTimeFunction, ViewRangeTime, ViewRangeTimeUpdate } from '../types';
type TimelineHeaderRowProps = {
    duration: number;
    nameColumnWidth: number;
    numTicks: number;
    onCollapseAll: () => void;
    onCollapseOne: () => void;
    onColummWidthChange: (width: number) => void;
    onExpandAll: () => void;
    onExpandOne: () => void;
    updateNextViewRangeTime: (update: ViewRangeTimeUpdate) => void;
    updateViewRangeTime: TUpdateViewRangeTimeFunction;
    viewRangeTime: ViewRangeTime;
    columnResizeHandleHeight: number;
};
export default function TimelineHeaderRow(props: TimelineHeaderRowProps): React.JSX.Element;
export {};
