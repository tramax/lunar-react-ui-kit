import { Radio } from 'components/radio/radio';
import { Section } from 'components/section/section';

interface Option {
  label: string;
  value: string;
}

interface RadioGroupProps {
  /**
   * Radio Group label
   */
  label?: string;
  /**
   * Array of options
   */
  options: Option[];
  /**
   * The single choice value
   */
  value: string;
  /**
   * RadioGroup change handler function
   */
  onChange: (value: string) => void;
}

/**
 * Allows users to select one options among a list of multiple options
 */
export const RadioGroup = ({
  label,
  value,
  options,
  onChange
}: RadioGroupProps) => {
  function handleInputChange(selectedValue: string): void {
    onChange(selectedValue);
  }

  return (
    <Section
      label={label}
    >
      {options.map(option => (
        <Radio
          checked={option.value === value}
          onChange={() => handleInputChange(option.value)}
        >
          {option.label}
        </Radio>
      ))}
    </Section>
  );
};