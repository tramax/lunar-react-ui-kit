import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Section } from './section';

const LABEL = 'Section Label';
const CONTENT = <div>Any content can be placed here.</div>;

export default {
  title: 'Layout/Section',
  component: Section
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => <Section {...args}>{CONTENT}</Section>;

export const Label = Template.bind({});
Label.args = {
  label: LABEL,
};
