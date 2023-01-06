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