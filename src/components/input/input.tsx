import styles from './input.module.css';
import classnames from 'classnames';

interface InputProps {
  /**
   * Input value
   */
  value: string;
  /**
   * HTML input type
   */
  type?: string;
  /**
   * Input change handler function
   */
  onChange?: () => void;
}

export const Input = ({
  value,
  type='text',
  onChange
}: InputProps) => {
  const classes = classnames({
    [styles.button]: true
  });

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}