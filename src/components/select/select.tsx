import React, { useState, useRef, useEffect } from 'react';
import styles from './select.module.css';
import commonStyles from 'styles/common.module.css';
import { Section } from 'components/section/section';
import { HoverPad } from 'components/hover-pad/hover-pad';
import { Tag } from 'components/tag/tag';
import { CheckboxGroup } from 'components/checkbox-group/checkbox-group';
import { RadioGroup } from 'components/radio-group/radio-group';
import classnames from 'classnames';
import { RiCloseCircleFill } from 'react-icons/ri';
import { Option, filterOption, readOption } from 'components/select/option';
import listenForOutsideClicks from './outside-click';

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

/**
 * Allows users to select either single or multiple options. It is suitable to host a long list of options. For shorter lists, consider Checkbox Group or Radio Group.
 */
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

  const [open, setOpen] = useState<boolean>(false);

  const componentRef = useRef<HTMLDivElement>(null);

  const [listening, setListening] = useState(false);

  const toggle = () => setOpen(!open);

  useEffect(listenForOutsideClicks(
    listening,
    setListening,
    componentRef,
    setOpen
  ), []);

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

  function handleClear(event: React.SyntheticEvent) {
    event.stopPropagation();

    if (multi) {
      onChange([]);
    } else {
      onChange('');
    }
  }

  const filteredOptions = options.filter(option => filterOption(option, input));

  return (
    <Section
      label={label}
    >
      <div
        ref={componentRef}
      >
        <HoverPad
          elementType='label'
          className={styles.wrapper}
          onClick={toggle}
        >
          <div
            className={styles.content}
          >
            {multi &&
              <>
                {values.map((value) => (
                  <Tag
                    key={value}
                    removable
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
          {clearable && (value || values.length > 0) &&
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
        {open &&
          <div
            className={styles.dropdownWrapper}
          >
            <div
              className={classnames(commonStyles.squircle, styles.dropdown)}
            >
              {!filteredOptions.length &&
                <span>(No matched options)</span>
              }
              {multi &&
                <CheckboxGroup
                  options={filteredOptions}
                  values={values}
                  onChange={onChange}
                />
              }
              {!multi &&
                <RadioGroup
                  options={filteredOptions}
                  value={value}
                  onChange={onChange}
                />
              }
            </div>
          </div>
        }
      </div>
    </Section>
  );
};
