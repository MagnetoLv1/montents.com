import styled from '@emotion/styled';
import { Story } from '@storybook/react';

import LogoBase from '~/components/atoms/Logo';

export default {
    title: '~/Components/Atoms/Logo',
    component: LogoBase,
    parameters: {
        docs: {
            description: {
                component: '몬텐츠 기본 로고 컴포넌트'
            }
        }
    }
};

const Logo = styled(LogoBase)`
    width: 50px;
    height: 50px;
`;

export const DefaultLogo: Story = () => <Logo />;

DefaultLogo.storyName = 'Default';
