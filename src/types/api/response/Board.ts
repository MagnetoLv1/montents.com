import Group, { isGroup } from 'types/api/response/Group';

interface Board {
    idx: number;
    title: string;
    content: string;
    url: string;
    created_at: string;
    images: string[];
    group: Group;
}

export const isBoard = (item: unknown): item is Board => {
    const boardItem = item as Board;

    return (
        typeof boardItem.idx === 'number' &&
        typeof boardItem.title === 'string' &&
        typeof boardItem.content === 'string' &&
        typeof boardItem.url === 'string' &&
        typeof boardItem.created_at === 'string' &&
        Array.isArray(boardItem.images) &&
        boardItem.images.every((image: unknown) => typeof image === 'string') &&
        isGroup(item)
    );
};

export default Board;
