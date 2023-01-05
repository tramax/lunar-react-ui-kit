import styles from './button.module.css';
import classnames from 'classnames';

interface ButtonProps {
  /**
   * The main action in a page
   */
  primary?: boolean;
  /**
   * Button content
   */
  label: string;
  /**
   * Click handler function
   */
  onClick?: () => void;
}

/**
 * Allows users to perform some action
 */
export const Button = ({
  primary = false,
  label,
  ...props
}: ButtonProps) => {
  const classes = classnames({
    [styles.button]: true,
    [styles.primary]: primary
  });

  return (
    <button
      type="button"
      className={classes}
      {...props}
    >
      {label}
    </button>
  );
};
