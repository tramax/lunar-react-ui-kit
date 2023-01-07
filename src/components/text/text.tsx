import styles from './text.module.css';
import classnames from 'classnames';

interface TextProps {
  /**
   * Content
   */
  children?: React.ReactNode;
  /**
   * Bold font weight
   */
  bold?: boolean;
  /**
   * Font size
   */
  size?: 'small' | 'medium' | 'large';
}


export const Text = ({
  children,
  size,
  bold
}: TextProps) => {
  const classes = classnames({
    [styles.text]: true,
    [styles.small]: size === 'small',
    [styles.large]: size === 'large',
    [styles.bold]: bold
  });

  return (
    <p className={classes}>
      {children}
    </p>
  );
};
