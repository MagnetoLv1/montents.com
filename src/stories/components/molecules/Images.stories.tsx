import React from 'react';
import { Story } from '@storybook/react';

import styled from 'libs/styled';

import ImagesBase, { ImagesProps } from 'components/molecules/images/Images';

export default {
    title: 'Components/Molecules/Images',
    component: ImagesBase,
    parameter: {
        docs: {
            description: {
                component: '이미지 리스트를 보여주는 컴포넌트'
            }
        }
    },
    argTypes: {
        images: {
            control: 'array',
            description: '이미지 리스트'
        }
    },
    args: {
        images: [
            '/assets/images/temp/board_image_1.jpg',
            '/assets/images/temp/board_image_2.jpg',
            '/assets/images/temp/board_image_3.jpg'
        ]
    }
};

const Images = styled(ImagesBase)`
    width: 400px;
`;

export const DefaultImages: Story<ImagesProps> = ({ images }: ImagesProps) => (
    <Images images={images} />
);

DefaultImages.storyName = 'Default';
