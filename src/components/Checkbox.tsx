import React, { useState } from 'react';

interface CheckboxProps {
  isChecked?: boolean;
  checkedColor?: string;
  iconColor?: string;
  label?: string;
  labelColor?: string;
  borderRadius?: string;
  quantity?: number;
}

const Checkbox: React.FC<CheckboxProps> = ({
  isChecked = false,
  checkedColor = '#6C00C6',
  iconColor = '#FFFFFF',
  label = 'Checkbox Text',
  labelColor = '#495057',
  borderRadius = '0.25rem',
  quantity = 0,
}) => {
  const [checked, setChecked] = useState<boolean>(isChecked);

  const uniqueId = `${label}-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className='min-w-[126px]'>
      <label
        htmlFor={uniqueId}
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id={uniqueId}
            className="sr-only"
            onChange={() => {
              setChecked(!checked);
            }}
            checked={checked}
          />
          <div
            className={`mr-2 flex h-[18px] w-[18px] items-center justify-center border ${
              checked ? '' : '!border-[#46465c99]'
            }`}
            style={{
              backgroundColor: checked ? checkedColor : 'transparent',
              borderColor: checked ? checkedColor : '#D1D5DB',
              borderRadius: borderRadius,
            }}
          >
            <span
              className={`${
                checked ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-200`}
            >
              <svg
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: iconColor }}
              >
                <path
                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                  fill={iconColor}
                  stroke={iconColor}
                  strokeWidth="0.4"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <span className="text-xs font-semibold ml-2" style={{ color: labelColor }}>
          {label}
        </span>
        {quantity > 0 && (
          <span className="ml-2">
            {`(${quantity})`}
          </span>
        )}
      </label>
    </div>
  );
};

export default Checkbox;
