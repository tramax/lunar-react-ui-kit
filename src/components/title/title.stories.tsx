import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Title } from './title';

export default {
  title: 'Typography/Title',
  component: Title
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args}>This is a title</Title>;

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

export const Capitalize = Template.bind({});
Capitalize.args = {
  transformation: 'capitalize'
};

export const Uppercase = Template.bind({});
Uppercase.args = {
  transformation: 'uppercase'
};