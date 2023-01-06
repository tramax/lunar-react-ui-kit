import { Checkbox } from 'components/checkbox/checkbox';
import { Section } from 'components/section/section';

interface Option {
  label: string;
  value: string;
}

interface CheckboxGroupProps {
  /**
   * Checkbox Group label
   */
  label?: string;
  /**
   * Array of options
   */
  options: Option[];
  /**
   * Array containing checked values
   */
  values: string[];
  /**
   * CheckboxGroup change handler function
   */
  onChange: (value: string[]) => void;
}

export const CheckboxGroup = ({
  label,
  values = [],
  options,
  onChange
}: CheckboxGroupProps) => {
  function handleInputChange(selectedValue: string): void {
    let result = [...values];
    const index = result.indexOf(selectedValue);

    if (index === -1) {
      result.push(selectedValue);
    } else {
      result.splice(index, 1);
    }

    onChange(result);
  }

  return (
    <Section
      label={label}
    >
      {options.map(option => (
        <Checkbox
          checked={values.indexOf(option.value) > -1 ? true : false}
          onChange={() => handleInputChange(option.value)}
        >
          {option.label}
        </Checkbox>
      ))}
    </Section>
  );
};