import React from 'react';
import styles from './checkbox.module.css';
import classnames from 'classnames';
import { HoverPad } from 'components/hover-pad/hover-pad';

interface CheckboxProps {
  /**
   * Content
   */
  children?: React.ReactNode;
  /**
   * Checkbox value
   */
  checked: boolean;
  /**
   * Checkbox change handler function
   */
  onChange?: () => void;
}

export const Checkbox = ({
  children,
  checked,
  onChange
}: CheckboxProps) => {
  const boxClasses = classnames({
    [styles.box]: true,
    [styles.checked]: checked
  });

  return (
    <HoverPad
      onClick={onChange}
      className={styles.wrapper}
    >
      <div
        className={styles.content}
      >
        <div
          className={boxClasses}
        >
          {checked &&
            <div
              className={styles.checkedIcon}
            >
            </div>
          }
        </div>
        <div
          className={styles.content}
        >
          {children}
        </div>
      </div>
    </HoverPad> 
  );
};