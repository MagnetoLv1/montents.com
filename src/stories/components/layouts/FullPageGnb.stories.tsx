import styled from '@emotion/styled';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';

import FullPageGnb from '~/components/layouts/FullPageGnb';

export default {
    title: 'Components/Layouts/FullPageGnb',
    component: FullPageGnb,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: '꽉찬 페이지의 기본 GNB 레이아웃'
            }
        }
    },
    argTypes: {
        onClose: {
            description: '닫기 액션'
        }
    }
};

const StoryContent = styled.div`
    display: flex;
    flex-direction: row;

    height: 100%;

    align-items: center;
    justify-content: center;

    color: white;
`;

export const DefaultFullPageGnb: Story = () => (
    <FullPageGnb onClose={action('onClose')}>
        <StoryContent>Content</StoryContent>
    </FullPageGnb>
);

DefaultFullPageGnb.storyName = 'Default';

interface ExampleFullPageGnbProps {
    contentText: string;
}

export const ExampleFullPageGnb: Story<ExampleFullPageGnbProps> = ({
    contentText
}: ExampleFullPageGnbProps) => (
    <FullPageGnb onClose={action('onClose')}>
        <StoryContent>{contentText}</StoryContent>
    </FullPageGnb>
);

ExampleFullPageGnb.storyName = 'Example Full Page Gnb';

ExampleFullPageGnb.argTypes = {
    onClose: {
        table: {
            disable: true
        }
    },
    header: {
        table: {
            disable: true
        }
    },
    contentText: {
        control: 'text',
        description: '예시 내용'
    }
};

ExampleFullPageGnb.args = {
    contentText: 'Content'
};
