import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './select';

const OPTIONS = [
  { label: 'Jupiter planet', value: 'jupiter' },
  { label: 'Mars planet', value: 'mars' },
  { label: 'Venus planet', value: 'venus' },
  { label: 'Earth planet', value: 'earth' },
  { label: 'Black hole', value: 'black_hole' },
];

const LABEL = 'Select Dropdown';

const VALUES = ['mars', 'earth'];

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
  values: VALUES
};
