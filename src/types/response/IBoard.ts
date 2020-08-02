import IGroup, { isGroup } from 'types/response/IGroup';

interface IBoard {
    idx: number;
    title: string;
    content: string;
    url: string;
    created_at: string;
    images: string[];
    group: IGroup;
}

export const isBoard = (item: any): item is IBoard => {
    return (
        typeof item.idx === 'number' &&
        typeof item.title === 'string' &&
        typeof item.content === 'string' &&
        typeof item.url === 'string' &&
        typeof item.created_at === 'string' &&
        Array.isArray(item.images) &&
        item.images.every((image: any) => typeof image === 'string') &&
        isGroup(item)
    );
};

export default IBoard;
