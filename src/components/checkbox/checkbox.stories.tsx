import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from './checkbox';

const CONTENT = 'This is a checkbox';

export default {
  title: 'Data Entry/Checkbox',
  component: Checkbox
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args}>{CONTENT}</Checkbox>;

export const Default = Template.bind({});
Default.args = {
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true
};