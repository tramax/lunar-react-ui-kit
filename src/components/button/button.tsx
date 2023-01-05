import styles from './button.module.css';
import classnames from 'classnames';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label
}: ButtonProps) => {
  const classes = classnames({
    [styles.button]: true,
    [styles.primary]: primary
  });

  return (
    <button
      type="button"
      className={classes}
    >
      {label}
    </button>
  );
};
