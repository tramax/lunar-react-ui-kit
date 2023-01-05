import React from 'react';
import styles from './hover-pad.module.css';
import classnames from 'classnames';

interface HoverPadProps {
  /**
   * The main action in a page
   */
  children?: React.ReactNode
}

/**
 * Allows users to perform some action
 */
export const HoverPad = ({
  children
}: HoverPadProps) => {
  const classes = classnames({
    [styles.pad]: true,
  });

  return (
    <div
      className={classes}
    >
      {children}
    </div>
  );
};
