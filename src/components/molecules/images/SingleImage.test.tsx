import React from 'react';
import { clone } from 'underscore';

import render from 'libs/testUtils';

import ApiStatus from 'constants/ApiStatus';

import SingleImage from 'components/molecules/images/SingleImage';

describe('Components | Molecules | Image | <SingleImage />', () => {
    const imagesInfo = [
        {
            src: '/images/temp/board_image_10.jpg',
            width: 767,
            height: 1265,
            status: ApiStatus.SUCCESS
        }
    ];

    it('주입한 이미지 노출', async () => {
        const { findAllByTestId } = render(
            <SingleImage imagesInfo={imagesInfo} />
        );

        const images = await findAllByTestId('image');

        expect(images.length).toBe(1);

        images.forEach((image, index) => {
            expect(image).toHaveAttribute('src', imagesInfo[index].src);
        });
    });

    it('이미지 로딩 시 로딩 아이콘 노출', () => {
        const infoList = clone(imagesInfo);
        infoList[0].status = ApiStatus.LOADING;

        const { getByTestId } = render(<SingleImage imagesInfo={imagesInfo} />);

        const loading = getByTestId('loading');

        expect(loading).toBeInTheDocument();
    });

    it('이미지 로딩 실패 시 로딩 아이콘 유지', () => {
        const infoList = clone(imagesInfo);
        infoList[0].status = ApiStatus.ERROR;

        const { getByTestId } = render(<SingleImage imagesInfo={imagesInfo} />);

        const loading = getByTestId('loading');

        expect(loading).toBeInTheDocument();
    });
});
