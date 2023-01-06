import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioGroup } from './radio-group';

const OPTIONS = [
  { label: 'Jupiter planet', value: 'jupiter' },
  { label: 'Mars planet', value: 'mars' },
  { label: 'Black hole', value: 'black_hole' },
];

const LABEL = 'Radio Group (single choice)';

const VALUE = 'mars';

export default {
  title: 'Data Entry/Radio Group',
  component: RadioGroup
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args}/>;

export const Default = Template.bind({});
Default.args = {
  label: LABEL,
  options: OPTIONS
};

export const Checked = Template.bind({});
Checked.args = {
  label: LABEL,
  options: OPTIONS,
  value: VALUE
};
