import React from 'react';
import { action } from '@storybook/addon-actions';
import { number, text, withKnobs } from '@storybook/addon-knobs';

import styled from 'libs/styled';

import Image from 'components/atoms/Image';

export default {
    title: 'components|atoms/Image',
    subtitle: '기본 이미지',
    component: Image,
    decorators: [withKnobs]
};

interface IStoryImage {
    width: number;
    height: number;
}

const StoryImage = styled(Image)<IStoryImage>`
    margin: 1rem;
    width: ${({ width }) => (width > 0 ? `${width}rem` : 'auto')};
    height: ${({ height }) => (height > 0 ? `${height}rem` : 'auto')};
`;

export const image = () => {
    const imageWidth = number('width rem (0 is auto)', 0),
        imageHeight = number('height rem (0 is auto)', 0),
        src = text(
            'src',
            'http://www.montents.com/images/temp/board_image_1.jpg'
        ),
        alt = text('alt', '테스트');

    return (
        <StoryImage
            width={imageWidth}
            height={imageHeight}
            src={src}
            alt={alt}
            onLoad={action('onLoad')}
            onError={action('onError')}
        />
    );
};

image.story = {
    name: 'Default'
};
