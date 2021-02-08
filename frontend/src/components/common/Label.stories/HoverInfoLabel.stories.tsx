import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { HoverInfoLabel as HoverInfoLabelComponent, HoverInfoLabelProps } from '../Label';

export default {
  title: 'Label',
  component: HoverInfoLabelComponent,
  argTypes: {},
} as Meta;

const Template: Story<HoverInfoLabelProps> = args => <HoverInfoLabelComponent {...args} />;

export const HoverInfoLabel = Template.bind({});
HoverInfoLabel.args = {
  label: 'Some label',
  hoverInfo: 'hover info',
};

export const HoverInfoLabelInfo = Template.bind({});
HoverInfoLabelInfo.args = {
  label: 'Some label',
  hoverInfo: <div>hover info div</div>,
};

// icon isn't used in the codebase.
// export const HoverInfoLabelIcon = Template.bind({});
// HoverInfoLabelIcon.args = {
//   label: "Some label",
//   hoverInfo: "value",
//   icon: null, // unused it seems.
// };
