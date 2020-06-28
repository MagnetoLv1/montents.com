interface IPaginationResponse<T> {
    data: T;
    more: boolean;
}

// IPaginationResponse 타입인지 확인
export const isPaginationResponse = (
    item: any
): item is IPaginationResponse<typeof item> => {
    const paginationResponse = item as IPaginationResponse<typeof item>;
    const { data, more } = paginationResponse;

    return !!(data && typeof more === 'boolean');
};

export default IPaginationResponse;
