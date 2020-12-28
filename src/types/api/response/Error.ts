interface Error {
    message: string;
}

export const isErrorResponse = (item: unknown): item is Error => {
    const errorItem = item as Error;
    return typeof errorItem.message === 'string';
};

export default Error;
