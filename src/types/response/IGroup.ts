interface IGroup {
    idx: number;
    name: string;
    url: string;
    icon: string;
}

export const isGroup = (item: any): item is IGroup => {
    const group = item as IGroup;
    return !!(group.idx && group.name && group.url && group.icon);
};

export default IGroup;
