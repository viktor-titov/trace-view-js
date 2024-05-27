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
export default function LabeledList(props: LabeledListProps): React.JSX.Element;
export {};
