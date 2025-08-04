import type { Meta, StoryObj } from '@storybook/angular';
import { HrUi } from '../lib/hr-ui/hr-ui';

const meta: Meta<HrUi> = {
    component: HrUi,
    title: 'HrUi'
};
export default meta;

type Story = StoryObj<HrUi>;

export const Primary: Story = {
    args: {}
};
