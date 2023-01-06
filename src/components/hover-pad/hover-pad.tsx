import React from 'react';
import styles from './hover-pad.module.css';
import classnames from 'classnames';

interface HoverPadProps {
  children?: React.ReactNode;
  /**
   * The wrapper type
   */
  elementType?: 'div' | 'label';
}

interface WrapperProps {
  children?: React.ReactNode;
  className?: string;
}

const Div = ({
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

const Label = ({
  children,
  ...props
}: WrapperProps) => {
  return (
    <label
      {...props}
    >
      {children}
    </label>
  );
};

const componentMap = {
  div: Div,
  label: Label
};

/**
 * Allows users to perform some action
 */
export const HoverPad = ({
  children,
  elementType = 'div'
}: HoverPadProps) => {
  const classes = classnames({
    [styles.pad]: true,
  });
  const Wrapper = componentMap[elementType];

  return (
    <Wrapper
      className={classes}
    >
      {children}
    </Wrapper>
  );
};
