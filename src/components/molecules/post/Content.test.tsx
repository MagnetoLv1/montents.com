import Content from '~/components/molecules/post/Content';
import PostItemContext from '~/components/molecules/post/PostItem.context';
import posts from '~/data/posts/get_1.json';
import render from '~/libs/testUtils';

const post = posts.data[0];

describe('Components | Molecules | post | <Content />', () => {
    const renderContent = () =>
        render(
            <PostItemContext.Provider value={post}>
                <Content />
            </PostItemContext.Provider>
        );

    it('text content 영역 노출 확인', () => {
        const { getByTestId } = renderContent();

        const textContent = getByTestId('text-content');
        expect(textContent).toBeInTheDocument();
    });

    it('text content 로딩 노출 확인', () => {
        const { getByTestId } = render(
            <Content loading data-testid="content-loading" />
        );

        expect(getByTestId('content-loading')).toBeInTheDocument();
    });
});
