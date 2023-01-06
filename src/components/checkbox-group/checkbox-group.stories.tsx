import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckboxGroup } from './checkbox-group';

const OPTIONS = [
  { label: 'Jupiter planet', value: 'jupiter' },
  { label: 'Mars planet', value: 'mars' },
  { label: 'Black hole', value: 'black_hole' },
];

const LABEL = 'Checkbox Group (multiple choice)';

const VALUE = ['mars'];

export default {
  title: 'Data Entry/CheckboxGroup',
  component: CheckboxGroup
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = (args) => <CheckboxGroup {...args}/>;

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
