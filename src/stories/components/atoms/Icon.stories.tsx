import React from 'react';
import styled from '@emotion/styled';
import { Story } from '@storybook/react';

import IconBase, { LoadableIconProps } from 'components/atoms/Icon';

export default {
    title: 'Components/Atoms/Icon',
    component: IconBase,
    args: {
        src: '/assets/images/logo.png',
        alt: 'description'
    },
    argTypes: {
        src: {
            control: 'text',
            description: '아이콘 이미지 url'
        },
        alt: {
            control: 'text',
            description: '아이콘 추가 설명'
        },
        loading: {
            control: 'boolean',
            description: '로딩 아이콘 여부'
        },
        children: {
            description: '자식 컴포넌트 (src 가 있을 경우 없어도 됨)'
        }
    }
};

const Icon = styled(IconBase)`
    width: 50px;
    height: 50px;
`;

export const DefaultIcon: Story<LoadableIconProps> = ({
    src,
    alt,
    loading
}: LoadableIconProps) =>
    loading ? <Icon loading /> : <Icon src={src} alt={alt} />;

DefaultIcon.storyName = 'Default';
