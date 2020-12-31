import Group, { isGroup } from 'types/api/response/Group';

interface Post {
    idx: number;
    title: string;
    content: string;
    url: string;
    created_at: string;
    images: string[];
    group: Group;
}

export const isPost = (item: unknown): item is Post => {
    const post = item as Post;

    return (
        typeof post.idx === 'number' &&
        typeof post.title === 'string' &&
        typeof post.content === 'string' &&
        typeof post.url === 'string' &&
        typeof post.created_at === 'string' &&
        Array.isArray(post.images) &&
        post.images.every((image: unknown) => typeof image === 'string') &&
        isGroup(post.group)
    );
};

export default Post;
