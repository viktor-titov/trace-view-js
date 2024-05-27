import * as React from 'react';
import { SpanReference } from '../../types/trace';
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
export declare function References(props: ReferenceItemProps): React.JSX.Element;
export default class AccordianReferences extends React.PureComponent<AccordianReferencesProps> {
    static defaultProps: Partial<AccordianReferencesProps>;
    render(): React.JSX.Element;
}
export {};
