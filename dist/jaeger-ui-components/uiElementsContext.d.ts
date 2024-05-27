import React from 'react';
export type TooltipPlacement = 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
export type PopoverProps = {
    content?: React.ReactNode;
    arrowPointAtCenter?: boolean;
    overlayClassName?: string;
    placement?: TooltipPlacement;
    children?: React.ReactNode;
};
export declare const UIPopover: React.ComponentType<PopoverProps>;
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
export declare const UITooltip: React.ComponentType<TooltipProps>;
export type IconProps = {
    type: string;
    className?: string;
    onClick?: React.MouseEventHandler<any>;
};
export declare const UIIcon: React.ComponentType<IconProps>;
export type DropdownProps = {
    overlay: React.ReactNode;
    placement?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
    trigger?: Array<'click' | 'hover' | 'contextMenu'>;
    children?: React.ReactNode;
};
export declare const UIDropdown: (props: DropdownProps) => React.JSX.Element;
export type MenuProps = {
    children?: React.ReactNode;
};
export declare const UIMenu: (props: MenuProps) => React.JSX.Element;
export type MenuItemProps = {
    children?: React.ReactNode;
};
export declare const UIMenuItem: (props: MenuItemProps) => React.JSX.Element;
export type ButtonHTMLType = 'submit' | 'button' | 'reset';
export type ButtonProps = {
    children?: React.ReactNode;
    className?: string;
    htmlType?: ButtonHTMLType;
    icon?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
};
export declare const UIButton: (props: ButtonProps) => React.JSX.Element;
export type DividerProps = {
    className?: string;
    type?: 'vertical' | 'horizontal';
};
export declare const UIDivider: (props: DividerProps) => React.JSX.Element;
export type InputProps = {
    autosize?: boolean | null;
    placeholder?: string;
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
    suffix: React.ReactNode;
    value?: string;
};
export declare const UIInput: React.FC<InputProps>;
export type InputGroupProps = {
    className?: string;
    compact?: boolean;
    style?: React.CSSProperties;
    children?: React.ReactNode;
};
export declare const UIInputGroup: (props: InputGroupProps) => React.JSX.Element;
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
declare const UIElementsContext: React.Context<Elements>;
export default UIElementsContext;
type GetElementsContextProps = {
    children: (elements: Elements) => React.ReactNode;
};
/**
 * Convenience render prop style component to handle error state when elements are not defined.
 */
export declare function GetElementsContext(props: GetElementsContextProps): React.JSX.Element;
