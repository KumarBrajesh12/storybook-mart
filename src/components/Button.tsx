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

const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
}) => {
  const buttonClass = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return (
    <button
      type="button"
      className={`storybook-button storybook-button--${size} ${buttonClass}`}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
