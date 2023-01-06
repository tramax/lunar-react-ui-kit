import React from 'react';
import styles from './hover-pad.module.css';
import classnames from 'classnames';
import { Div, Label } from 'components/element/element';

interface HoverPadProps {
  /**
   * Content
   */
  children?: React.ReactNode;
  /**
   * The wrapper type
   */
  elementType?: 'div' | 'label';
}

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
