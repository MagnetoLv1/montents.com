import React from 'react';
import { number, text, withKnobs } from '@storybook/addon-knobs';

import styled from 'libs/styled';

import FulledImageBase from 'components/atoms/FulledImage';

export default {
    title: 'components|atoms/FulledImage',
    subtitle: '꽉찬 이미지',
    component: FulledImageBase,
    decorators: [withKnobs]
};

interface IFulledImage {
    width: number;
    height: number;
}

const FulledImage = styled(FulledImageBase)<IFulledImage>`
    width: ${({ width }) => `${width}rem`};
    height: ${({ height }) => `${height}rem`};
`;

export const fulledImage = () => {
    const width = number('width', 50),
        height = number('height', 40);

    const image = text(
        'image',
        'http://www.montents.com/images/temp/board_image_1.jpg'
    );

    return (
        <FulledImage src={image} alt={'image'} width={width} height={height} />
    );
};

fulledImage.story = {
    name: 'Default'
};
