import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from './radio';

const CONTENT = 'This is a radio button (option)';

export default {
  title: 'Data Entry/Radio',
  component: Radio
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args}>{CONTENT}</Radio>;

export const Default = Template.bind({});
Default.args = {
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true
};