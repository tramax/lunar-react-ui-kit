import React from 'react';
import commonStyles from 'styles/common.module.css';
import styles from './hover-pad.module.css';
import classnames from 'classnames';
import { Div, Label } from 'components/element/element';

interface HoverPadProps {
  /**
   * Content
   */
  children?: React.ReactNode;
  /**
   * Optional class name
   */
  className?: string;
  /**
   * The wrapper type
   */
  elementType?: 'div' | 'label';
  /**
   * Optional click handler function
   */
  onClick?: () => void;
}

const componentMap = {
  div: Div,
  label: Label
};

/**
 * Allows users to perform some action
 */
export const HoverPad = ({
  className,
  children,
  onClick,
  elementType = 'div'
}: HoverPadProps) => {
  const classes = classnames({
    [commonStyles.squircle]: true,
    [styles.pad]: true
  }, className);
  
  const Wrapper = componentMap[elementType];

  return (
    <Wrapper
      className={classes}
      onClick={onClick}
    >
      {children}
    </Wrapper>
  );
};
