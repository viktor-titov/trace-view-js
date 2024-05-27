import React from 'react';
export type ThemeOptions = Partial<Theme>;
export declare enum ThemeType {
    Dark = 0,
    Light = 1
}
export type Theme = {
    type: ThemeType;
    servicesColorPalette: string[];
    borderStyle: string;
};
export declare const defaultTheme: Theme;
export declare function isLight(theme?: Theme | ThemeOptions): boolean;
export declare const ThemeProvider: React.Provider<Partial<Theme>>;
type ThemeConsumerProps = {
    children: (theme: Theme) => React.ReactNode;
};
export declare function ThemeConsumer(props: ThemeConsumerProps): React.JSX.Element;
type WrappedWithThemeComponent<Props> = React.ComponentType<Omit<Props, 'theme'>> & {
    wrapped: React.ComponentType<Props>;
};
export declare const withTheme: <Props extends {
    theme: Theme;
}, Statics extends {} = {}>(Component: React.ComponentType<Props>) => WrappedWithThemeComponent<Props>;
export declare function useTheme(): Theme;
export declare const createStyle: <Fn extends (this: any, ...newArgs: any[]) => ReturnType<Fn>>(fn: Fn) => Fn;
/**
 * Tries to get a dark variant color. Either by simply inverting the luminosity and darkening or lightening the color
 * a bit, or if base is provided, tries 2 variants of lighter and darker colors and checks which is more readable with
 * the base.
 * @param theme
 * @param hex
 * @param base
 */
export declare function autoColor(theme: Theme, hex: string, base?: string): string;
export {};
