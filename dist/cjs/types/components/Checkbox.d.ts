import React from 'react';
interface CheckboxProps {
    isChecked?: boolean;
    checkedColor?: string;
    iconColor?: string;
    label?: string;
    labelColor?: string;
    borderRadius?: string;
    quantity?: number;
}
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
