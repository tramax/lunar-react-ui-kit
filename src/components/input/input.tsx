import styles from './input.module.css';
import classnames from 'classnames';
import { HoverPad } from 'components/hover-pad/hover-pad';

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
    [styles.input]: true
  });

  return (
    <HoverPad
      elementType='label'
    >
      <input
        className={classes}
        type={type}
        value={value}
        onChange={onChange}
      />
    </HoverPad> 
  );
};