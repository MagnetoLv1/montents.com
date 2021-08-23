import moment from 'moment';

import Header from '~/components/molecules/post/Header';
import PostItemContext from '~/components/molecules/post/PostItem.context';
import posts from '~/data/posts/get_1.json';
import render from '~/libs/testUtils';

describe('Components | Molecules | post | <Header />', () => {
    const post = posts.data[0],
        group = post.group;

    const renderHeader = () =>
        render(
            <PostItemContext.Provider value={post}>
                <Header />
            </PostItemContext.Provider>
        );

    describe('기본 상태 테스트', () => {
        it('그룹 아이콘 노출', () => {
            const { getByAltText } = renderHeader();
            expect(getByAltText(group.name)).toHaveAttribute('src', group.icon);
        });

        it('게시글 제목 및 그룹 명 노출', () => {
            const { getByText } = renderHeader();

            expect(getByText(post.title.trim())).toHaveAttribute(
                'href',
                post.url
            );
            expect(getByText(group.name)).toHaveAttribute('href', group.url);
        });

        it('업로드 날짜 노출', () => {
            const { getByText } = renderHeader();

            const date = moment(post.created_at),
                pastTimeText = date.fromNow(),
                dateText = date.format('YYYY년 M월 D일 dddd a h:m');

            expect(getByText(pastTimeText)).toHaveAttribute(
                'data-tip',
                dateText
            );
        });
    });

    describe('로딩 상태 테스트', () => {
        it('로딩 아이콘 노출', () => {
            const { getByTestId } = render(<Header loading />);
            expect(getByTestId('header-icon-loading')).toBeInTheDocument();
        });

        it('제목 로딩 UI 노출', () => {
            const { getByTestId } = render(<Header loading />);
            expect(getByTestId('header-title-loading')).toBeInTheDocument();
        });

        it('날짜 로딩 UI 노출', () => {
            const { getByTestId } = render(<Header loading />);
            expect(getByTestId('header-date-loading')).toBeInTheDocument();
        });
    });
});
