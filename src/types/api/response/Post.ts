import Group, { isGroup } from 'types/api/response/Group';

interface Post {
    idx: number;
    title: string;
    content: string;
    url: string;
    created_at: string;
    images: string[];
    like_cnt: number;
    comment_cnt: number;
    group: Group;
}

export const isPost = (item: unknown): item is Post => {
    const post = item as Post;

    return (
        post &&
        typeof post === 'object' &&
        typeof post.idx === 'number' &&
        typeof post.title === 'string' &&
        typeof post.content === 'string' &&
        typeof post.url === 'string' &&
        typeof post.created_at === 'string' &&
        typeof post.like_cnt === 'number' &&
        typeof post.comment_cnt === 'number' &&
        Array.isArray(post.images) &&
        post.images.every((image: unknown) => typeof image === 'string') &&
        isGroup(post.group)
    );
};

/**
 * 게시글 리스트 검증
 * @param item
 */
export const isPostList = (item: unknown): item is Post[] => {
    const postList = item as Post[];
    return postList.every(isPost);
};

export default Post;
