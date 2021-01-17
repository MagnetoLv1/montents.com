import React from 'react';
import { waitFor } from '@testing-library/dom';
import { mocked } from 'ts-jest';

import render from 'libs/testUtils';
import useImagesInfo from 'libs/hooks/useImagesInfo';

import ApiStatus from 'constants/ApiStatus';

import Images from 'components/molecules/images/Images';

jest.mock('libs/hooks/useImagesInfo');

const mockUseImagesInfo = mocked(useImagesInfo, true);
beforeEach(() => {
    mockUseImagesInfo.mockReset();
});

describe('Components | Molecules | Images | <Images />', () => {
    const makeMockValue = (status) => (images) => {
        return images.map((image) => ({
            src: image,
            width: 500,
            height: 500,
            status: status
        }));
    };

    it('이미지 호출 시 로딩 확인', () => {
        const images = ['/assets/images/temp/board_image_10.jpg'];
        mockUseImagesInfo.mockImplementation(makeMockValue(ApiStatus.LOADING));

        const { getByTestId } = render(<Images images={images} />);

        // 로딩 버튼 확인
        expect(getByTestId('loading')).toBeInTheDocument();
    });

    it('이미지 한개 시 SingleImage 컴포넌트 노출 확인', async () => {
        const images = ['/assets/images/temp/board_image_10.jpg'];
        mockUseImagesInfo.mockImplementation(makeMockValue(ApiStatus.SUCCESS));

        const { getByTestId } = render(<Images images={images} />);

        await waitFor(
            () => expect(getByTestId('single-image')).toBeInTheDocument(),
            { timeout: 10000 }
        );
    });

    it('이미지 두개 시 DualImages 컴포넌트 노출 확인', async () => {
        const images = [
            '/assets/images/temp/board_image_10.jpg',
            '/assets/images/temp/board_image_1.jpg'
        ];
        mockUseImagesInfo.mockImplementation(makeMockValue(ApiStatus.SUCCESS));

        const { getByTestId } = render(<Images images={images} />);

        await waitFor(
            () => expect(getByTestId('dual-images')).toBeInTheDocument(),
            { timeout: 10000 }
        );
    });

    it('이미지 세개 시 TripleImages 컴포넌트 노출 확인', async () => {
        const images = [
            '/assets/images/temp/board_image_10.jpg',
            '/assets/images/temp/board_image_1.jpg',
            '/assets/images/temp/board_image_2.jpg'
        ];
        mockUseImagesInfo.mockImplementation(makeMockValue(ApiStatus.SUCCESS));

        const { getByTestId } = render(<Images images={images} />);

        await waitFor(
            () => expect(getByTestId('triple-images')).toBeInTheDocument(),
            { timeout: 10000 }
        );
    });

    it('이미지 네개 시 QuadImages 컴포넌트 노출 확인', async () => {
        const images = [
            '/assets/images/temp/board_image_10.jpg',
            '/assets/images/temp/board_image_1.jpg',
            '/assets/images/temp/board_image_2.jpg',
            '/assets/images/temp/board_image_3.jpg'
        ];
        mockUseImagesInfo.mockImplementation(makeMockValue(ApiStatus.SUCCESS));

        const { getByTestId } = render(<Images images={images} />);

        await waitFor(
            () => expect(getByTestId('quad-images')).toBeInTheDocument(),
            { timeout: 10000 }
        );
    });

    it('이미지 다섯개 이상 시 QuadImages 컴포넌트 노출 확인', async () => {
        const images = [
            '/assets/images/temp/board_image_10.jpg',
            '/assets/images/temp/board_image_1.jpg',
            '/assets/images/temp/board_image_2.jpg',
            '/assets/images/temp/board_image_3.jpg',
            '/assets/images/temp/board_image_4.jpg'
        ];
        mockUseImagesInfo.mockImplementation(makeMockValue(ApiStatus.SUCCESS));

        const { getByTestId } = render(<Images images={images} />);

        await waitFor(
            () => expect(getByTestId('multiple-images')).toBeInTheDocument(),
            { timeout: 10000 }
        );
    });
});
