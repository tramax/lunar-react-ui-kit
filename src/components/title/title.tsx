import styles from './title.module.css';
import classnames from 'classnames';

interface TitleProps {
  /**
   * Content
   */
  children?: React.ReactNode;
  /**
   * Font size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Text case transformation
   */
  transformation?: 'none' | 'capitalize' | 'uppercase';
}


export const Title = ({
  children,
  size,
  transformation
}: TitleProps) => {
  const classes = classnames({
    [styles.title]: true,
    [styles.small]: size === 'small',
    [styles.large]: size === 'large',
    [styles.capitalize]: transformation === 'capitalize',
    [styles.uppercase]: transformation === 'uppercase'
  });

  return (
    <p className={classes}>
      {children}
    </p>
  );
};
