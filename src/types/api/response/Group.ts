interface Group {
    idx: number;
    name: string;
    url: string;
    icon: string;
}

export const isGroup = (item: unknown): item is Group => {
    const groupItem = item as Group;
    return (
        typeof groupItem.idx === 'number' &&
        typeof groupItem.name === 'string' &&
        typeof groupItem.url === 'string' &&
        typeof groupItem.icon === 'string'
    );
};

export const isGroupList = (item: unknown): item is Group[] => {
    const groupItem = item as Group[];
    return groupItem.every(isGroup);
};

export default Group;
