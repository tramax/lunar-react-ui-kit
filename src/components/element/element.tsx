import React from 'react';

interface WrapperProps {
  children?: React.ReactNode;
  /**
   * Optional class name
   */
  className?: string;
  /**
   * Click handler function
   */
  onClick?: () => void;
}

export const Div = ({
  children, 
  ...props
}: WrapperProps) => {
  return (
    <div
      {...props}
    >
      {children}
    </div>
  );
};

export const Label = ({
  children, ...props
}: WrapperProps) => {
  return (
    <label
      {...props}
    >
      {children}
    </label>
  );
};
