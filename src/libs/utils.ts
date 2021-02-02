/**
 * 시간 지연 함수
 * @param time
 */
export const delay = (time: number): Promise<void> =>
    new Promise((resolve) => {
        setTimeout(resolve, time);
    });
