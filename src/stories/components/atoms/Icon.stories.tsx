import React from 'react';
import { Story } from '@storybook/react';

import Icon, { IconProps } from 'components/atoms/Icon';

export default {
    title: 'Components/Atoms/Icon',
    component: Icon,
    args: {
        src: '/images/logo.png',
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
        children: {
            description: '자식 컴포넌트 (src 가 있을 경우 없어도 됨)'
        }
    }
};

export const DefaultIcon: Story<IconProps> = ({ src, alt }: IconProps) => (
    <Icon src={src} alt={alt} />
);

DefaultIcon.storyName = 'Default';
