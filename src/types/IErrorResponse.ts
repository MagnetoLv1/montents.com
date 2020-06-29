interface IErrorResponse {
    message: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isErrorResponse = (item: any) => {
    return typeof item.message === 'string';
};

export default IErrorResponse;
