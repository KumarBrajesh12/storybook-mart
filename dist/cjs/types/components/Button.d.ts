import React from 'react';
import '../stories/button.css';
interface ButtonProps {
    /**
     * Is this the primary call to action on the page?
     */
    primary?: boolean;
    /**
     * Background color of the button
     */
    backgroundColor?: string;
    /**
     * Size of the button
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Label text of the button
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
