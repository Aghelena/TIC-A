import React, { useState, ReactNode } from 'react';

interface SelectProps {
    defaultValue?: string;
    onValueChange: (value: string) => void;
    children: ReactNode;
}

export const Select = ({ defaultValue, onValueChange, children }: SelectProps) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    const handleChange = (value: string) => {
        setSelectedValue(value);
        onValueChange(value);
    };

    return (
        <div>
            {children && React.Children.map(children, child =>
                React.cloneElement(child as any, { onChange: handleChange, value: selectedValue })
            )}
        </div>
    );
};
