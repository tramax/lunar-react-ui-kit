import { useState } from 'react';
import styles from './select.module.css';
import commonStyles from 'styles/common.module.css';
import { Section } from 'components/section/section';
import { HoverPad } from 'components/hover-pad/hover-pad';
import { Tag } from 'components/tag/tag';
import { CheckboxGroup } from 'components/checkbox-group/checkbox-group';
import { RadioGroup } from 'components/radio-group/radio-group';
import classnames from 'classnames';
import { RiCloseCircleFill } from 'react-icons/ri';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  /**
   * Select dropdown label
   */
  label?: string;
  /**
   * Array of options
   */
  options: Option[];
  /**
   * Array containing multiple selected values
   */
  values?: string[];
  /**
   * Single selected value
   */
  value?: string;
  /**
   * Multi or single select
   */
  multi?: boolean;
  /**
   * Show a remove icon to clear the input
   */
  clearable?: boolean;
  /**
   * Select change handler function
   */
  onChange: (value: string[] | string) => void;
}

export const Select = ({
  label,
  values = [],
  value = '',
  options,
  multi,
  clearable,
  onChange
}: SelectProps) => {
  const [input, setInput] = useState<string>('');

  function handleInputChange(selectedValue: string) {
    let result = [...values];
    const index = result.indexOf(selectedValue);

    if (index === -1) {
      result.push(selectedValue);
    } else {
      result.splice(index, 1);
    }

    onChange(result);
  }

  function handleClear() {
    if (multi) {
      onChange([]);
    } else {
      onChange('');
    }
  }

  return (
    <Section
      label={label}
    >
      <HoverPad
        elementType='label'
        className={styles.wrapper}
      >
        <div
          className={styles.content}
        >
          {multi &&
            <>
              {values.map((value) => (
                <Tag
                  key={value}
                  showRemove
                  onRemove={() => handleInputChange(value)}
                >
                  {readOption(value, options)}
                </Tag>
              ))}
              <input
                className={styles.input}
                type='text'
                value={input}
                onChange={event => setInput(event.target.value)}
              />
            </>
          }
          {!multi &&
            <div
              className={styles.singleValue}
            >
              {readOption(value, options)}
            </div>
          }
        </div>
        {clearable &&
          <span
            className={styles.removeIcon}
            onClick={handleClear}
          >
            <RiCloseCircleFill
              size={16}
            />
          </span>
        }
      </HoverPad> 
      <div
        className={styles.dropdownWrapper}
      >
        <div
          className={classnames(commonStyles.squircle, styles.dropdown)}
        >
          {multi &&
            <CheckboxGroup
              options={options}
              values={values}
              onChange={onChange}
            />
          }
          {!multi &&
            <RadioGroup
              options={options}
              value={value}
              onChange={onChange}
            />
          }
        </div>
      </div>
    </Section>
  );
};

/**
 * Return the label of a value in an option array
 *
 * @param value Option array and value to read
 * @param options Array of { label, value }
 * @return The matched label
 */
export default function readOption(
  value: string,
  options: Option[]
): string {
  const matchedOption = options.find(option => option.value === value);

  return matchedOption?.label || '';
}
