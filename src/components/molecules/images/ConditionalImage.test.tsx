import React from 'react';
import { clone } from 'underscore';

import render from 'libs/testUtils';

import ApiStatus from 'constants/ApiStatus';

import ConditionalImage from 'components/molecules/images/ConditionalImage';

describe('Components | Molecules | Image | <ConditionalImage />', () => {
    const imageInfo = {
        src: 'http://www.montents.com/assets/images/temp/board_image_10.jpg',
        width: 767,
        height: 1265,
        status: ApiStatus.SUCCESS
    };

    it('주입한 이미지 존재', () => {
        const { getByTestId } = render(<ConditionalImage info={imageInfo} />);

        const image = getByTestId('image');
        expect(image).toBeInTheDocument();
    });

    it('이미지가 로딩 중일 경우 로딩 아이콘 노출', () => {
        const info = clone(imageInfo);
        info.status = ApiStatus.LOADING;

        const { getByTestId } = render(<ConditionalImage info={info} />);

        const loading = getByTestId('loading');
        expect(loading).toBeInTheDocument();
    });

    it('이미지 로딩에 실패했을 경우 로딩 아이콘 유지', () => {
        const info = clone(imageInfo);
        info.status = ApiStatus.ERROR;

        const { getByTestId } = render(<ConditionalImage info={info} />);

        const loading = getByTestId('loading');
        expect(loading).toBeInTheDocument();
    });
});
