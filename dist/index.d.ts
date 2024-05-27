/// <reference types="react" />
declare module "examples/react/webpack.config" {
    export let target: string;
    export let entry: string;
    export let mode: string;
    export namespace output {
        let path: string;
        let publicPath: string;
        let filename: string;
        let chunkFilename: string;
        let assetModuleFilename: string;
        let clean: boolean;
    }
    export namespace devServer {
        let host: string;
        let port: number;
        namespace client {
            namespace overlay {
                let errors: boolean;
                let warnings: boolean;
            }
        }
        let compress: boolean;
        let historyApiFallback: boolean;
    }
    export let plugins: any[];
    export namespace module {
        let rules: ({
            test: RegExp;
            exclude: RegExp;
            use: {
                loader: string;
            };
            type?: undefined;
        } | {
            test: RegExp;
            use: (string | {
                loader: string;
                options: {
                    postcssOptions: {
                        config: boolean;
                        plugins: (string | string[])[];
                    };
                };
            })[];
            exclude?: undefined;
            type?: undefined;
        } | {
            test: RegExp;
            exclude: RegExp;
            type: string;
            use?: undefined;
        } | {
            test: RegExp;
            type: string;
            exclude?: undefined;
            use?: undefined;
        })[];
    }
    export namespace resolve {
        let extensions: string[];
    }
    export let devtool: string;
    export namespace optimization {
        let minimize: boolean;
    }
}
declare module "examples/react/src/App" {
    import { FC } from 'react';
    export const App: FC;
}
declare module "examples/react/src/index" {
    import './index.scss';
}
declare module "src/TraceView" {
    export function TraceViewTest(root: Element): void;
}
declare module "src/index" {
    import { TraceViewTest } from "src/TraceView";
    export { TraceViewTest };
}
declare module "src/jaeger-ui-components/types/api-error" {
    export type ApiError = string | {
        message: string;
        httpStatus?: any;
        httpStatusText?: string;
        httpUrl?: string;
        httpQuery?: string;
        httpBody?: string;
    };
}
declare module "src/jaeger-ui-components/types/trace" {
    /**
     * All timestamps are in microseconds
     */
    export type KeyValuePair = {
        key: string;
        type?: string;
        value: any;
    };
    export type Link = {
        url: string;
        text: string;
    };
    export type Log = {
        timestamp: number;
        fields: KeyValuePair[];
    };
    export type Process = {
        serviceName: string;
        tags: KeyValuePair[];
    };
    export type SpanReference = {
        refType: 'CHILD_OF' | 'FOLLOWS_FROM';
        span?: Span | null | undefined;
        spanID: string;
        traceID: string;
    };
    export type SpanData = {
        spanID: string;
        traceID: string;
        processID: string;
        operationName: string;
        startTime: number;
        duration: number;
        logs: Log[];
        tags?: KeyValuePair[];
        references?: SpanReference[];
        warnings?: string[] | null;
        flags: number;
    };
    export type Span = SpanData & {
        depth: number;
        hasChildren: boolean;
        process: Process;
        relativeStartTime: number;
        tags: NonNullable<SpanData['tags']>;
        references: NonNullable<SpanData['references']>;
        warnings: NonNullable<SpanData['warnings']>;
        subsidiarilyReferencedBy: SpanReference[];
    };
    export type TraceData = {
        processes: Record<string, Process>;
        traceID: string;
        warnings?: string[] | null;
    };
    export type Trace = TraceData & {
        duration: number;
        endTime: number;
        spans: Span[];
        startTime: number;
        traceName: string;
        services: Array<{
            name: string;
            numberOfSpans: number;
        }>;
    };
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/SpanDetail/DetailState" {
    import { Log } from "src/jaeger-ui-components/types/trace";
    /**
     * Which items of a {@link SpanDetail} component are expanded.
     */
    export default class DetailState {
        isTagsOpen: boolean;
        isProcessOpen: boolean;
        logs: {
            isOpen: boolean;
            openedItems: Set<Log>;
        };
        isWarningsOpen: boolean;
        isReferencesOpen: boolean;
        constructor(oldState?: DetailState);
        toggleTags(): DetailState;
        toggleProcess(): DetailState;
        toggleReferences(): DetailState;
        toggleWarnings(): DetailState;
        toggleLogs(): DetailState;
        toggleLogItem(logItem: Log): DetailState;
    }
}
declare module "src/jaeger-ui-components/types/TNil" {
    type TNil = null | undefined;
    export default TNil;
}
declare module "src/jaeger-ui-components/types/TTraceTimeline" {
    import DetailState from "src/jaeger-ui-components/TraceTimelineViewer/SpanDetail/DetailState";
    import TNil from "src/jaeger-ui-components/types/TNil";
    type TTraceTimeline = {
        childrenHiddenIDs: Set<string>;
        detailStates: Map<string, DetailState>;
        hoverIndentGuideIds: Set<string>;
        shouldScrollToFirstUiFindMatch: boolean;
        spanNameColumnWidth: number;
        traceID: string | TNil;
    };
    export default TTraceTimeline;
}
declare module "src/jaeger-ui-components/types/index" {
    import { ApiError } from "src/jaeger-ui-components/types/api-error";
    import { Trace } from "src/jaeger-ui-components/types/trace";
    export * from "src/jaeger-ui-components/types/trace";
    export { default as TTraceTimeline } from "src/jaeger-ui-components/types/TTraceTimeline";
    export { default as TNil } from "src/jaeger-ui-components/types/TNil";
    export type FetchedState = 'FETCH_DONE' | 'FETCH_ERROR' | 'FETCH_LOADING';
    export type FetchedTrace = {
        data?: Trace;
        error?: ApiError;
        id: string;
        state?: FetchedState;
    };
}
declare module "src/jaeger-ui-components/Tween" {
    import { TNil } from "src/jaeger-ui-components/types/index";
    interface ITweenState {
        done: boolean;
        value: number;
    }
    type TTweenCallback = (state: ITweenState) => void;
    type TTweenOptions = {
        delay?: number;
        duration: number;
        from: number;
        onComplete?: TTweenCallback;
        onUpdate?: TTweenCallback;
        to: number;
    };
    export default class Tween {
        callbackComplete: TTweenCallback | TNil;
        callbackUpdate: TTweenCallback | TNil;
        delay: number | TNil;
        duration: number;
        from: number;
        requestID: number | TNil;
        startTime: number;
        timeoutID: number | TNil;
        to: number;
        constructor({ duration, from, to, delay, onUpdate, onComplete }: TTweenOptions);
        _frameCallback: () => void;
        cancel(): void;
        getCurrent(): ITweenState;
    }
}
declare module "src/jaeger-ui-components/scroll-page" {
    export function scrollBy(yDelta: number, appendToLast?: boolean): void;
    export function scrollTo(y: number): void;
    export function cancel(): void;
}
declare module "src/jaeger-ui-components/ScrollManager" {
    import { TNil } from "src/jaeger-ui-components/types/index";
    import { Trace } from "src/jaeger-ui-components/types/trace";
    /**
     * `Accessors` is necessary because `ScrollManager` needs to be created by
     * `TracePage` so it can be passed into the keyboard shortcut manager. But,
     * `ScrollManager` needs to know about the state of `ListView` and `Positions`,
     * which are very low-level. And, storing their state info in redux or
     * `TracePage#state` would be inefficient because the state info only rarely
     * needs to be accessed (when a keyboard shortcut is triggered). `Accessors`
     * allows that state info to be accessed in a loosely coupled fashion on an
     * as-needed basis.
     */
    export type Accessors = {
        getViewRange: () => [number, number];
        getSearchedSpanIDs: () => Set<string> | TNil;
        getCollapsedChildren: () => Set<string> | TNil;
        getViewHeight: () => number;
        getBottomRowIndexVisible: () => number;
        getTopRowIndexVisible: () => number;
        getRowPosition: (rowIndex: number) => {
            height: number;
            y: number;
        };
        mapRowIndexToSpanIndex: (rowIndex: number) => number;
        mapSpanIndexToRowIndex: (spanIndex: number) => number;
    };
    interface IScroller {
        scrollTo: (rowIndex: number) => void;
        scrollBy: (rowIndex: number, opt?: boolean) => void;
    }
    /**
     * ScrollManager is intended for scrolling the TracePage. Has two modes, paging
     * and scrolling to the previous or next visible span.
     */
    export default class ScrollManager {
        _trace: Trace | TNil;
        _scroller: IScroller;
        _accessors: Accessors | TNil;
        constructor(trace: Trace | TNil, scroller: IScroller);
        _scrollPast(rowIndex: number, direction: 1 | -1): void;
        _scrollToVisibleSpan(direction: 1 | -1, startRow?: number): void;
        /**
         * Sometimes the ScrollManager is created before the trace is loaded. This
         * setter allows the trace to be set asynchronously.
         */
        setTrace(trace: Trace | TNil): void;
        /**
         * `setAccessors` is bound in the ctor, so it can be passed as a prop to
         * children components.
         */
        setAccessors: (accessors: Accessors) => void;
        /**
         * Scrolls around one page down (0.95x). It is bounds in the ctor, so it can
         * be used as a keyboard shortcut handler.
         */
        scrollPageDown: () => void;
        /**
         * Scrolls around one page up (0.95x). It is bounds in the ctor, so it can
         * be used as a keyboard shortcut handler.
         */
        scrollPageUp: () => void;
        /**
         * Scrolls to the next visible span, ignoring spans that do not match the
         * text filter, if there is one. It is bounds in the ctor, so it can
         * be used as a keyboard shortcut handler.
         */
        scrollToNextVisibleSpan: () => void;
        /**
         * Scrolls to the previous visible span, ignoring spans that do not match the
         * text filter, if there is one. It is bounds in the ctor, so it can
         * be used as a keyboard shortcut handler.
         */
        scrollToPrevVisibleSpan: () => void;
        scrollToFirstVisibleSpan: () => void;
        destroy(): void;
    }
}
declare module "src/jaeger-ui-components/ScrollManager.test" {
    export {};
}
declare module "src/jaeger-ui-components/Theme" {
    import React from 'react';
    export type ThemeOptions = Partial<Theme>;
    export enum ThemeType {
        Dark = 0,
        Light = 1
    }
    export type Theme = {
        type: ThemeType;
        servicesColorPalette: string[];
        borderStyle: string;
    };
    export const defaultTheme: Theme;
    export function isLight(theme?: Theme | ThemeOptions): boolean;
    export const ThemeProvider: React.Provider<Partial<Theme>>;
    type ThemeConsumerProps = {
        children: (theme: Theme) => React.ReactNode;
    };
    export function ThemeConsumer(props: ThemeConsumerProps): JSX.Element;
    type WrappedWithThemeComponent<Props> = React.ComponentType<Omit<Props, 'theme'>> & {
        wrapped: React.ComponentType<Props>;
    };
    export const withTheme: <Props extends {
        theme: Theme;
    }, Statics extends {} = {}>(Component: React.ComponentType<Props>) => WrappedWithThemeComponent<Props>;
    export function useTheme(): Theme;
    export const createStyle: <Fn extends (this: any, ...newArgs: any[]) => ReturnType<Fn>>(fn: Fn) => Fn;
    /**
     * Tries to get a dark variant color. Either by simply inverting the luminosity and darkening or lightening the color
     * a bit, or if base is provided, tries 2 variants of lighter and darker colors and checks which is more readable with
     * the base.
     * @param theme
     * @param hex
     * @param base
     */
    export function autoColor(theme: Theme, hex: string, base?: string): string;
}
declare module "src/jaeger-ui-components/Tween.test" {
    export {};
}
declare module "src/jaeger-ui-components/uiElementsContext" {
    import React from 'react';
    export type TooltipPlacement = 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
    export type PopoverProps = {
        content?: React.ReactNode;
        arrowPointAtCenter?: boolean;
        overlayClassName?: string;
        placement?: TooltipPlacement;
        children?: React.ReactNode;
    };
    export const UIPopover: React.ComponentType<PopoverProps>;
    type RenderFunction = () => React.ReactNode;
    export type TooltipProps = {
        title?: React.ReactNode | RenderFunction;
        getPopupContainer?: (triggerNode: Element) => HTMLElement;
        overlayClassName?: string;
        children?: React.ReactNode;
        placement?: TooltipPlacement;
        mouseLeaveDelay?: number;
        arrowPointAtCenter?: boolean;
        onVisibleChange?: (visible: boolean) => void;
    };
    export const UITooltip: React.ComponentType<TooltipProps>;
    export type IconProps = {
        type: string;
        className?: string;
        onClick?: React.MouseEventHandler<any>;
    };
    export const UIIcon: React.ComponentType<IconProps>;
    export type DropdownProps = {
        overlay: React.ReactNode;
        placement?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
        trigger?: Array<'click' | 'hover' | 'contextMenu'>;
        children?: React.ReactNode;
    };
    export const UIDropdown: (props: DropdownProps) => JSX.Element;
    export type MenuProps = {
        children?: React.ReactNode;
    };
    export const UIMenu: (props: MenuProps) => JSX.Element;
    export type MenuItemProps = {
        children?: React.ReactNode;
    };
    export const UIMenuItem: (props: MenuItemProps) => JSX.Element;
    export type ButtonHTMLType = 'submit' | 'button' | 'reset';
    export type ButtonProps = {
        children?: React.ReactNode;
        className?: string;
        htmlType?: ButtonHTMLType;
        icon?: string;
        onClick?: React.MouseEventHandler<HTMLButtonElement>;
        disabled?: boolean;
    };
    export const UIButton: (props: ButtonProps) => JSX.Element;
    export type DividerProps = {
        className?: string;
        type?: 'vertical' | 'horizontal';
    };
    export const UIDivider: (props: DividerProps) => JSX.Element;
    export type InputProps = {
        autosize?: boolean | null;
        placeholder?: string;
        onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
        suffix: React.ReactNode;
        value?: string;
    };
    export const UIInput: React.FC<InputProps>;
    export type InputGroupProps = {
        className?: string;
        compact?: boolean;
        style?: React.CSSProperties;
        children?: React.ReactNode;
    };
    export const UIInputGroup: (props: InputGroupProps) => JSX.Element;
    export type Elements = {
        Popover: React.ComponentType<PopoverProps>;
        Tooltip: React.ComponentType<TooltipProps>;
        Icon: React.ComponentType<IconProps>;
        Dropdown: React.ComponentType<DropdownProps>;
        Menu: React.ComponentType<MenuProps>;
        MenuItem: React.ComponentType<MenuItemProps>;
        Button: React.ComponentType<ButtonProps>;
        Divider: React.ComponentType<DividerProps>;
        Input: React.ComponentType<InputProps>;
        InputGroup: React.ComponentType<InputGroupProps>;
    };
    /**
     * Allows for injecting custom UI elements that will be used. Mainly for styling and removing dependency on
     * any specific UI library but can also inject specific behaviour.
     */
    const UIElementsContext: React.Context<Elements>;
    export default UIElementsContext;
    type GetElementsContextProps = {
        children: (elements: Elements) => React.ReactNode;
    };
    /**
     * Convenience render prop style component to handle error state when elements are not defined.
     */
    export function GetElementsContext(props: GetElementsContextProps): JSX.Element;
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/TimelineHeaderRow/TimelineCollapser" {
    import React from 'react';
    type CollapserProps = {
        onCollapseAll: () => void;
        onCollapseOne: () => void;
        onExpandOne: () => void;
        onExpandAll: () => void;
    };
    export default class TimelineCollapser extends React.PureComponent<CollapserProps> {
        containerRef: React.RefObject<HTMLDivElement>;
        constructor(props: CollapserProps);
        getContainer: () => HTMLDivElement;
        render(): JSX.Element;
    }
}
declare module "src/jaeger-ui-components/utils/DraggableManager/EUpdateTypes" {
    enum EUpdateTypes {
        DragEnd = "DragEnd",
        DragMove = "DragMove",
        DragStart = "DragStart",
        MouseEnter = "MouseEnter",
        MouseLeave = "MouseLeave",
        MouseMove = "MouseMove"
    }
    export default EUpdateTypes;
}
declare module "src/jaeger-ui-components/utils/DraggableManager/DraggableManager" {
    import { DraggableBounds, DraggingUpdate } from "src/jaeger-ui-components/utils/DraggableManager/types";
    import { TNil } from "src/jaeger-ui-components/types/index";
    type DraggableManagerOptions = {
        getBounds: (tag: string | TNil) => DraggableBounds;
        onMouseEnter?: (update: DraggingUpdate) => void;
        onMouseLeave?: (update: DraggingUpdate) => void;
        onMouseMove?: (update: DraggingUpdate) => void;
        onDragStart?: (update: DraggingUpdate) => void;
        onDragMove?: (update: DraggingUpdate) => void;
        onDragEnd?: (update: DraggingUpdate) => void;
        resetBoundsOnResize?: boolean;
        tag?: string;
    };
    export default class DraggableManager {
        _bounds: DraggableBounds | TNil;
        _isDragging: boolean;
        _onMouseEnter: ((update: DraggingUpdate) => void) | TNil;
        _onMouseLeave: ((update: DraggingUpdate) => void) | TNil;
        _onMouseMove: ((update: DraggingUpdate) => void) | TNil;
        _onDragStart: ((update: DraggingUpdate) => void) | TNil;
        _onDragMove: ((update: DraggingUpdate) => void) | TNil;
        _onDragEnd: ((update: DraggingUpdate) => void) | TNil;
        _resetBoundsOnResize: boolean;
        /**
         * Get the `DraggableBounds` for the current drag. The returned value is
         * cached until either `#resetBounds()` is called or the window is resized
         * (assuming `_resetBoundsOnResize` is `true`). The `DraggableBounds` defines
         * the range the current drag can span to. It also establishes the left offset
         * to adjust `clientX` by (from the `MouseEvent`s).
         */
        getBounds: (tag: string | TNil) => DraggableBounds;
        tag: string | TNil;
        handleMouseEnter: (event: React.MouseEvent<any>) => void;
        handleMouseMove: (event: React.MouseEvent<any>) => void;
        handleMouseLeave: (event: React.MouseEvent<any>) => void;
        handleMouseDown: (event: React.MouseEvent<any>) => void;
        constructor({ getBounds, tag, resetBoundsOnResize, ...rest }: DraggableManagerOptions);
        _getBounds(): DraggableBounds;
        _getPosition(clientX: number): {
            value: number;
            x: number;
        };
        _stopDragging(): void;
        isDragging(): boolean;
        dispose(): void;
        resetBounds: () => void;
        _handleMinorMouseEvent: (event: React.MouseEvent<any>) => void;
        _handleDragEvent: (event: MouseEvent | React.MouseEvent<any>) => void;
    }
}
declare module "src/jaeger-ui-components/utils/DraggableManager/types" {
    import * as React from 'react';
    import DraggableManager from "src/jaeger-ui-components/utils/DraggableManager/DraggableManager";
    import EUpdateTypes from "src/jaeger-ui-components/utils/DraggableManager/EUpdateTypes";
    import { TNil } from "src/jaeger-ui-components/types/index";
    export type DraggableBounds = {
        clientXLeft: number;
        maxValue?: number;
        minValue?: number;
        width: number;
    };
    export type DraggingUpdate = {
        event: React.MouseEvent<any> | MouseEvent;
        manager: DraggableManager;
        tag: string | TNil;
        type: EUpdateTypes;
        value: number;
        x: number;
    };
}
declare module "src/jaeger-ui-components/utils/DraggableManager/index" {
    export * from "src/jaeger-ui-components/utils/DraggableManager/types";
    export { default as EUpdateTypes } from "src/jaeger-ui-components/utils/DraggableManager/EUpdateTypes";
    export { default } from "src/jaeger-ui-components/utils/DraggableManager/DraggableManager";
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/TimelineHeaderRow/TimelineColumnResizer" {
    import * as React from 'react';
    import { TNil } from "src/jaeger-ui-components/types/index";
    import DraggableManager, { DraggableBounds, DraggingUpdate } from "src/jaeger-ui-components/utils/DraggableManager/index";
    export const getStyles: () => {
        TimelineColumnResizer: string;
        wrapper: string;
        dragger: string;
        draggerDragging: string;
        draggerDraggingLeft: string;
        draggerDraggingRight: string;
        gripIcon: string;
        gripIconDragging: string;
    };
    type TimelineColumnResizerProps = {
        min: number;
        max: number;
        onChange: (newSize: number) => void;
        position: number;
        columnResizeHandleHeight: number;
    };
    type TimelineColumnResizerState = {
        dragPosition: number | TNil;
    };
    export default class TimelineColumnResizer extends React.PureComponent<TimelineColumnResizerProps, TimelineColumnResizerState> {
        state: TimelineColumnResizerState;
        _dragManager: DraggableManager;
        _rootElm: Element | TNil;
        constructor(props: TimelineColumnResizerProps);
        componentWillUnmount(): void;
        _setRootElm: (elm: Element | TNil) => void;
        _getDraggingBounds: () => DraggableBounds;
        _handleDragUpdate: ({ value }: DraggingUpdate) => void;
        _handleDragEnd: ({ manager, value }: DraggingUpdate) => void;
        render(): JSX.Element;
    }
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/types" {
    import { TNil } from "src/jaeger-ui-components/types/index";
    interface TimeCursorUpdate {
        cursor: number | TNil;
    }
    interface TimeReframeUpdate {
        reframe: {
            anchor: number;
            shift: number;
        };
    }
    interface TimeShiftEndUpdate {
        shiftEnd: number;
    }
    interface TimeShiftStartUpdate {
        shiftStart: number;
    }
    export type TUpdateViewRangeTimeFunction = (start: number, end: number, trackSrc?: string) => void;
    export type ViewRangeTimeUpdate = TimeCursorUpdate | TimeReframeUpdate | TimeShiftEndUpdate | TimeShiftStartUpdate;
    export interface ViewRangeTime {
        current: [number, number];
        cursor?: number | TNil;
        reframe?: {
            anchor: number;
            shift: number;
        };
        shiftEnd?: number;
        shiftStart?: number;
    }
    export interface ViewRange {
        time: ViewRangeTime;
    }
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/TimelineHeaderRow/TimelineViewingLayer" {
    import * as React from 'react';
    import { TUpdateViewRangeTimeFunction, ViewRangeTime, ViewRangeTimeUpdate } from "src/jaeger-ui-components/TraceTimelineViewer/types";
    import { TNil } from "src/jaeger-ui-components/types/index";
    import DraggableManager, { DraggableBounds, DraggingUpdate } from "src/jaeger-ui-components/utils/DraggableManager/index";
    export const getStyles: () => {
        TimelineViewingLayer: string;
        TimelineViewingLayerCursorGuide: string;
        TimelineViewingLayerDragged: string;
        TimelineViewingLayerDraggedDraggingLeft: string;
        TimelineViewingLayerDraggedDraggingRight: string;
        TimelineViewingLayerDraggedShiftDrag: string;
        TimelineViewingLayerDraggedReframeDrag: string;
        TimelineViewingLayerFullOverlay: string;
    };
    type TimelineViewingLayerProps = {
        /**
         * `boundsInvalidator` is an arbitrary prop that lets the component know the
         * bounds for dragging need to be recalculated. In practice, the name column
         * width serves fine for this.
         */
        boundsInvalidator: any | null | undefined;
        updateNextViewRangeTime: (update: ViewRangeTimeUpdate) => void;
        updateViewRangeTime: TUpdateViewRangeTimeFunction;
        viewRangeTime: ViewRangeTime;
    };
    /**
     * `TimelineViewingLayer` is rendered on top of the TimelineHeaderRow time
     * labels; it handles showing the current view range and handles mouse UX for
     * modifying it.
     */
    export default class TimelineViewingLayer extends React.PureComponent<TimelineViewingLayerProps> {
        _draggerReframe: DraggableManager;
        _root: Element | TNil;
        constructor(props: TimelineViewingLayerProps);
        componentWillReceiveProps(nextProps: TimelineViewingLayerProps): void;
        componentWillUnmount(): void;
        _setRoot: (elm: Element | TNil) => void;
        _getDraggingBounds: () => DraggableBounds;
        _handleReframeMouseMove: ({ value }: DraggingUpdate) => void;
        _handleReframeMouseLeave: () => void;
        _handleReframeDragUpdate: ({ value }: DraggingUpdate) => void;
        _handleReframeDragEnd: ({ manager, value }: DraggingUpdate) => void;
        render(): JSX.Element;
    }
}
declare module "src/jaeger-ui-components/utils/number" {
    /**
     * given a number and a desired precision for the floating
     * side, return the number at the new precision.
     *
     * toFloatPrecision(3.55, 1) // 3.5
     * toFloatPrecision(0.04422, 2) // 0.04
     * toFloatPrecision(6.24e6, 2) // 6240000.00
     *
     * does not support numbers that use "e" notation on toString.
     *
     * @param {number} number
     * @param {number} precision
     * @return {number} number at new floating precision
     */
    export function toFloatPrecision(number: number, precision: number): number;
}
declare module "src/jaeger-ui-components/utils/date" {
    export const STANDARD_DATE_FORMAT = "YYYY-MM-DD";
    export const STANDARD_TIME_FORMAT = "HH:mm";
    export const STANDARD_DATETIME_FORMAT = "MMMM D YYYY, HH:mm:ss.SSS";
    export const ONE_MILLISECOND = 1000;
    export const ONE_SECOND: number;
    export const DEFAULT_MS_PRECISION: number;
    /**
     * @param {number} timestamp
     * @param {number} initialTimestamp
     * @param {number} totalDuration
     * @return {number} 0-100 percentage
     */
    export function getPercentageOfDuration(duration: number, totalDuration: number): number;
    /**
     * @param {number} duration (in microseconds)
     * @return {string} formatted, unit-labelled string with time in milliseconds
     */
    export function formatDate(duration: number): string;
    /**
     * @param {number} duration (in microseconds)
     * @return {string} formatted, unit-labelled string with time in milliseconds
     */
    export function formatTime(duration: number): string;
    /**
     * @param {number} duration (in microseconds)
     * @return {string} formatted, unit-labelled string with time in milliseconds
     */
    export function formatDatetime(duration: number): string;
    /**
     * @param {number} duration (in microseconds)
     * @return {string} formatted, unit-labelled string with time in milliseconds
     */
    export function formatMillisecondTime(duration: number): string;
    /**
     * @param {number} duration (in microseconds)
     * @return {string} formatted, unit-labelled string with time in seconds
     */
    export function formatSecondTime(duration: number): string;
    /**
     * Humanizes the duration based on the inputUnit
     *
     * Example:
     * 5000ms => 5s
     * 1000μs => 1ms
     */
    export function formatDuration(duration: number, inputUnit?: string): string;
    export function formatRelativeDate(value: any, fullMonthName?: boolean): string;
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/utils" {
    import { Span } from "src/jaeger-ui-components/types/trace";
    export type ViewedBoundsFunctionType = (start: number, end: number) => {
        start: number;
        end: number;
    };
    /**
     * Given a range (`min`, `max`) and factoring in a zoom (`viewStart`, `viewEnd`)
     * a function is created that will find the position of a sub-range (`start`, `end`).
     * The calling the generated method will return the result as a `{ start, end }`
     * object with values ranging in [0, 1].
     *
     * @param  {number} min       The start of the outer range.
     * @param  {number} max       The end of the outer range.
     * @param  {number} viewStart The start of the zoom, on a range of [0, 1],
     *                            relative to the `min`, `max`.
     * @param  {number} viewEnd   The end of the zoom, on a range of [0, 1],
     *                            relative to the `min`, `max`.
     * @returns {(number, number) => Object} Created view bounds function
     */
    export function createViewedBoundsFunc(viewRange: {
        min: number;
        max: number;
        viewStart: number;
        viewEnd: number;
    }): (start: number, end: number) => {
        start: number;
        end: number;
    };
    /**
     * Returns `true` if the `span` has a tag matching `key` = `value`.
     *
     * @param  {string} key   The tag key to match on.
     * @param  {any}    value The tag value to match.
     * @param  {{tags}} span  An object with a `tags` property of { key, value }
     *                        items.
     * @return {boolean}      True if a match was found.
     */
    export function spanHasTag(key: string, value: any, span: Span): boolean;
    export const isClientSpan: any;
    export const isServerSpan: any;
    export const isErrorSpan: (span: Span) => any;
    /**
     * Returns `true` if at least one of the descendants of the `parentSpanIndex`
     * span contains an error tag.
     *
     * @param      {Span[]}   spans            The spans for a trace - should be
     *                                         sorted with children following parents.
     * @param      {number}   parentSpanIndex  The index of the parent span - only
     *                                         subsequent spans with depth less than
     *                                         the parent span will be checked.
     * @return     {boolean}  Returns `true` if a descendant contains an error tag.
     */
    export function spanContainsErredSpan(spans: Span[], parentSpanIndex: number): boolean;
    /**
     * Expects the first span to be the parent span.
     */
    export function findServerChildSpan(spans: Span[]): false | Span;
    export { formatDuration } from "src/jaeger-ui-components/utils/date";
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/Ticks" {
    import { TNil } from "src/jaeger-ui-components/types/index";
    type TicksProps = {
        endTime?: number | TNil;
        numTicks: number;
        showLabels?: boolean | TNil;
        startTime?: number | TNil;
    };
    declare function Ticks(props: TicksProps): JSX.Element;
    declare namespace Ticks {
        var defaultProps: {
            endTime: any;
            showLabels: any;
            startTime: any;
        };
    }
    export default Ticks;
}
declare module "src/jaeger-ui-components/uberUtilityStyles" {
    export const ubRelative: string;
    export const ubMb1: string;
    export const ubMy1: string;
    export const ubM0: string;
    export const ubPx2: string;
    export const ubPb2: string;
    export const ubFlex: string;
    export const ubItemsCenter: string;
    export const ubFlexAuto: string;
    export const ubTxRightAlign: string;
    export const ubInlineBlock: string;
    export const uAlignIcon: string;
    export const uTxEllipsis: string;
    export const uWidth100: string;
    export const uTxMuted: string;
    export const ubJustifyEnd: string;
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/TimelineRow" {
    import * as React from 'react';
    type TTimelineRowProps = {
        children: React.ReactNode;
        className?: string;
    };
    interface TimelineRowCellProps extends React.HTMLAttributes<HTMLDivElement> {
        children: React.ReactNode;
        className?: string;
        width: number;
        style?: {};
    }
    declare function TimelineRow(props: TTimelineRowProps): JSX.Element;
    declare namespace TimelineRow {
        var defaultProps: {
            className: string;
        };
        var Cell: typeof TimelineRowCell;
    }
    export default TimelineRow;
    export function TimelineRowCell(props: TimelineRowCellProps): JSX.Element;
    export namespace TimelineRowCell {
        var defaultProps: {
            className: string;
            style: {};
        };
    }
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/TimelineHeaderRow/TimelineHeaderRow" {
    import { TUpdateViewRangeTimeFunction, ViewRangeTime, ViewRangeTimeUpdate } from "src/jaeger-ui-components/TraceTimelineViewer/types";
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
    export default function TimelineHeaderRow(props: TimelineHeaderRowProps): JSX.Element;
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/TimelineHeaderRow/index" {
    export { default } from "src/jaeger-ui-components/TraceTimelineViewer/TimelineHeaderRow/TimelineHeaderRow";
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/ListView/Positions" {
    type THeightGetter = (index: number) => number;
    /**
     * Keeps track of the height and y-position for anything sequenctial where
     * y-positions follow one-after-another and can be derived from the height of
     * the prior entries. The height is known from an accessor function parameter
     * to the methods that require new knowledge the heights.
     *
     * @export
     * @class Positions
     */
    export default class Positions {
        /**
         * Indicates how far past the explicitly required height or y-values should
         * checked.
         */
        bufferLen: number;
        dataLen: number;
        heights: number[];
        /**
         * `lastI` keeps track of which values have already been visited. In many
         * scenarios, values do not need to be revisited. But, revisiting is required
         * when heights have changed, so `lastI` can be forced.
         */
        lastI: number;
        ys: number[];
        constructor(bufferLen: number);
        /**
         * Used to make sure the length of y-values and heights is consistent with
         * the context; in particular `lastI` needs to remain valid.
         */
        profileData(dataLength: number): void;
        /**
         * Calculate and save the heights and y-values, based on `heightGetter`, from
         * `lastI` until the`max` index; the starting point (`lastI`) can be forced
         * via the `forcedLastI` parameter.
         * @param {number=} forcedLastI
         */
        calcHeights(max: number, heightGetter: THeightGetter, forcedLastI?: number): void;
        /**
         * Verify the height and y-values from `lastI` up to `yValue`.
         */
        calcYs(yValue: number, heightGetter: THeightGetter): void;
        /**
         * Get the latest height for index `_i`. If it's in new terretory
         * (_i > lastI), find the heights (and y-values) leading up to it. If it's in
         * known territory (_i <= lastI) and the height is different than what is
         * known, recalculate subsequent y values, but don't confirm the heights of
         * those items, just update based on the difference.
         */
        confirmHeight(_i: number, heightGetter: THeightGetter): void;
        /**
         * Given a target y-value (`yValue`), find the closest index (in the `.ys`
         * array) that is prior to the y-value; e.g. map from y-value to index in
         * `.ys`.
         */
        findFloorIndex(yValue: number, heightGetter: THeightGetter): number;
        /**
         * Get the `y` and `height` for a given row.
         *
         * @returns {{ height: number, y: number }}
         */
        getRowPosition(index: number, heightGetter: THeightGetter): {
            height: number;
            y: number;
        };
        /**
         * Get the estimated height of the whole shebang by extrapolating based on
         * the average known height.
         */
        getEstimatedHeight(): number;
    }
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/ListView/index" {
    import * as React from 'react';
    import Positions from "src/jaeger-ui-components/TraceTimelineViewer/ListView/Positions";
    import { TNil } from "src/jaeger-ui-components/types/index";
    /**
     * @typedef
     */
    type TListViewProps = {
        /**
         * Number of elements in the list.
         */
        dataLength: number;
        /**
         * Convert item index (number) to the key (string). ListView uses both indexes
         * and keys to handle the addtion of new rows.
         */
        getIndexFromKey: (key: string) => number;
        /**
         * Convert item key (string) to the index (number). ListView uses both indexes
         * and keys to handle the addtion of new rows.
         */
        getKeyFromIndex: (index: number) => string;
        /**
         * Number of items to draw and add to the DOM, initially.
         */
        initialDraw?: number;
        /**
         * The parent provides fallback height measurements when there is not a
         * rendered element to measure.
         */
        itemHeightGetter: (index: number, key: string) => number;
        /**
         * Function that renders an item; rendered items are added directly to the
         * DOM, they are not wrapped in list item wrapper HTMLElement.
         */
        itemRenderer: (itemKey: string, style: Record<string, string | number>, index: number, attributes: Record<string, string>) => React.ReactNode;
        /**
         * `className` for the HTMLElement that holds the items.
         */
        itemsWrapperClassName?: string;
        /**
         * When adding new items to the DOM, this is the number of items to add above
         * and below the current view. E.g. if list is 100 items and is srcolled
         * halfway down (so items [46, 55] are in view), then when a new range of
         * items is rendered, it will render items `46 - viewBuffer` to
         * `55 + viewBuffer`.
         */
        viewBuffer: number;
        /**
         * The minimum number of items offscreen in either direction; e.g. at least
         * `viewBuffer` number of items must be off screen above and below the
         * current view, or more items will be rendered.
         */
        viewBufferMin: number;
        /**
         * When `true`, expect `_wrapperElm` to have `overflow: visible` and to,
         * essentially, be tall to the point the entire page will will end up
         * scrolling as a result of the ListView. Similar to react-virtualized
         * window scroller.
         *
         * - Ref: https://bvaughn.github.io/react-virtualized/#/components/WindowScroller
         * - Ref:https://github.com/bvaughn/react-virtualized/blob/497e2a1942529560681d65a9ef9f5e9c9c9a49ba/docs/WindowScroller.md
         */
        windowScroller?: boolean;
    };
    /**
     * Virtualized list view component, for the most part, only renders the window
     * of items that are in-view with some buffer before and after. Listens for
     * scroll events and updates which items are rendered. See react-virtualized
     * for a suite of components with similar, but generalized, functinality.
     * https://github.com/bvaughn/react-virtualized
     *
     * Note: Presently, ListView cannot be a PureComponent. This is because ListView
     * is sensitive to the underlying state that drives the list items, but it
     * doesn't actually receive that state. So, a render may still be required even
     * if ListView's props are unchanged.
     *
     * @export
     * @class ListView
     */
    export default class ListView extends React.Component<TListViewProps> {
        /**
         * Keeps track of the height and y-value of items, by item index, in the
         * ListView.
         */
        _yPositions: Positions;
        /**
         * Keep track of the known / measured heights of the rendered items; populated
         * with values through observation and keyed on the item key, not the item
         * index.
         */
        _knownHeights: Map<string, number>;
        /**
         * The start index of the items currently drawn.
         */
        _startIndexDrawn: number;
        /**
         * The end index of the items currently drawn.
         */
        _endIndexDrawn: number;
        /**
         * The start index of the items currently in view.
         */
        _startIndex: number;
        /**
         * The end index of the items currently in view.
         */
        _endIndex: number;
        /**
         * Height of the visual window, e.g. height of the scroller element.
         */
        _viewHeight: number;
        /**
         * `scrollTop` of the current scroll position.
         */
        _scrollTop: number;
        /**
         * Used to keep track of whether or not a re-calculation of what should be
         * drawn / viewable has been scheduled.
         */
        _isScrolledOrResized: boolean;
        /**
         * If `windowScroller` is true, this notes how far down the page the scroller
         * is located. (Note: repositioning and below-the-fold views are untested)
         */
        _htmlTopOffset: number;
        _windowScrollListenerAdded: boolean;
        _htmlElm: HTMLElement;
        /**
         * HTMLElement holding the scroller.
         */
        _wrapperElm: HTMLElement | TNil;
        /**
         * HTMLElement holding the rendered items.
         */
        _itemHolderElm: HTMLElement | TNil;
        static defaultProps: {
            initialDraw: number;
            itemsWrapperClassName: string;
            windowScroller: boolean;
        };
        constructor(props: TListViewProps);
        componentDidMount(): void;
        componentDidUpdate(): void;
        componentWillUnmount(): void;
        getViewHeight: () => number;
        /**
         * Get the index of the item at the bottom of the current view.
         */
        getBottomVisibleIndex: () => number;
        /**
         * Get the index of the item at the top of the current view.
         */
        getTopVisibleIndex: () => number;
        getRowPosition: (index: number) => {
            height: number;
            y: number;
        };
        /**
         * Scroll event listener that schedules a remeasuring of which items should be
         * rendered.
         */
        _onScroll: () => void;
        /**
         * Returns true is the view height (scroll window) or scroll position have
         * changed.
         */
        _isViewChanged(): boolean;
        /**
         * Recalculate _startIndex and _endIndex, e.g. which items are in view.
         */
        _calcViewIndexes(): void;
        /**
         * Checked to see if the currently rendered items are sufficient, if not,
         * force an update to trigger more items to be rendered.
         */
        _positionList: () => void;
        _initWrapper: (elm: HTMLElement | TNil) => void;
        _initItemHolder: (elm: HTMLElement | TNil) => void;
        /**
         * Go through all items that are rendered and save their height based on their
         * item-key (which is on a data-* attribute). If any new or adjusted heights
         * are found, re-measure the current known y-positions (via .yPositions).
         */
        _scanItemHeights: () => void;
        /**
         * Get the height of the element at index `i`; first check the known heigths,
         * fallbck to `.props.itemHeightGetter(...)`.
         */
        _getHeight: (i: number) => number;
        render(): JSX.Element;
    }
}
declare module "src/jaeger-ui-components/common/NewWindowIcon" {
    export const getStyles: () => {
        NewWindowIconLarge: string;
    };
    type Props = {
        isLarge?: boolean;
        className?: string;
    };
    declare function NewWindowIcon(props: Props): JSX.Element;
    declare namespace NewWindowIcon {
        var defaultProps: {
            isLarge: boolean;
        };
    }
    export default NewWindowIcon;
}
declare module "src/jaeger-ui-components/url/externalLinkContext" {
    import React from 'react';
    /**
     * There are several places where external links to spans are created. The url layout though is something
     * that should be decided on the application level and not on the component level but at the same time
     * propagating the factory function everywhere could be cumbersome so we use this context for that.
     */
    const ExternalLinkContext: React.Context<(traceID: string, spanID: string) => string>;
    export default ExternalLinkContext;
}
declare module "src/jaeger-ui-components/url/ReferenceLink" {
    import React from 'react';
    import { SpanReference } from "src/jaeger-ui-components/types/trace";
    type ReferenceLinkProps = {
        reference: SpanReference;
        children: React.ReactNode;
        className?: string;
        focusSpan: (spanID: string) => void;
        onClick?: () => void;
    };
    export default function ReferenceLink(props: ReferenceLinkProps): JSX.Element;
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/ReferencesButton" {
    import React from 'react';
    import { SpanReference } from "src/jaeger-ui-components/types/trace";
    export const getStyles: () => {
        MultiParent: string;
        TraceRefLink: string;
        NewWindowIcon: string;
        tooltip: string;
    };
    type TReferencesButtonProps = {
        references: SpanReference[];
        children: React.ReactNode;
        tooltipText: string;
        focusSpan: (spanID: string) => void;
    };
    export default class ReferencesButton extends React.PureComponent<TReferencesButtonProps> {
        referencesList: (references: SpanReference[]) => JSX.Element;
        render(): JSX.Element;
    }
}
declare module "src/jaeger-ui-components/utils/span-ancestor-ids" {
    import { TNil } from "src/jaeger-ui-components/types/index";
    import { Span } from "src/jaeger-ui-components/types/trace";
    export default function spanAncestorIds(span: Span | TNil): string[];
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/SpanTreeOffset" {
    import React from 'react';
    import { Span } from "src/jaeger-ui-components/types/trace";
    import { Theme } from "src/jaeger-ui-components/Theme";
    export const getStyles: (theme: Theme) => {
        SpanTreeOffset: string;
        SpanTreeOffsetParent: string;
        indentGuide: string;
        indentGuideActive: string;
        iconWrapper: string;
    };
    type TProps = {
        childrenVisible?: boolean;
        onClick?: () => void;
        span: Span;
        showChildrenIcon?: boolean;
        hoverIndentGuideIds: Set<string>;
        addHoverIndentGuideId: (spanID: string) => void;
        removeHoverIndentGuideId: (spanID: string) => void;
        theme: Theme;
    };
    export class UnthemedSpanTreeOffset extends React.PureComponent<TProps> {
        static displayName: string;
        ancestorIds: string[];
        static defaultProps: {
            childrenVisible: boolean;
            showChildrenIcon: boolean;
        };
        constructor(props: TProps);
        /**
         * If the mouse leaves to anywhere except another span with the same ancestor id, this span's ancestor id is
         * removed from the set of hoverIndentGuideIds.
         *
         * @param {Object} event - React Synthetic event tied to mouseleave. Includes the related target which is
         *     the element the user is now hovering.
         * @param {string} ancestorId - The span id that the user was hovering over.
         */
        handleMouseLeave: (event: React.MouseEvent<HTMLSpanElement>, ancestorId: string) => void;
        /**
         * If the mouse entered this span from anywhere except another span with the same ancestor id, this span's
         * ancestorId is added to the set of hoverIndentGuideIds.
         *
         * @param {Object} event - React Synthetic event tied to mouseenter. Includes the related target which is
         *     the last element the user was hovering.
         * @param {string} ancestorId - The span id that the user is now hovering over.
         */
        handleMouseEnter: (event: React.MouseEvent<HTMLSpanElement>, ancestorId: string) => void;
        render(): JSX.Element;
    }
    const _default: React.ComponentType<Omit<TProps, "theme">> & {
        wrapped: React.ComponentType<TProps>;
    };
    export default _default;
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/SpanDetail/AccordianKeyValues.markers" {
    export const LABEL = "label";
}
declare module "src/jaeger-ui-components/common/CopyIcon" {
    import * as React from 'react';
    import { TooltipPlacement } from "src/jaeger-ui-components/uiElementsContext";
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
        render(): JSX.Element;
    }
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/SpanDetail/KeyValuesTable" {
    import * as React from 'react';
    import { TNil } from "src/jaeger-ui-components/types/index";
    import { KeyValuePair, Link } from "src/jaeger-ui-components/types/trace";
    import { Theme } from "src/jaeger-ui-components/Theme";
    export const getStyles: (theme: Theme) => {
        KeyValueTable: string;
        body: string;
        row: string;
        keyColumn: string;
        copyColumn: string;
        linkIcon: string;
        copyIcon: string;
    };
    export const LinkValue: {
        (props: {
            href: string;
            title?: string;
            children: React.ReactNode;
        }): JSX.Element;
        defaultProps: {
            title: string;
        };
    };
    type KeyValuesTableProps = {
        data: KeyValuePair[];
        linksGetter: ((pairs: KeyValuePair[], index: number) => Link[]) | TNil;
    };
    export default function KeyValuesTable(props: KeyValuesTableProps): JSX.Element;
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/SpanDetail/AccordianKeyValues" {
    import { TNil } from "src/jaeger-ui-components/types/index";
    import { KeyValuePair, Link } from "src/jaeger-ui-components/types/trace";
    import { Theme } from "src/jaeger-ui-components/Theme";
    export const getStyles: (theme: Theme) => {
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
    export function KeyValuesSummary(props: {
        data?: KeyValuePair[];
    }): JSX.Element;
    export namespace KeyValuesSummary {
        var defaultProps: {
            data: any;
        };
    }
    declare function AccordianKeyValues(props: AccordianKeyValuesProps): JSX.Element;
    declare namespace AccordianKeyValues {
        var defaultProps: {
            className: any;
            highContrast: boolean;
            interactive: boolean;
            onToggle: any;
        };
    }
    export default AccordianKeyValues;
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/SpanDetail/AccordianLogs" {
    import { TNil } from "src/jaeger-ui-components/types/index";
    import { Log, KeyValuePair, Link } from "src/jaeger-ui-components/types/trace";
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
    declare function AccordianLogs(props: AccordianLogsProps): JSX.Element;
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
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/SpanBar" {
    import React from 'react';
    import { ViewedBoundsFunctionType } from "src/jaeger-ui-components/TraceTimelineViewer/utils";
    import { TNil } from "src/jaeger-ui-components/types/index";
    import { Span } from "src/jaeger-ui-components/types/trace";
    type TCommonProps = {
        color: string;
        onClick?: (evt: React.MouseEvent<any>) => void;
        viewEnd: number;
        viewStart: number;
        getViewedBounds: ViewedBoundsFunctionType;
        rpc: {
            viewStart: number;
            viewEnd: number;
            color: string;
        } | TNil;
        traceStartTime: number;
        span: Span;
        className?: string;
        labelClassName?: string;
    };
    type TOuterProps = {
        longLabel: string;
        shortLabel: string;
    } & TCommonProps;
    const _default_1: React.ComponentClass<TOuterProps, any>;
    export default _default_1;
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/SpanBarRow" {
    import * as React from 'react';
    import { ViewedBoundsFunctionType } from "src/jaeger-ui-components/TraceTimelineViewer/utils";
    import { TNil } from "src/jaeger-ui-components/types/index";
    import { Span } from "src/jaeger-ui-components/types/trace";
    import { Theme } from "src/jaeger-ui-components/Theme";
    type SpanBarRowProps = {
        className?: string;
        theme: Theme;
        color: string;
        columnDivision: number;
        isChildrenExpanded: boolean;
        isDetailExpanded: boolean;
        isMatchingFilter: boolean;
        onDetailToggled: (spanID: string) => void;
        onChildrenToggled: (spanID: string) => void;
        numTicks: number;
        rpc?: {
            viewStart: number;
            viewEnd: number;
            color: string;
            operationName: string;
            serviceName: string;
        } | TNil;
        showErrorIcon: boolean;
        getViewedBounds: ViewedBoundsFunctionType;
        traceStartTime: number;
        span: Span;
        focusSpan: (spanID: string) => void;
        hoverIndentGuideIds: Set<string>;
        addHoverIndentGuideId: (spanID: string) => void;
        removeHoverIndentGuideId: (spanID: string) => void;
        clippingLeft?: boolean;
        clippingRight?: boolean;
    };
    /**
     * This was originally a stateless function, but changing to a PureComponent
     * reduced the render time of expanding a span row detail by ~50%. This is
     * even true in the case where the stateless function has the same prop types as
     * this class and arrow functions are created in the stateless function as
     * handlers to the onClick props. E.g. for now, the PureComponent is more
     * performance than the stateless function.
     */
    export class UnthemedSpanBarRow extends React.PureComponent<SpanBarRowProps> {
        static displayName: string;
        static defaultProps: Partial<SpanBarRowProps>;
        _detailToggle: () => void;
        _childrenToggle: () => void;
        render(): JSX.Element;
    }
    const _default_2: React.ComponentType<Omit<SpanBarRowProps, "theme">> & {
        wrapped: React.ComponentType<SpanBarRowProps>;
    };
    export default _default_2;
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/SpanDetail/TextList" {
    type TextListProps = {
        data: string[];
    };
    export default function TextList(props: TextListProps): JSX.Element;
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/SpanDetail/AccordianText" {
    import * as React from 'react';
    import { TNil } from "src/jaeger-ui-components/types/index";
    type AccordianTextProps = {
        className?: string | TNil;
        data: string[];
        headerClassName?: string | TNil;
        highContrast?: boolean;
        interactive?: boolean;
        isOpen: boolean;
        label: React.ReactNode;
        onToggle?: null | (() => void);
    };
    declare function AccordianText(props: AccordianTextProps): JSX.Element;
    declare namespace AccordianText {
        var defaultProps: {
            className: any;
            highContrast: boolean;
            interactive: boolean;
            onToggle: any;
        };
    }
    export default AccordianText;
}
declare module "src/jaeger-ui-components/common/LabeledList" {
    import * as React from 'react';
    type LabeledListProps = {
        className?: string;
        dividerClassName?: string;
        items: Array<{
            key: string;
            label: React.ReactNode;
            value: React.ReactNode;
        }>;
    };
    export default function LabeledList(props: LabeledListProps): JSX.Element;
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/SpanDetail/AccordianReferences" {
    import * as React from 'react';
    import { SpanReference } from "src/jaeger-ui-components/types/trace";
    type AccordianReferencesProps = {
        data: SpanReference[];
        highContrast?: boolean;
        interactive?: boolean;
        isOpen: boolean;
        onToggle?: null | (() => void);
        focusSpan: (uiFind: string) => void;
    };
    type ReferenceItemProps = {
        data: SpanReference[];
        focusSpan: (uiFind: string) => void;
    };
    export function References(props: ReferenceItemProps): JSX.Element;
    export default class AccordianReferences extends React.PureComponent<AccordianReferencesProps> {
        static defaultProps: Partial<AccordianReferencesProps>;
        render(): JSX.Element;
    }
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/SpanDetail/index" {
    import DetailState from "src/jaeger-ui-components/TraceTimelineViewer/SpanDetail/DetailState";
    import { TNil } from "src/jaeger-ui-components/types/index";
    import { KeyValuePair, Link, Log, Span } from "src/jaeger-ui-components/types/trace";
    type SpanDetailProps = {
        detailState: DetailState;
        linksGetter: ((links: KeyValuePair[], index: number) => Link[]) | TNil;
        logItemToggle: (spanID: string, log: Log) => void;
        logsToggle: (spanID: string) => void;
        processToggle: (spanID: string) => void;
        span: Span;
        tagsToggle: (spanID: string) => void;
        traceStartTime: number;
        warningsToggle: (spanID: string) => void;
        referencesToggle: (spanID: string) => void;
        focusSpan: (uiFind: string) => void;
    };
    export default function SpanDetail(props: SpanDetailProps): JSX.Element;
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/SpanDetailRow" {
    import React from 'react';
    import DetailState from "src/jaeger-ui-components/TraceTimelineViewer/SpanDetail/DetailState";
    import { Theme } from "src/jaeger-ui-components/Theme";
    import { Log, Span, KeyValuePair, Link } from "src/jaeger-ui-components/types/trace";
    type SpanDetailRowProps = {
        color: string;
        columnDivision: number;
        detailState: DetailState;
        onDetailToggled: (spanID: string) => void;
        linksGetter: (span: Span, links: KeyValuePair[], index: number) => Link[];
        logItemToggle: (spanID: string, log: Log) => void;
        logsToggle: (spanID: string) => void;
        processToggle: (spanID: string) => void;
        referencesToggle: (spanID: string) => void;
        warningsToggle: (spanID: string) => void;
        span: Span;
        tagsToggle: (spanID: string) => void;
        traceStartTime: number;
        focusSpan: (uiFind: string) => void;
        hoverIndentGuideIds: Set<string>;
        addHoverIndentGuideId: (spanID: string) => void;
        removeHoverIndentGuideId: (spanID: string) => void;
        theme: Theme;
    };
    export class UnthemedSpanDetailRow extends React.PureComponent<SpanDetailRowProps> {
        _detailToggle: () => void;
        _linksGetter: (items: KeyValuePair[], itemIndex: number) => Link[];
        render(): JSX.Element;
    }
    const _default_3: React.ComponentType<Omit<SpanDetailRowProps, "theme">> & {
        wrapped: React.ComponentType<SpanDetailRowProps>;
    };
    export default _default_3;
}
declare module "src/jaeger-ui-components/utils/color-generator" {
    import { Theme } from "src/jaeger-ui-components/Theme";
    export function clear(): void;
    export function getColorByKey(key: string, theme: Theme): string;
    export function getRgbColorByKey(key: string, theme: Theme): [number, number, number];
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/VirtualizedTraceView" {
    import * as React from 'react';
    import ListView from "src/jaeger-ui-components/TraceTimelineViewer/ListView/index";
    import { ViewedBoundsFunctionType } from "src/jaeger-ui-components/TraceTimelineViewer/utils";
    import { Accessors } from "src/jaeger-ui-components/ScrollManager";
    import { TNil } from "src/jaeger-ui-components/types/index";
    import { Log, Span, Trace, KeyValuePair, Link } from "src/jaeger-ui-components/types/trace";
    import TTraceTimeline from "src/jaeger-ui-components/types/TTraceTimeline";
    import { Theme } from "src/jaeger-ui-components/Theme";
    type TExtractUiFindFromStateReturn = {
        uiFind: string | undefined;
    };
    type RowState = {
        isDetail: boolean;
        span: Span;
        spanIndex: number;
    };
    type TVirtualizedTraceViewOwnProps = {
        currentViewRangeTime: [number, number];
        findMatchesIDs: Set<string> | TNil;
        scrollToFirstVisibleSpan: () => void;
        registerAccessors: (accesors: Accessors) => void;
        trace: Trace;
        focusSpan: (uiFind: string) => void;
        linksGetter: (span: Span, items: KeyValuePair[], itemIndex: number) => Link[];
        childrenToggle: (spanID: string) => void;
        clearShouldScrollToFirstUiFindMatch: () => void;
        detailLogItemToggle: (spanID: string, log: Log) => void;
        detailLogsToggle: (spanID: string) => void;
        detailWarningsToggle: (spanID: string) => void;
        detailReferencesToggle: (spanID: string) => void;
        detailProcessToggle: (spanID: string) => void;
        detailTagsToggle: (spanID: string) => void;
        detailToggle: (spanID: string) => void;
        setSpanNameColumnWidth: (width: number) => void;
        setTrace: (trace: Trace | TNil, uiFind: string | TNil) => void;
        hoverIndentGuideIds: Set<string>;
        addHoverIndentGuideId: (spanID: string) => void;
        removeHoverIndentGuideId: (spanID: string) => void;
        theme: Theme;
    };
    type VirtualizedTraceViewProps = TVirtualizedTraceViewOwnProps & TExtractUiFindFromStateReturn & TTraceTimeline;
    export const DEFAULT_HEIGHTS: {
        bar: number;
        detail: number;
        detailWithLogs: number;
    };
    export class UnthemedVirtualizedTraceView extends React.Component<VirtualizedTraceViewProps> {
        clipping: {
            left: boolean;
            right: boolean;
        };
        listView: ListView | TNil;
        rowStates: RowState[];
        getViewedBounds: ViewedBoundsFunctionType;
        constructor(props: VirtualizedTraceViewProps);
        shouldComponentUpdate(nextProps: VirtualizedTraceViewProps): boolean;
        componentWillUpdate(nextProps: VirtualizedTraceViewProps): void;
        componentDidUpdate(): void;
        getAccessors(): {
            getViewRange: () => [number, number];
            getSearchedSpanIDs: () => Set<string>;
            getCollapsedChildren: () => Set<string>;
            getViewHeight: () => number;
            getBottomRowIndexVisible: () => number;
            getTopRowIndexVisible: () => number;
            getRowPosition: (index: number) => {
                height: number;
                y: number;
            };
            mapRowIndexToSpanIndex: (index: number) => number;
            mapSpanIndexToRowIndex: (index: number) => number;
        };
        getViewRange: () => [number, number];
        getSearchedSpanIDs: () => Set<string>;
        getCollapsedChildren: () => Set<string>;
        mapRowIndexToSpanIndex: (index: number) => number;
        mapSpanIndexToRowIndex: (index: number) => number;
        setListView: (listView: ListView | TNil) => void;
        getKeyFromIndex: (index: number) => string;
        getIndexFromKey: (key: string) => number;
        getRowHeight: (index: number) => number;
        renderRow: (key: string, style: React.CSSProperties, index: number, attrs: {}) => JSX.Element;
        renderSpanBarRow(span: Span, spanIndex: number, key: string, style: React.CSSProperties, attrs: {}): JSX.Element;
        renderSpanDetailRow(span: Span, key: string, style: React.CSSProperties, attrs: {}): JSX.Element;
        render(): JSX.Element;
    }
    const _default_4: React.ComponentType<Omit<VirtualizedTraceViewProps, "theme">> & {
        wrapped: React.ComponentType<VirtualizedTraceViewProps>;
    };
    export default _default_4;
}
declare module "src/jaeger-ui-components/keyboard-mappings" {
    const keyboardMappings: Record<string, {
        binding: string | string[];
        label: string;
    }>;
    export default keyboardMappings;
}
declare module "src/jaeger-ui-components/keyboard-shortcuts" {
    import * as React from 'react';
    export type CombokeysHandler = (() => void) | ((event: React.KeyboardEvent<any>) => void) | ((event: React.KeyboardEvent<any>, s: string) => void);
    export type ShortcutCallbacks = {
        [name: string]: CombokeysHandler;
    };
    export function merge(callbacks: ShortcutCallbacks): void;
    export function reset(): void;
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/index" {
    import React from 'react';
    import { Accessors } from "src/jaeger-ui-components/ScrollManager";
    import { TUpdateViewRangeTimeFunction, ViewRange, ViewRangeTimeUpdate } from "src/jaeger-ui-components/TraceTimelineViewer/types";
    import { TNil } from "src/jaeger-ui-components/types/index";
    import { Span, Trace, Log, KeyValuePair, Link } from "src/jaeger-ui-components/types/trace";
    import TTraceTimeline from "src/jaeger-ui-components/types/TTraceTimeline";
    import { Theme } from "src/jaeger-ui-components/Theme";
    type TExtractUiFindFromStateReturn = {
        uiFind: string | undefined;
    };
    type TProps = TExtractUiFindFromStateReturn & {
        registerAccessors: (accessors: Accessors) => void;
        findMatchesIDs: Set<string> | TNil;
        scrollToFirstVisibleSpan: () => void;
        traceTimeline: TTraceTimeline;
        trace: Trace;
        updateNextViewRangeTime: (update: ViewRangeTimeUpdate) => void;
        updateViewRangeTime: TUpdateViewRangeTimeFunction;
        viewRange: ViewRange;
        focusSpan: (uiFind: string) => void;
        createLinkToExternalSpan: (traceID: string, spanID: string) => string;
        setSpanNameColumnWidth: (width: number) => void;
        collapseAll: (spans: Span[]) => void;
        collapseOne: (spans: Span[]) => void;
        expandAll: () => void;
        expandOne: (spans: Span[]) => void;
        childrenToggle: (spanID: string) => void;
        clearShouldScrollToFirstUiFindMatch: () => void;
        detailLogItemToggle: (spanID: string, log: Log) => void;
        detailLogsToggle: (spanID: string) => void;
        detailWarningsToggle: (spanID: string) => void;
        detailReferencesToggle: (spanID: string) => void;
        detailProcessToggle: (spanID: string) => void;
        detailTagsToggle: (spanID: string) => void;
        detailToggle: (spanID: string) => void;
        setTrace: (trace: Trace | TNil, uiFind: string | TNil) => void;
        addHoverIndentGuideId: (spanID: string) => void;
        removeHoverIndentGuideId: (spanID: string) => void;
        linksGetter: (span: Span, items: KeyValuePair[], itemIndex: number) => Link[];
        theme: Theme;
    };
    type State = {
        height: number;
    };
    /**
     * `TraceTimelineViewer` now renders the header row because it is sensitive to
     * `props.viewRange.time.cursor`. If `VirtualizedTraceView` renders it, it will
     * re-render the ListView every time the cursor is moved on the trace minimap
     * or `TimelineHeaderRow`.
     */
    export class UnthemedTraceTimelineViewer extends React.PureComponent<TProps, State> {
        constructor(props: TProps);
        componentDidMount(): void;
        collapseAll: () => void;
        collapseOne: () => void;
        expandAll: () => void;
        expandOne: () => void;
        render(): JSX.Element;
    }
    const _default_5: React.ComponentType<Omit<TProps, "theme">> & {
        wrapped: React.ComponentType<TProps>;
    };
    export default _default_5;
}
declare module "src/jaeger-ui-components/TracePageHeader/SpanGraph/render-into-canvas" {
    export const ITEM_ALPHA = 0.8;
    export const MIN_ITEM_HEIGHT = 2;
    export const MAX_TOTAL_HEIGHT = 200;
    export const MIN_ITEM_WIDTH = 10;
    export const MIN_TOTAL_HEIGHT = 60;
    export const MAX_ITEM_HEIGHT = 6;
    export default function renderIntoCanvas(canvas: HTMLCanvasElement, items: Array<{
        valueWidth: number;
        valueOffset: number;
        serviceName: string;
    }>, totalValueWidth: number, getFillColor: (serviceName: string) => [number, number, number], bgColor: string): void;
}
declare module "src/jaeger-ui-components/TracePageHeader/SpanGraph/CanvasSpanGraph" {
    import * as React from 'react';
    import { TNil } from "src/jaeger-ui-components/types/index";
    import { Theme } from "src/jaeger-ui-components/Theme";
    type CanvasSpanGraphProps = {
        items: Array<{
            valueWidth: number;
            valueOffset: number;
            serviceName: string;
        }>;
        valueWidth: number;
        theme: Theme;
    };
    export class UnthemedCanvasSpanGraph extends React.PureComponent<CanvasSpanGraphProps> {
        _canvasElm: HTMLCanvasElement | TNil;
        constructor(props: CanvasSpanGraphProps);
        getColor: (key: string) => [number, number, number];
        componentDidMount(): void;
        componentDidUpdate(): void;
        _setCanvasRef: (elm: HTMLCanvasElement | TNil) => void;
        _draw(): void;
        render(): JSX.Element;
    }
    const _default_6: React.ComponentType<Omit<CanvasSpanGraphProps, "theme">> & {
        wrapped: React.ComponentType<CanvasSpanGraphProps>;
    };
    export default _default_6;
}
declare module "src/jaeger-ui-components/TracePageHeader/SpanGraph/TickLabels" {
    type TickLabelsProps = {
        numTicks: number;
        duration: number;
    };
    export default function TickLabels(props: TickLabelsProps): JSX.Element;
}
declare module "src/jaeger-ui-components/TracePageHeader/SpanGraph/GraphTicks" {
    type GraphTicksProps = {
        numTicks: number;
    };
    export default function GraphTicks(props: GraphTicksProps): JSX.Element;
}
declare module "src/jaeger-ui-components/TracePageHeader/SpanGraph/Scrubber" {
    import React from 'react';
    export const getStyles: () => {
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
    export default function Scrubber({ isDragging, onMouseDown, onMouseEnter, onMouseLeave, position }: ScrubberProps): JSX.Element;
}
declare module "src/jaeger-ui-components/TracePageHeader/SpanGraph/ViewingLayer" {
    import * as React from 'react';
    import { TUpdateViewRangeTimeFunction, ViewRange, ViewRangeTimeUpdate } from "src/jaeger-ui-components/index";
    import { Theme } from "src/jaeger-ui-components/Theme";
    import { TNil } from "src/jaeger-ui-components/index";
    import DraggableManager, { DraggableBounds, DraggingUpdate } from "src/jaeger-ui-components/utils/DraggableManager/index";
    export const getStyles: (theme: Theme) => {
        ViewingLayer: string;
        ViewingLayerGraph: string;
        ViewingLayerInactive: string;
        ViewingLayerCursorGuide: string;
        ViewingLayerDraggedShift: string;
        ViewingLayerDrag: string;
        ViewingLayerFullOverlay: string;
        ViewingLayerResetZoom: string;
        ViewingLayerResetZoomHoverClassName: string;
    };
    type ViewingLayerProps = {
        height: number;
        numTicks: number;
        updateViewRangeTime: TUpdateViewRangeTimeFunction;
        updateNextViewRangeTime: (update: ViewRangeTimeUpdate) => void;
        viewRange: ViewRange;
        theme: Theme;
    };
    type ViewingLayerState = {
        /**
         * Cursor line should not be drawn when the mouse is over the scrubber handle.
         */
        preventCursorLine: boolean;
    };
    /**
     * Designate the tags for the different dragging managers. Exported for tests.
     */
    export const dragTypes: {
        /**
         * Tag for dragging the right scrubber, e.g. end of the current view range.
         */
        SHIFT_END: string;
        /**
         * Tag for dragging the left scrubber, e.g. start of the current view range.
         */
        SHIFT_START: string;
        /**
         * Tag for dragging a new view range.
         */
        REFRAME: string;
    };
    /**
     * `ViewingLayer` is rendered on top of the Canvas rendering of the minimap and
     * handles showing the current view range and handles mouse UX for modifying it.
     */
    export class UnthemedViewingLayer extends React.PureComponent<ViewingLayerProps, ViewingLayerState> {
        state: ViewingLayerState;
        _root: Element | TNil;
        /**
         * `_draggerReframe` handles clicking and dragging on the `ViewingLayer` to
         * redefined the view range.
         */
        _draggerReframe: DraggableManager;
        /**
         * `_draggerStart` handles dragging the left scrubber to adjust the start of
         * the view range.
         */
        _draggerStart: DraggableManager;
        /**
         * `_draggerEnd` handles dragging the right scrubber to adjust the end of
         * the view range.
         */
        _draggerEnd: DraggableManager;
        constructor(props: ViewingLayerProps);
        componentWillUnmount(): void;
        _setRoot: (elm: SVGElement | TNil) => void;
        _getDraggingBounds: (tag: string | TNil) => DraggableBounds;
        _handleReframeMouseMove: ({ value }: DraggingUpdate) => void;
        _handleReframeMouseLeave: () => void;
        _handleReframeDragUpdate: ({ value }: DraggingUpdate) => void;
        _handleReframeDragEnd: ({ manager, value }: DraggingUpdate) => void;
        _handleScrubberEnterLeave: ({ type }: DraggingUpdate) => void;
        _handleScrubberDragUpdate: ({ event, tag, type, value }: DraggingUpdate) => void;
        _handleScrubberDragEnd: ({ manager, tag, value }: DraggingUpdate) => void;
        /**
         * Resets the zoom to fully zoomed out.
         */
        _resetTimeZoomClickHandler: () => void;
        /**
         * Renders the difference between where the drag started and the current
         * position, e.g. the red or blue highlight.
         *
         * @returns React.Node[]
         */
        _getMarkers(from: number, to: number): JSX.Element[];
        render(): JSX.Element;
    }
    const _default_7: React.ComponentType<Omit<ViewingLayerProps, "theme">> & {
        wrapped: React.ComponentType<ViewingLayerProps>;
    };
    export default _default_7;
}
declare module "src/jaeger-ui-components/TracePageHeader/SpanGraph/index" {
    import * as React from 'react';
    import { TUpdateViewRangeTimeFunction, ViewRange, ViewRangeTimeUpdate } from "src/jaeger-ui-components/index";
    import { Trace } from "src/jaeger-ui-components/index";
    type SpanGraphProps = {
        height?: number;
        trace: Trace;
        viewRange: ViewRange;
        updateViewRangeTime: TUpdateViewRangeTimeFunction;
        updateNextViewRangeTime: (nextUpdate: ViewRangeTimeUpdate) => void;
    };
    /**
     * Store `items` in state so they are not regenerated every render. Otherwise,
     * the canvas graph will re-render itself every time.
     */
    type SpanGraphState = {
        items: Array<{
            valueOffset: number;
            valueWidth: number;
            serviceName: string;
        }>;
    };
    export default class SpanGraph extends React.PureComponent<SpanGraphProps, SpanGraphState> {
        state: SpanGraphState;
        static defaultProps: {
            height: number;
        };
        constructor(props: SpanGraphProps);
        componentWillReceiveProps(nextProps: SpanGraphProps): void;
        render(): JSX.Element;
    }
}
declare module "src/jaeger-ui-components/TracePageHeader/TracePageSearchBar.markers" {
    export const IN_TRACE_SEARCH = "in-trace-search";
}
declare module "src/jaeger-ui-components/common/UiFindInput" {
    import * as React from 'react';
    import { TNil } from "src/jaeger-ui-components/types/index";
    type Props = {
        allowClear?: boolean;
        inputProps: Record<string, any>;
        location: Location;
        match: any;
        trackFindFunction?: (str: string | TNil) => void;
        value: string | undefined;
        onChange: (value: string) => void;
    };
    export default class UiFindInput extends React.PureComponent<Props> {
        static defaultProps: Partial<Props>;
        clearUiFind: () => void;
        componentWillUnmount(): void;
        render(): JSX.Element;
    }
}
declare module "src/jaeger-ui-components/TracePageHeader/TracePageSearchBar" {
    import * as React from 'react';
    import { TNil } from "src/jaeger-ui-components/types/index";
    export const getStyles: () => {
        TracePageSearchBar: string;
        TracePageSearchBarBar: string;
        TracePageSearchBarCount: string;
        TracePageSearchBarBtn: string;
        TracePageSearchBarBtnDisabled: string;
        TracePageSearchBarLocateBtn: string;
    };
    type TracePageSearchBarProps = {
        textFilter: string | TNil;
        prevResult: () => void;
        nextResult: () => void;
        clearSearch: () => void;
        focusUiFindMatches: () => void;
        resultCount: number;
        navigable: boolean;
        searchValue: string;
        onSearchValueChange: (value: string) => void;
        hideSearchButtons?: boolean;
    };
    const _default_8: React.NamedExoticComponent<TracePageSearchBarProps>;
    export default _default_8;
}
declare module "src/jaeger-ui-components/common/BreakableText" {
    type Props = {
        text: string;
        className?: string;
        wordRegexp?: RegExp;
    };
    declare function BreakableText(props: Props): any;
    declare namespace BreakableText {
        var defaultProps: {
            wordRegexp: RegExp;
        };
    }
    export default BreakableText;
}
declare module "src/jaeger-ui-components/common/LoadingIndicator" {
    type LoadingIndicatorProps = {
        centered?: boolean;
        className?: string;
        small?: boolean;
    };
    declare function LoadingIndicator(props: LoadingIndicatorProps): JSX.Element;
    declare namespace LoadingIndicator {
        var defaultProps: {
            centered: boolean;
            className: any;
            small: boolean;
        };
    }
    export default LoadingIndicator;
}
declare module "src/jaeger-ui-components/constants/index" {
    export const TOP_NAV_HEIGHT: 46;
    export const FALLBACK_DAG_MAX_NUM_SERVICES: 100;
    export const FALLBACK_TRACE_NAME: "<trace-without-root-span>";
    export const FETCH_DONE: "FETCH_DONE";
    export const FETCH_ERROR: "FETCH_ERROR";
    export const FETCH_LOADING: "FETCH_LOADING";
    export const fetchedState: {
        DONE: "FETCH_DONE";
        ERROR: "FETCH_ERROR";
        LOADING: "FETCH_LOADING";
    };
}
declare module "src/jaeger-ui-components/common/TraceName" {
    import { FetchedState, TNil } from "src/jaeger-ui-components/types/index";
    import { ApiError } from "src/jaeger-ui-components/types/api-error";
    type Props = {
        className?: string;
        error?: ApiError | TNil;
        state?: FetchedState | TNil;
        traceName?: string | TNil;
    };
    export default function TraceName(props: Props): JSX.Element;
}
declare module "src/jaeger-ui-components/model/trace-viewer" {
    import { Span } from "src/jaeger-ui-components/types/index";
    export function getTraceName(spans: Span[]): string;
}
declare module "src/jaeger-ui-components/constants/default-config" {
    const _default_9: {
        readonly archiveEnabled: boolean;
        readonly dependencies: {
            readonly dagMaxNumServices: 100;
            readonly menuEnabled: boolean;
        };
        readonly linkPatterns: readonly any[];
        readonly menu: readonly {
            readonly label: string;
            readonly items: readonly {
                readonly label: string;
                readonly url: string;
            }[];
        }[];
        readonly search: {
            readonly maxLookback: {
                readonly label: string;
                readonly value: string;
            };
            readonly maxLimit: number;
        };
        readonly tracking: {
            readonly gaID: any;
            readonly trackErrors: boolean;
        };
    };
    export default _default_9;
    export const deprecations: {
        formerKey: string;
        currentKey: string;
    }[];
}
declare module "src/jaeger-ui-components/utils/config/get-config" {
    /**
     * Merge the embedded config from the query service (if present) with the
     * default config from `../../constants/default-config`.
     */
    export default function getConfig(): {
        readonly archiveEnabled: boolean;
        readonly dependencies: {
            readonly dagMaxNumServices: 100;
            readonly menuEnabled: boolean;
        };
        readonly linkPatterns: readonly any[];
        readonly menu: readonly {
            readonly label: string;
            readonly items: readonly {
                readonly label: string;
                readonly url: string;
            }[];
        }[];
        readonly search: {
            readonly maxLookback: {
                readonly label: string;
                readonly value: string;
            };
            readonly maxLimit: number;
        };
        readonly tracking: {
            readonly gaID: any;
            readonly trackErrors: boolean;
        };
    };
    export function getConfigValue(path: string): any;
}
declare module "src/jaeger-ui-components/model/span" {
    import { Span } from "src/jaeger-ui-components/types/trace";
    /**
     * Searches the span.references to find 'CHILD_OF' reference type or returns null.
     * @param  {Span} span The span whose parent is to be returned.
     * @return {Span|null} The parent span if there is one, null otherwise.
     */
    export function getParent(span: Span): Span;
}
declare module "src/jaeger-ui-components/model/link-patterns" {
    import { TNil } from "src/jaeger-ui-components/types/index";
    import { Span, Link, KeyValuePair, Trace } from "src/jaeger-ui-components/index";
    type ProcessedTemplate = {
        parameters: string[];
        template: (template: {
            [key: string]: any;
        }) => string;
    };
    type ProcessedLinkPattern = {
        object: any;
        type: (link: string) => boolean;
        key: (link: string) => boolean;
        value: (value: any) => boolean;
        url: ProcessedTemplate;
        text: ProcessedTemplate;
        parameters: string[];
    };
    type TLinksRV = Array<{
        url: string;
        text: string;
    }>;
    export function processTemplate(template: any, encodeFn: (unencoded: any) => string): ProcessedTemplate;
    export function createTestFunction(entry: any): (arg: any) => boolean;
    export function processLinkPattern(pattern: any): ProcessedLinkPattern | TNil;
    export function getParameterInArray(name: string, array: KeyValuePair[]): KeyValuePair;
    export function getParameterInAncestor(name: string, span: Span): KeyValuePair;
    export function computeTraceLink(linkPatterns: ProcessedLinkPattern[], trace: Trace): TLinksRV;
    export function computeLinks(linkPatterns: ProcessedLinkPattern[], span: Span, items: KeyValuePair[], itemIndex: number): {
        url: string;
        text: string;
    }[];
    export function createGetLinks(linkPatterns: ProcessedLinkPattern[], cache: WeakMap<KeyValuePair, Link[]>): (span: Span, items: KeyValuePair[], itemIndex: number) => Link[];
    export const getTraceLinks: (trace: Trace | undefined) => TLinksRV;
    const _default_10: (span: Span, items: KeyValuePair[], itemIndex: number) => Link[];
    export default _default_10;
}
declare module "src/jaeger-ui-components/common/ExternalLinks" {
    type Link = {
        text: string;
        url: string;
    };
    type ExternalLinksProps = {
        links: Link[];
        className?: string;
    };
    export const linkValueList: (links: Link[]) => JSX.Element;
    export default function ExternalLinks(props: ExternalLinksProps): JSX.Element;
}
declare module "src/jaeger-ui-components/TracePageHeader/TracePageHeader" {
    import { TUpdateViewRangeTimeFunction, ViewRange, ViewRangeTimeUpdate } from "src/jaeger-ui-components/index";
    import { TNil } from "src/jaeger-ui-components/types/index";
    import { Trace } from "src/jaeger-ui-components/index";
    type TracePageHeaderEmbedProps = {
        canCollapse: boolean;
        clearSearch: () => void;
        focusUiFindMatches: () => void;
        hideMap: boolean;
        hideSummary: boolean;
        nextResult: () => void;
        onSlimViewClicked: () => void;
        onTraceGraphViewClicked: () => void;
        prevResult: () => void;
        resultCount: number;
        slimView: boolean;
        textFilter: string | TNil;
        trace: Trace;
        traceGraphView: boolean;
        updateNextViewRangeTime: (update: ViewRangeTimeUpdate) => void;
        updateViewRangeTime: TUpdateViewRangeTimeFunction;
        viewRange: ViewRange;
        searchValue: string;
        onSearchValueChange: (value: string) => void;
        hideSearchButtons?: boolean;
    };
    export const HEADER_ITEMS: ({
        key: string;
        label: string;
        renderer: (trace: Trace) => string | JSX.Element;
    } | {
        key: string;
        label: string;
        renderer: (trace: Trace) => number;
    })[];
    export default function TracePageHeader(props: TracePageHeaderEmbedProps): JSX.Element;
}
declare module "src/jaeger-ui-components/TracePageHeader/index" {
    export { default } from "src/jaeger-ui-components/TracePageHeader/TracePageHeader";
}
declare module "src/jaeger-ui-components/selectors/process" {
    export function getProcessServiceName(proc: any): any;
    export function getProcessTags(proc: any): any;
}
declare module "src/jaeger-ui-components/selectors/span" {
    export function getSpanId(span: any): any;
    export function getSpanName(span: any): any;
    export function getSpanDuration(span: any): any;
    export function getSpanTimestamp(span: any): any;
    export function getSpanProcessId(span: any): any;
    export function getSpanReferences(span: any): any;
    export const getSpanReferenceByType: any;
    export const getSpanParentId: any;
    export function getSpanProcess(span: any): any;
    export const getSpanServiceName: any;
    export const filterSpansForTimestamps: any;
    export const filterSpansForText: any;
    export const highlightSpansForTextFilter: any;
}
declare module "src/jaeger-ui-components/utils/sort" {
    export function localeStringComparator(itemA: any, itemB: any): any;
    export function numberSortComparator(itemA: any, itemB: any): number;
    export function classNameForSortDir(dir: any): string;
    export function getNewSortForClick(prevSort: any, column: any): {
        key: any;
        dir: any;
    };
    export function createSortClickHandler(column: any, currentSortKey: any, currentSortDir: any, updateSort: any): () => void;
}
declare module "src/jaeger-ui-components/utils/TreeNode" {
    export default class TreeNode {
        static iterFunction(fn: any, depth?: number): (node: any) => any;
        static searchFunction(search: any): any;
        constructor(value: any, children?: any[]);
        value: any;
        children: any[];
        get depth(): any;
        get size(): number;
        addChild(child: any): this;
        find(search: any): any;
        getPath(search: any): any;
        walk(fn: any, depth?: number): void;
    }
}
declare module "src/jaeger-ui-components/selectors/trace" {
    /**
     * Build a tree of { value: spanID, children } items derived from the
     * `span.references` information. The tree represents the grouping of parent /
     * child relationships. The root-most node is nominal in that
     * `.value === TREE_ROOT_ID`. This is done because a root span (the main trace
     * span) is not always included with the trace data. Thus, there can be
     * multiple top-level spans, and the root node acts as their common parent.
     *
     * The children are sorted by `span.startTime` after the tree is built.
     *
     * @param  {Trace} trace The trace to build the tree of spanIDs.
     * @return {TreeNode}    A tree of spanIDs derived from the relationships
     *                       between spans in the trace.
     */
    export function getTraceSpanIdsAsTree(trace: Trace): TreeNode;
    export function getTraceId(trace: any): any;
    export function getTraceSpans(trace: any): any;
    export const getTraceSpansAsMap: any;
    export const TREE_ROOT_ID: "__root__";
    export function hydrateSpansWithProcesses(trace: any): any;
    export const getTraceSpanCount: any;
    export const getTraceTimestamp: any;
    export const getTraceDuration: any;
    export const getTraceEndTimestamp: any;
    export const getParentSpan: any;
    export const getTraceDepth: any;
    export const getSpanDepthForTrace: any;
    export const getTraceServices: any;
    export const getTraceServiceCount: any;
    export namespace DURATION_FORMATTERS {
        export { formatMillisecondTime as ms };
        export { formatSecondTime as s };
    }
    export const formatDurationForUnit: any;
    export const formatDurationForTrace: any;
    export const getSortedSpans: any;
    export const getTreeSizeForTraceSpan: any;
    export const getSpanHierarchySortPositionForTrace: any;
    export const getTraceName: any;
    export const omitCollapsedSpans: any;
    export const DEFAULT_TICK_INTERVAL: 4;
    export const DEFAULT_TICK_WIDTH: 3;
    export const getTicksForTrace: any;
    export const enforceUniqueSpanIds: any;
    export const dropEmptyStartTimeSpans: any;
    import TreeNode from "src/jaeger-ui-components/utils/TreeNode";
    import { formatMillisecondTime } from "src/jaeger-ui-components/utils/date";
    import { formatSecondTime } from "src/jaeger-ui-components/utils/date";
}
declare module "src/jaeger-ui-components/model/transform-trace-data" {
    import { KeyValuePair, SpanData, Trace, TraceData } from "src/jaeger-ui-components/types/trace";
    export function deduplicateTags(spanTags: KeyValuePair[]): {
        tags: KeyValuePair[];
        warnings: string[];
    };
    export function orderTags(spanTags: KeyValuePair[], topPrefixes?: string[]): KeyValuePair[];
    /**
     * NOTE: Mutates `data` - Transform the HTTP response data into the form the app
     * generally requires.
     */
    export default function transformTraceData(data: TraceData & {
        spans: SpanData[];
    }): Trace | null;
}
declare module "src/jaeger-ui-components/utils/filter-spans" {
    import { Span } from "src/jaeger-ui-components/types/trace";
    import { TNil } from "src/jaeger-ui-components/types/index";
    export default function filterSpans(textFilter: string, spans: Span[] | TNil): Set<string>;
}
declare module "src/jaeger-ui-components/index" {
    export { default as TraceTimelineViewer } from "src/jaeger-ui-components/TraceTimelineViewer/index";
    export { default as TracePageHeader } from "src/jaeger-ui-components/TracePageHeader/index";
    export { default as UIElementsContext } from "src/jaeger-ui-components/uiElementsContext";
    export * from "src/jaeger-ui-components/uiElementsContext";
    export * from "src/jaeger-ui-components/types/index";
    export * from "src/jaeger-ui-components/TraceTimelineViewer/types";
    export { default as DetailState } from "src/jaeger-ui-components/TraceTimelineViewer/SpanDetail/DetailState";
    export { default as transformTraceData } from "src/jaeger-ui-components/model/transform-trace-data";
    export { default as filterSpans } from "src/jaeger-ui-components/utils/filter-spans";
    export * from "src/jaeger-ui-components/Theme";
    const _default_11: any;
    export default _default_11;
}
declare module "src/jaeger-ui-components/scroll-page.test" {
    export {};
}
declare module "src/jaeger-ui-components/demo/trace-generators" {
    export const SERVICE_LIST: string[];
    export const OPERATIONS_LIST: string[];
    const _default: any;
    export default _default;
}
declare module "src/jaeger-ui-components/TracePageHeader/TracePageHeader.test" {
    export {};
}
declare module "src/jaeger-ui-components/TracePageHeader/TracePageSearchBar.test" {
    export {};
}
declare module "src/jaeger-ui-components/TracePageHeader/SpanGraph/CanvasSpanGraph.test" {
    export {};
}
declare module "src/jaeger-ui-components/TracePageHeader/SpanGraph/GraphTicks.test" {
    export {};
}
declare module "src/jaeger-ui-components/TracePageHeader/SpanGraph/Scrubber.test" {
    export {};
}
declare module "src/jaeger-ui-components/TracePageHeader/SpanGraph/TickLabels.test" {
    export {};
}
declare module "src/jaeger-ui-components/utils/test/requestAnimationFrame" {
    export default function requestAnimationFrame(callback: any): NodeJS.Timeout;
    export function cancelAnimationFrame(id: any): void;
    export function polyfill(target: any, msElapse?: number): void;
}
declare module "src/jaeger-ui-components/TracePageHeader/SpanGraph/ViewingLayer.test" {
    export {};
}
declare module "src/jaeger-ui-components/TracePageHeader/SpanGraph/index.test" {
    export {};
}
declare module "src/jaeger-ui-components/TracePageHeader/SpanGraph/render-into-canvas.test" {
    export {};
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/ReferencesButton.test" {
    export {};
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/SpanBar.test" {
    export {};
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/SpanBarRow.test" {
    export {};
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/SpanDetailRow.test" {
    export {};
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/SpanTreeOffset.test" {
    export {};
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/Ticks.test" {
    export {};
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/VirtualizedTraceView.test" {
    export {};
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/index.test" {
    export {};
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/utils.test" {
    export {};
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/ListView/Positions.test" {
    export {};
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/ListView/index.test" {
    export {};
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/SpanDetail/AccordianKeyValues.test" {
    export {};
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/SpanDetail/AccordianLogs.test" {
    export {};
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/SpanDetail/AccordianReferences.test" {
    export {};
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/SpanDetail/AccordianText.test" {
    export {};
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/SpanDetail/KeyValuesTable.test" {
    export {};
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/SpanDetail/TextList.test" {
    export {};
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/SpanDetail/index.test" {
    export {};
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/TimelineHeaderRow/TimelineCollapser.test" {
    export {};
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/TimelineHeaderRow/TimelineColumnResizer.test" {
    export {};
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/TimelineHeaderRow/TimelineHeaderRow.test" {
    export {};
}
declare module "src/jaeger-ui-components/TraceTimelineViewer/TimelineHeaderRow/TimelineViewingLayer.test" {
    export {};
}
declare module "src/jaeger-ui-components/common/CopyIcon.test" {
    export {};
}
declare module "src/jaeger-ui-components/common/NewWindowIcon.test" {
    export {};
}
declare module "src/jaeger-ui-components/common/UiFindInput.test" {
    export {};
}
declare module "src/jaeger-ui-components/model/link-patterns.test" {
    export {};
}
declare module "src/jaeger-ui-components/model/transform-trace-data.test" {
    export {};
}
declare module "src/jaeger-ui-components/model/ddg/types" {
    import PathElem from "src/jaeger-ui-components/model/ddg/PathElem";
    export { default as PathElem } from "src/jaeger-ui-components/model/ddg/PathElem";
    export type TDdgService = {
        name: string;
        operations: Map<string, TDdgOperation>;
    };
    export type TDdgOperation = {
        name: string;
        pathElems: PathElem[];
        service: TDdgService;
    };
    export type TDdgServiceMap = Map<string, TDdgService>;
    export type TDdgPath = {
        focalIdx: number;
        members: PathElem[];
        traceIDs: string[];
    };
    export type TDdgDistanceToPathElems = Map<number, PathElem[]>;
    export type TDdgModel = {
        distanceToPathElems: TDdgDistanceToPathElems;
        hash: string;
        paths: TDdgPath[];
        services: TDdgServiceMap;
        visIdxToPathElem: PathElem[];
    };
}
declare module "src/jaeger-ui-components/model/ddg/PathElem" {
    import { TDdgOperation, TDdgPath } from "src/jaeger-ui-components/model/ddg/types";
    export default class PathElem {
        memberIdx: number;
        memberOf: TDdgPath;
        operation: TDdgOperation;
        private _visibilityIdx?;
        constructor({ path, operation, memberIdx }: {
            path: TDdgPath;
            operation: TDdgOperation;
            memberIdx: number;
        });
        get distance(): number;
        get externalPath(): PathElem[];
        get externalSideNeighbor(): PathElem | null | undefined;
        get focalPath(): PathElem[];
        get focalSideNeighbor(): PathElem | null;
        get isExternal(): boolean;
        set visibilityIdx(visibilityIdx: number);
        get visibilityIdx(): number;
        private toJSONHelper;
        toJSON(): {
            memberOf: {
                focalIdx: number;
                members: {
                    memberIdx: number;
                    operation: string;
                    service: string;
                    visibilityIdx: number;
                }[];
            };
            memberIdx: number;
            operation: string;
            service: string;
            visibilityIdx: number;
        };
        toString(): string;
        get [Symbol.toStringTag](): string;
    }
}
declare module "src/jaeger-ui-components/model/ddg/sample-paths.test.resources" {
    export function simplePayloadElemMaker(label: any): {
        operation: string;
        service: string;
    };
    export namespace focalPayloadElem {
        let operation: string;
        let service: string;
    }
    export namespace firstPayloadElem { }
    export namespace beforePayloadElem { }
    export namespace midPayloadElem { }
    export namespace afterPayloadElem { }
    export namespace lastPayloadElem { }
    export const shortPath: {
        operation: string;
        service: string;
    }[];
    export const simplePath: {
        operation: string;
        service: string;
    }[];
    export const longSimplePath: any[];
    export const noFocalPath: {
        operation: string;
        service: string;
    }[];
    export const doubleFocalPath: {
        operation: string;
        service: string;
    }[];
    export const almostDoubleFocalPath: {
        operation: string;
        service: string;
    }[];
    export const convergentPaths: {
        operation: string;
        service: string;
    }[][];
    export const generationPaths: {
        operation: string;
        service: string;
    }[][];
    export function wrap(paths: any): {
        dependencies: any;
    };
}
declare module "src/jaeger-ui-components/model/ddg/PathElem.test" {
    export {};
}
declare module "src/jaeger-ui-components/selectors/process.test" {
    export {};
}
declare module "src/jaeger-ui-components/selectors/span.test" {
    export {};
}
declare module "src/jaeger-ui-components/selectors/trace.fixture" {
    export namespace followsFromRef {
        namespace processes {
            namespace p1 {
                let serviceName: string;
                let tags: any[];
            }
        }
        let spans: {
            duration: number;
            flags: number;
            logs: any[];
            operationName: string;
            processID: string;
            references: {
                refType: string;
                spanID: string;
                traceID: string;
            }[];
            spanID: string;
            startTime: number;
            tags: any[];
            traceID: string;
            warnings: any;
        }[];
        let traceID: string;
        let warnings: any;
    }
}
declare module "src/jaeger-ui-components/selectors/trace.test" {
    export {};
}
declare module "src/jaeger-ui-components/types/TDdgState" {
    import { ApiError } from "src/jaeger-ui-components/types/api-error";
    import { fetchedState } from "src/jaeger-ui-components/constants/index";
    import { TDdgModel } from "src/jaeger-ui-components/model/ddg/types";
    export type TDdgStateEntry = {
        state: typeof fetchedState.LOADING;
    } | {
        error: ApiError;
        state: typeof fetchedState.ERROR;
    } | {
        model: TDdgModel;
        state: typeof fetchedState.DONE;
        viewModifiers: Map<number, number>;
    };
    type TDdgState = Record<string, TDdgStateEntry>;
    export default TDdgState;
}
declare module "src/jaeger-ui-components/types/TTraceDiffState" {
    import TNil from "src/jaeger-ui-components/types/TNil";
    type TTraceDiffState = {
        a?: string | TNil;
        b?: string | TNil;
        cohort: string[];
    };
    export default TTraceDiffState;
}
declare module "src/jaeger-ui-components/types/archive" {
    import { ApiError } from "src/jaeger-ui-components/types/api-error";
    export type TraceArchive = {
        isLoading?: boolean;
        isArchived?: boolean;
        isError?: boolean;
        error?: ApiError;
        isAcknowledged?: boolean;
    };
    export type TracesArchive = Record<string, TraceArchive>;
}
declare module "src/jaeger-ui-components/types/config" {
    import { TNil } from "src/jaeger-ui-components/types/index";
    export type ConfigMenuItem = {
        label: string;
        url: string;
        anchorTarget?: '_self' | '_blank' | '_parent' | '_top';
    };
    export type ConfigMenuGroup = {
        label: string;
        items: ConfigMenuItem[];
    };
    export type TScript = {
        text: string;
        type: 'inline';
    };
    export type LinkPatternsConfig = {
        type: 'process' | 'tags' | 'logs' | 'traces';
        key?: string;
        url: string;
        text: string;
    };
    export type Config = {
        archiveEnabled?: boolean;
        deepDependencies?: {
            menuEnabled?: boolean;
        };
        dependencies?: {
            dagMaxServicesLen?: number;
            menuEnabled?: boolean;
        };
        menu: (ConfigMenuGroup | ConfigMenuItem)[];
        search?: {
            maxLookback: {
                label: string;
                value: string;
            };
            maxLimit: number;
        };
        scripts?: TScript[];
        topTagPrefixes?: string[];
        tracking?: {
            cookieToDimension?: {
                cookie: string;
                dimension: string;
            }[];
            gaID: string | TNil;
            trackErrors: boolean | TNil;
        };
        linkPatterns?: LinkPatternsConfig;
    };
}
declare module "src/jaeger-ui-components/types/embedded" {
    type EmbeddedStateV0 = {
        version: 'v0';
        searchHideGraph: boolean;
        timeline: {
            collapseTitle: boolean;
            hideMinimap: boolean;
            hideSummary: boolean;
        };
    };
    export type EmbeddedState = EmbeddedStateV0;
}
declare module "src/jaeger-ui-components/types/search" {
    import { TNil } from "src/jaeger-ui-components/types/index";
    export type SearchQuery = {
        end: number | string;
        limit: number | string;
        lookback: string;
        maxDuration: null | string;
        minDuration: null | string;
        operation: string | TNil;
        service: string;
        start: number | string;
        tags: string | TNil;
    };
    /**
     * Type used to summarize traces for the search page.
     */
    export type TraceSummary = {
        /**
         * Duration of trace in milliseconds.
         */
        duration: number;
        /**
         * Start time of trace in milliseconds.
         */
        timestamp: number;
        traceName: string;
        traceID: string;
        numberOfErredSpans: number;
        numberOfSpans: number;
        services: {
            name: string;
            numberOfSpans: number;
        }[];
    };
    export type TraceSummaries = {
        /**
         * Duration of longest trace in `traces` in milliseconds.
         */
        maxDuration: number;
        traces: TraceSummary[];
    };
}
declare module "src/jaeger-ui-components/url/ReferenceLink.test" {
    export {};
}
declare module "src/jaeger-ui-components/utils/TreeNode.test" {
    export {};
}
declare module "src/jaeger-ui-components/utils/color-generator.test" {
    export {};
}
declare module "src/jaeger-ui-components/utils/filter-spans.test" {
    export {};
}
declare module "src/jaeger-ui-components/utils/sort.test" {
    export {};
}
declare module "src/jaeger-ui-components/utils/span-ancestor-ids.test" {
    export {};
}
declare module "src/jaeger-ui-components/utils/DraggableManager/DraggableManager.test" {
    export {};
}
declare module "src/jaeger-ui-components/utils/DraggableManager/demo/DividerDemo" {
    import React from 'react';
    import { DraggableBounds, DraggingUpdate } from "src/jaeger-ui-components/utils/DraggableManager/index";
    import DraggableManager from "src/jaeger-ui-components/utils/DraggableManager/DraggableManager";
    import TNil from "src/jaeger-ui-components/types/TNil";
    import './DividerDemo.css';
    type DividerDemoProps = {
        position: number;
        updateState: (udpate: {
            dividerPosition: number;
        }) => void;
    };
    export default class DividerDemo extends React.PureComponent<DividerDemoProps> {
        _dragManager: DraggableManager;
        _realmElm: HTMLElement | TNil;
        constructor(props: DividerDemoProps);
        _setRealm: (elm: HTMLElement | TNil) => void;
        _getDraggingBounds: () => DraggableBounds;
        _handleDragEvent: ({ value }: DraggingUpdate) => void;
        render(): JSX.Element;
    }
}
declare module "src/jaeger-ui-components/utils/DraggableManager/demo/RegionDemo" {
    import React from 'react';
    import DraggableManager, { DraggableBounds, DraggingUpdate } from "src/jaeger-ui-components/utils/DraggableManager/index";
    import { TNil } from "src/jaeger-ui-components/types/index";
    import './RegionDemo.css';
    type TUpdate = {
        regionCursor?: number | null;
        regionDragging?: number[] | null;
    };
    type RegionDemoProps = {
        regionCursor: number | TNil;
        regionDragging: [number, number] | TNil;
        updateState: (update: TUpdate) => void;
    };
    export default class RegionDemo extends React.PureComponent<RegionDemoProps> {
        _dragManager: DraggableManager;
        _realmElm: HTMLElement | TNil;
        constructor(props: RegionDemoProps);
        _setRealm: (elm: HTMLElement | TNil) => void;
        _getDraggingBounds: () => DraggableBounds;
        _handleMouseMove: ({ value }: DraggingUpdate) => void;
        _handleMouseLeave: () => void;
        _handleDragUpdate: ({ value }: DraggingUpdate) => void;
        _handleDragEnd: ({ value }: DraggingUpdate) => void;
        render(): JSX.Element;
    }
}
declare module "src/jaeger-ui-components/utils/DraggableManager/demo/DraggableManagerDemo" {
    import React from 'react';
    import { TNil } from "src/jaeger-ui-components/types/index";
    import './DraggableManagerDemo.css';
    export type DraggableManagerDemoState = {
        dividerPosition: number;
        regionCursor: number | TNil;
        regionDragging: [number, number] | TNil;
    };
    export default class DraggableManagerDemo extends React.PureComponent<{}, DraggableManagerDemoState> {
        state: DraggableManagerDemoState;
        constructor(props: {});
        _udpateState: (nextState: {}) => void;
        render(): JSX.Element;
    }
}
declare module "src/jaeger-ui-components/utils/DraggableManager/demo/index" {
    export { default } from "src/jaeger-ui-components/utils/DraggableManager/demo/DraggableManagerDemo";
}
