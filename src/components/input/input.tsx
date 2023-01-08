import styles from './input.module.css';
import classnames from 'classnames';
import { HoverPad } from 'components/hover-pad/hover-pad';
import { Section } from 'components/section/section';

interface InputProps {
  /**
   * Input label
   */
  label?: string;
  /**
   * Input value
   */
  value: string;
  /**
   * HTML input type
   */
  type?: 'text' | 'number' | 'email' | 'password';
  /**
   * Input change handler function
   */
  onChange?: (value: string) => void;
}

/**
 * Collects simple input from users such as text and number
 */
export const Input = ({
  label,
  value,
  type='text',
  onChange
}: InputProps) => {
  const classes = classnames({
    [styles.input]: true
  });

  return (
    <Section
      label={label}
    >
      <HoverPad
        elementType='label'
      >
        <input
          className={classes}
          type={type}
          value={value}
          onChange={event => onChange && onChange(event.target.value)}
        />
      </HoverPad> 
    </Section>
  );
};