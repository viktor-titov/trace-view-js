import React from 'react';
export declare const getStyles: () => {
    ScrubberDragging: string;
    ScrubberHandles: string;
    ScrubberHandleExpansion: string;
    ScrubberHandle: string;
    ScrubberLine: string;
};
type ScrubberProps = {
    isDragging: boolean;
    position: number;
    onMouseDown: (evt: React.MouseEvent<any>) => void;
    onMouseEnter: (evt: React.MouseEvent<any>) => void;
    onMouseLeave: (evt: React.MouseEvent<any>) => void;
};
export default function Scrubber({ isDragging, onMouseDown, onMouseEnter, onMouseLeave, position }: ScrubberProps): React.JSX.Element;
export {};
