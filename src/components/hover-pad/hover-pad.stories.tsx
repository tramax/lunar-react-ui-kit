import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HoverPad } from './hover-pad';

export default {
  title: 'Layout/Hover Pad',
  component: HoverPad
} as ComponentMeta<typeof HoverPad>;

const Template: ComponentStory<typeof HoverPad> = (args) => <HoverPad {...args}>Content here</HoverPad>;

export const Default = Template.bind({});
Default.args = {
};
