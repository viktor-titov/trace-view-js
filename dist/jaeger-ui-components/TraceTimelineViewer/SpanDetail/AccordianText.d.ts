import * as React from 'react';
import { TNil } from '../../types';
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
declare function AccordianText(props: AccordianTextProps): React.JSX.Element;
declare namespace AccordianText {
    var defaultProps: {
        className: any;
        highContrast: boolean;
        interactive: boolean;
        onToggle: any;
    };
}
export default AccordianText;
