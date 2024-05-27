import * as React from 'react';
import { TooltipPlacement } from '../uiElementsContext';
type PropsType = {
    className?: string;
    copyText: string;
    icon?: string;
    placement?: TooltipPlacement;
    tooltipTitle: string;
};
type StateType = {
    hasCopied: boolean;
};
export default class CopyIcon extends React.PureComponent<PropsType, StateType> {
    static defaultProps: Partial<PropsType>;
    state: {
        hasCopied: boolean;
    };
    handleClick: () => void;
    handleTooltipVisibilityChange: (visible: boolean) => void;
    render(): React.JSX.Element;
}
export {};
