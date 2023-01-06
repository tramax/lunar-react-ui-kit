import React from 'react';
import styles from './tag.module.css';

interface TagProps {
  /**
   * Content
   */
  children?: React.ReactNode;
}

/**
 * Allows users to perform some action
 */
export const Tag = ({
  children
}: TagProps) => {

  return (
    <div
      className={styles.tag}
    >
      {children}
    </div>
  );
};
