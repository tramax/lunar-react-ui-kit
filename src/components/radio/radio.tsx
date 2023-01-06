import React from 'react';
import styles from './radio.module.css';
import classnames from 'classnames';
import { HoverPad } from 'components/hover-pad/hover-pad';

interface RadioProps {
  /**
   * Content
   */
  children?: React.ReactNode;
  /**
   * Radio value
   */
  checked: boolean;
  /**
   * Radio change handler function
   */
  onChange?: () => void;
}

export const Radio = ({
  children,
  checked,
  onChange
}: RadioProps) => {
  const boxClasses = classnames({
    [styles.box]: true,
    [styles.checked]: checked
  });

  return (
    <HoverPad
      onClick={onChange}
    >
      <div
        className={styles.wrapper}
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