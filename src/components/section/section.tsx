import styles from './section.module.css';
import classnames from 'classnames';

interface SectionProps {
  /**
   * Content
   */
  children?: React.ReactNode;
  /**
   * Section label
   */
  label?: string;
}

export const Section = ({
  label,
  children
}: SectionProps) => {
  const classes = classnames({
    [styles.section]: true
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
      {children}
    </div>
  );
};