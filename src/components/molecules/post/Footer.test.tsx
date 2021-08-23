import Footer from '~/components/molecules/post/Footer';
import PostItemContext from '~/components/molecules/post/PostItem.context';
import posts from '~/data/posts/get_1.json';
import render from '~/libs/testUtils';

const post = posts.data[0];

describe('Components | Molecules | Post | <Footer />', () => {
    const renderFooter = () =>
        render(
            <PostItemContext.Provider value={post}>
                <Footer />
            </PostItemContext.Provider>
        );

    it('좋아요 갯수 노출 확인', () => {
        const { getByText } = renderFooter();
        expect(getByText(post.like_cnt.convertKorean())).toBeInTheDocument();
    });

    it('댓글 갯수 노출 확인', () => {
        const { getByText } = renderFooter();
        expect(getByText(post.comment_cnt.convertKorean())).toBeInTheDocument();
    });
});
