import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './card';

const CONTENT = 'Any content can be placed here. Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.';

const LABEL = 'Subtle Label';

export default {
  title: 'Data Display/Card',
  component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}>{CONTENT}</Card>;

export const Default = Template.bind({});
Default.args = {
};

export const Label = Template.bind({});
Label.args = {
  label: LABEL
};