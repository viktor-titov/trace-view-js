import * as React from 'react';
import { TNil } from '../../types';
import { Theme } from '../../Theme';
type CanvasSpanGraphProps = {
    items: Array<{
        valueWidth: number;
        valueOffset: number;
        serviceName: string;
    }>;
    valueWidth: number;
    theme: Theme;
};
export declare class UnthemedCanvasSpanGraph extends React.PureComponent<CanvasSpanGraphProps> {
    _canvasElm: HTMLCanvasElement | TNil;
    constructor(props: CanvasSpanGraphProps);
    getColor: (key: string) => [number, number, number];
    componentDidMount(): void;
    componentDidUpdate(): void;
    _setCanvasRef: (elm: HTMLCanvasElement | TNil) => void;
    _draw(): void;
    render(): React.JSX.Element;
}
declare const _default: React.ComponentType<Omit<CanvasSpanGraphProps, "theme">> & {
    wrapped: React.ComponentType<CanvasSpanGraphProps>;
};
export default _default;
