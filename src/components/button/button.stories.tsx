import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

const LABEL = 'Button';

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: LABEL,
};

export const Primary = Template.bind({});
Primary.args = {
  label: LABEL,
  primary: true
};
