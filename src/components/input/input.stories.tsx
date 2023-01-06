import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './input';

const VALUE = 'Example value';
const LABEL = 'Input Label';

export default {
  title: 'Data Entry/Input',
  component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: LABEL,
  value: VALUE
};
