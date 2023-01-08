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
  removable?: boolean;
  /**
   * Handler function when user click the remove icon
   */
  onRemove?: () => void;
}

/**
 * Displays a tag suitable for predefined information (enum)
 */
export const Tag = ({
  children,
  removable,
  onRemove
}: TagProps) => {

  return (
    <div
      className={styles.tag}
    >
      {children}
      {removable &&
        <span
          onClick={onRemove}
        >
          <RiCloseCircleFill
            size={16}
            className={styles.removeIcon}
          />
        </span>
      }
    </div>
  );
};
