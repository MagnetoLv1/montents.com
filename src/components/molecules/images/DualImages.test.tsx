import DualImages from '~/components/molecules/images/DualImages';
import ApiStatus from '~/constants/ApiStatus';
import render from '~/libs/testUtils';
import ImageInfo from '~/types/ImageInfo';

describe('Components | Molecules | Image | <DualImages />', () => {
    it('주입한 이미지 리스트 노출', () => {
        const imagesInfo: ImageInfo[] = [
            {
                src: '/assets/images/temp/board_image_10.jpg',
                width: 767,
                height: 1265,
                status: ApiStatus.SUCCESS
            },
            {
                src: '/assets/images/temp/board_image_9.jpg',
                width: 435,
                height: 650,
                status: ApiStatus.SUCCESS
            }
        ];

        const { getAllByTestId } = render(
            <DualImages imagesInfo={imagesInfo} />
        );

        const images = getAllByTestId('image');

        expect(images.length).toBe(2);

        images.forEach((image: HTMLElement, index: number) => {
            expect(image).toHaveAttribute('src', imagesInfo[index].src);
        });
    });

    it('에러 이미지가 존재할 경우 해당 이미지 로딩 중 아이콘 유지', () => {
        const imagesInfo: ImageInfo[] = [
            {
                src: '/assets/images/temp/board_image_10.jpg',
                width: 767,
                height: 1265,
                status: ApiStatus.SUCCESS
            },
            {
                src: '/assets/images/temp/board_image_9.jpg',
                width: 0,
                height: 0,
                status: ApiStatus.ERROR
            }
        ];

        const { getAllByTestId } = render(
            <DualImages imagesInfo={imagesInfo} />
        );

        const images = getAllByTestId('image');
        const loadings = getAllByTestId('loading');

        expect(images.length).toBe(1);
        expect(loadings.length).toBe(1);
    });
});
