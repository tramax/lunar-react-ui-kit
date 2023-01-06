import React from 'react';
import styles from './tag.module.css';
import { RiCloseCircleFill } from 'react-icons/ri';

interface TagProps {
  /**
   * Content
   */
  children?: React.ReactNode;
  /**
   * Show or hide the remove icon
   */
  showRemove?: boolean;
  /**
   * Handler function when user click the remove icon
   */
  onRemove?: () => void;
}

/**
 * Allows users to perform some action
 */
export const Tag = ({
  children,
  showRemove,
  onRemove
}: TagProps) => {

  return (
    <div
      className={styles.tag}
    >
      {children}
      {showRemove &&
        <span
          onClick={onRemove}
        >
          <RiCloseCircleFill
            size={16}
            className={styles.icon}
          />
        </span>
      }
    </div>
  );
};
