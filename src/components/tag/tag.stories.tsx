import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tag } from './tag';

export default {
  title: 'Data Display/Tag',
  component: Tag
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args}>An item</Tag>;

export const Default = Template.bind({});
Default.args = {
};

export const showRemove = Template.bind({});
showRemove.args = {
  showRemove: true
};