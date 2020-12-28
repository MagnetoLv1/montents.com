interface PaginationResponse<T> {
    data: T;
    more: boolean;
}

// PaginationResponse 타입인지 확인
export const isPaginationResponse = <T>(
    item: unknown,
    typeGuards: (item: unknown) => item is T
): item is PaginationResponse<T> => {
    const paginationResponse = item as PaginationResponse<T>;
    const { data, more } = paginationResponse;

    return typeof more === 'boolean' && typeGuards(data);
};

export default PaginationResponse;
