import { Story } from '@storybook/react';

import MoreButton from '~/components/molecules/MoreButton';

export default {
    title: 'Components/Molecules/MoreButton',
    component: MoreButton,
    parameter: {
        docs: {
            description: {
                component: '기본 더보기 버튼'
            }
        }
    }
};

export const DefaultMoreButton: Story = () => <MoreButton />;

DefaultMoreButton.storyName = 'Default';
