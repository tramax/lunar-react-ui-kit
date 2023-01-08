import styles from './section.module.css';

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

/**
 * Renders a section that optionally includes a label
 */
export const Section = ({
  label,
  children
}: SectionProps) => {
  return (
    <div
      className={styles.section}
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