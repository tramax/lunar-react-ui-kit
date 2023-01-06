import React from 'react';

interface WrapperProps {
  children?: React.ReactNode;
  className?: string;
}

export const Div = ({
  children, ...props
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
