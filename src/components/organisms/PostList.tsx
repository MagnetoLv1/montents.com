import { FC, useCallback, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';

import useInfinityScroll from 'libs/hooks/useInfinityScroll';

import ApiStatus from 'constants/ApiStatus';

import { RootReducerState } from 'modules';
import { postListAction } from 'modules/PostListModule';

import PostItemBase from 'components/molecules/post/PostItem';

const PostListStyle = styled.div`
    display: flex;

    flex-direction: column;
    align-items: center;

    width: 100%;

    margin-top: 1.6rem;
`;

const PostItem = styled(PostItemBase)`
    width: 68rem;
    margin-bottom: 1.6rem;
`;

interface PostListProps {
    group: number | null;
}

const PostList: FC<PostListProps> = ({ group }: PostListProps) => {
    const dispatch = useDispatch();

    const { status, data, more, group: prevGroup } = useSelector(
        ({ postListReducer }: RootReducerState) => ({
            status: postListReducer.status,
            data: postListReducer.data,
            more: postListReducer.meta.more,
            group: postListReducer.group
        }),
        shallowEqual
    );

    // 더보기 액션
    const handleInfinityScroll = useCallback(() => {
        if (status === ApiStatus.SUCCESS && more)
            dispatch(postListAction.fetchMorePostList());
    }, [dispatch, more, status]);

    // 스크롤 마지막까지 내릴 경우 더보기
    useInfinityScroll(handleInfinityScroll);

    // 그룹 변경 시 새로 로딩
    useEffect(() => {
        if (prevGroup !== group || status === ApiStatus.CLEAR) {
            dispatch(postListAction.fetchPostList(group));
        }
    }, [dispatch, group, prevGroup, status]);

    const loading =
        [ApiStatus.CLEAR, ApiStatus.LOADING, ApiStatus.ERROR].includes(
            status
        ) || prevGroup !== group;

    return (
        <PostListStyle>
            {/* 게시글 로딩 중 */}
            {loading &&
                [...Array(2)].map((value, key) => (
                    <PostItem key={`loading_${key}`} loading />
                ))}

            {/* 게시글 로딩 완료 */}
            {!loading && (
                <>
                    {/* 게시글 데이터 rendering */}
                    {data.map((post) => (
                        <PostItem key={post.idx} post={post} />
                    ))}

                    {/* 더보기 로딩 시 로딩 ui */}
                    {status === ApiStatus.MORE_LOADING && <PostItem loading />}
                </>
            )}
        </PostListStyle>
    );
};

export default PostList;
