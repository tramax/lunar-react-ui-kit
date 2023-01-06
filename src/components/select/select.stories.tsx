import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './select';

const OPTIONS = [
  { label: 'Jupiter planet', value: 'jupiter' },
  { label: 'Mars planet', value: 'mars' },
  { label: 'Venus planet', value: 'venus' },
  { label: 'Earth planet', value: 'earth' },
  { label: 'Black hole', value: 'black_hole' },
  { label: 'Planet A1', value: 'a1' },
  { label: 'Planet NST', value: 'nst' },
  { label: 'Planet Gemini 2', value: 'ge2' },
  { label: 'Planet Leo SK', value: 'leo' },
  { label: 'Planet Automata-III', value: 'aut3' }
];

const LABEL = 'Select Dropdown';

const VALUES = ['mars', 'earth'];

const VALUE = 'mars';

export default {
  title: 'Data Entry/Select',
  component: Select
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args}/>;

export const Multi = Template.bind({});
Multi.args = {
  multi: true,
  label: LABEL,
  options: OPTIONS,
  values: VALUES
};

export const Single = Template.bind({});
Single.args = {
  label: LABEL,
  options: OPTIONS,
  value: VALUE
};

export const Clearable = Template.bind({});
Clearable.args = {
  label: LABEL,
  options: OPTIONS,
  value: VALUE,
  clearable: true
};