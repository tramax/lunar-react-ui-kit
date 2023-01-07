import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from './text';

export default {
  title: 'Typography/Text',
  component: Text
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args}>This is a body paragraph.</Text>;

export const Default = Template.bind({});
Default.args = {
};

export const Small = Template.bind({});
Small.args = {
  size: 'small'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large'
};

export const Bold = Template.bind({});
Bold.args = {
  bold: true
};