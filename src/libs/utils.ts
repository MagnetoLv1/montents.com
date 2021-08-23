/**
 * 시간 지연 함수
 *
 * @param time
 * @returns {Promise<void>}
 */
export const delay = (time: number): Promise<void> =>
    new Promise((resolve) => {
        setTimeout(resolve, time);
    });
