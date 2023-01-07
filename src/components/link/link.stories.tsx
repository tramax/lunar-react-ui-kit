import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from './link';

export default {
  title: 'Typography/Link',
  component: Link
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args}>A hyperlink</Link>;

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

export const OpenNewTab = Template.bind({});
OpenNewTab.args = {
  openNewTab: true
};