import posts from 'data/posts/get_1.json';

import render from 'libs/testUtils';

import PostItem from 'components/molecules/post/PostItem';

const post = posts.data[0];

describe('Components | Molecules | post | <Post />', () => {
    it('헤더 노출 확인', () => {
        const { getByTestId } = render(<PostItem post={post} />);
        expect(getByTestId('post-header')).toBeInTheDocument();
    });

    it('내용 노출 확인', () => {
        const { getByTestId } = render(<PostItem post={post} />);
        expect(getByTestId('post-content')).toBeInTheDocument();
    });

    it('푸터 노출 확인', () => {
        const { getByTestId } = render(<PostItem post={post} />);
        expect(getByTestId('post-footer')).toBeInTheDocument();
    });

    it('로딩 상태 시 로딩 UI 노출 확인', () => {
        const { getByTestId } = render(<PostItem loading />);
        expect(getByTestId('post-loading')).toBeInTheDocument();
    });
});
