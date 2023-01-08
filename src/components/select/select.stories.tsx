import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './select';
import { OPTIONS } from 'stories/introduction';

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