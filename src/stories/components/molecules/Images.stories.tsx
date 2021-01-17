import React from 'react';
import { Story } from '@storybook/react';

import styled from 'libs/styled';
import useImagesInfo from 'libs/hooks/useImagesInfo';

import DualImages from 'components/molecules/images/DualImages';
import ImagesBase, { ImagesProps } from 'components/molecules/images/Images';
import MultipleImages from 'components/molecules/images/MultipleImages';
import QuadImages from 'components/molecules/images/QuadImages';
import SingleImage from 'components/molecules/images/SingleImage';
import TripleImages from 'components/molecules/images/TripleImages';

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

/**
 * image 리스트 story
 * @param images
 * @constructor
 */
export const DefaultImages: Story<ImagesProps> = ({ images }: ImagesProps) => (
    <Images images={images} />
);

DefaultImages.storyName = 'Default';

const ImageWrap = styled.div`
    width: 400px;
`;

/**
 * 이미지가 한개 있을 떄 image story
 * @param images
 * @constructor
 */
export const SingleImageStory: Story<ImagesProps> = ({
    images
}: ImagesProps) => {
    const imagesInfo = useImagesInfo(images);

    return (
        <ImageWrap>
            <SingleImage imagesInfo={imagesInfo} />
        </ImageWrap>
    );
};

SingleImageStory.storyName = 'SingleImage';

SingleImageStory.args = {
    images: ['/assets/images/temp/board_image_1.jpg']
};

/**
 * 이미지가 두개 있을 떄 image story
 * @param images
 * @constructor
 */
export const DualImageStory: Story<ImagesProps> = ({ images }: ImagesProps) => {
    const imagesInfo = useImagesInfo(images);

    return (
        <ImageWrap>
            <DualImages imagesInfo={imagesInfo} />
        </ImageWrap>
    );
};

DualImageStory.storyName = 'DualImage';

DualImageStory.args = {
    images: [
        '/assets/images/temp/board_image_1.jpg',
        '/assets/images/temp/board_image_2.jpg'
    ]
};

/**
 * 이미지가 세개 있을 떄 image story
 * @param images
 * @constructor
 */
export const TripleImageStory: Story<ImagesProps> = ({
    images
}: ImagesProps) => {
    const imagesInfo = useImagesInfo(images);

    return (
        <ImageWrap>
            <TripleImages imagesInfo={imagesInfo} />
        </ImageWrap>
    );
};

TripleImageStory.storyName = 'TripleImage';

TripleImageStory.args = {
    images: [
        '/assets/images/temp/board_image_1.jpg',
        '/assets/images/temp/board_image_2.jpg',
        '/assets/images/temp/board_image_3.jpg'
    ]
};

/**
 * 이미지가 네개 있을 떄 image story
 * @param images
 * @constructor
 */
export const QuadImageStory: Story<ImagesProps> = ({ images }: ImagesProps) => {
    const imagesInfo = useImagesInfo(images);

    return (
        <ImageWrap>
            <QuadImages imagesInfo={imagesInfo} />
        </ImageWrap>
    );
};

QuadImageStory.storyName = 'QuadImage';

QuadImageStory.args = {
    images: [
        '/assets/images/temp/board_image_1.jpg',
        '/assets/images/temp/board_image_2.jpg',
        '/assets/images/temp/board_image_3.jpg',
        '/assets/images/temp/board_image_4.jpg'
    ]
};

/**
 * 이미지가 다섯개 이상 있을 떄 image story
 * @param images
 * @constructor
 */
export const MultipleImagesStory: Story<ImagesProps> = ({
    images
}: ImagesProps) => {
    const imagesInfo = useImagesInfo(images);

    return (
        <ImageWrap>
            <MultipleImages imagesInfo={imagesInfo} />
        </ImageWrap>
    );
};

MultipleImagesStory.storyName = 'MultipleImages';

MultipleImagesStory.args = {
    images: [
        '/assets/images/temp/board_image_1.jpg',
        '/assets/images/temp/board_image_2.jpg',
        '/assets/images/temp/board_image_3.jpg',
        '/assets/images/temp/board_image_4.jpg',
        '/assets/images/temp/board_image_5.png',
        '/assets/images/temp/board_image_6.png'
    ]
};
