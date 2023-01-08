import React from 'react';
import styles from './card.module.css';
import classnames from 'classnames';
import commonStyles from 'styles/common.module.css';

interface CardProps {
  /**
   * Content
   */
  children?: React.ReactNode;
  /**
   * Show or hide the remove icon
   */
  removable?: boolean;
  /**
   * Optional card's label
   */
  label?: string;
}

/**
 * Displays a group of related information
 */
export const Card = ({
  children,
  label
}: CardProps) => {
  const classes = classnames({
    [commonStyles.squircle]: true,
    [styles.card]: true
  });

  return (
    <div
      className={classes}
    >
      {label &&
        <div
          className={styles.label}
        >
          {label}
        </div>
      }
      <div>
        {children}
      </div>
    </div>
  );
};
