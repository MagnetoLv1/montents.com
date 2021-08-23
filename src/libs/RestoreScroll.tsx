import { FC, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router';
import { debounce, throttle } from 'underscore';

import { isJSON } from '~/types/JSON';

interface ScrollState {
    [key: string]: unknown;
    scroll: {
        scrollX: number;
        scrollY: number;
    };
}

const isScrollState = (item: unknown): item is ScrollState =>
    isJSON(item) &&
    isJSON(item.scroll) &&
    typeof item.scroll.scrollY === 'number' &&
    typeof item.scroll.scrollX === 'number';

const RestoreScroll: FC = ({ children }) => {
    const history = useHistory();

    // 스크롤 저장 함수
    const storeScroll = useMemo(
        () =>
            throttle(() => {
                const { scrollX, scrollY } = window;
                const { location } = history;
                const { state = {}, pathname } = location;

                const scrollState: ScrollState = {
                    ...(state as JSON),
                    scroll: {
                        scrollY,
                        scrollX
                    }
                };

                history.replace(pathname, scrollState);
            }, 200),
        [history]
    );

    // 스크롤 복구 함수
    const restoreScroll = useMemo(
        () =>
            debounce(
                throttle((x: number, y: number, count: number): void => {
                    if (count <= 0) return;

                    const { scrollY, scrollX } = window;
                    if (x !== scrollX || y !== scrollY) {
                        window.scrollTo(x, y);
                        restoreScroll(x, y, --count);
                    }
                }, 100),
                200
            ),
        []
    );

    // 스크롤 저장 이벤트 등록
    useEffect(() => {
        window.addEventListener('scroll', storeScroll);
        return () => window.removeEventListener('scroll', storeScroll);
    }, [storeScroll]);

    // 스크롤 복구 및 최상단 이동 이벤트 등록
    useEffect(() => {
        return history.listen((location, action) => {
            // 새 링크로 이동
            if (action === 'PUSH') {
                window.scrollTo(0, 0);
                return;
            }

            // 뒤로가기 시 스크롤 복구
            const { state } = location;
            if (action === 'POP' && isScrollState(state)) {
                const { scroll } = state;
                const { scrollX, scrollY } = scroll;
                restoreScroll(scrollX, scrollY, 10);
            }
        });
    }, [history, restoreScroll]);

    return <>{children}</>;
};

export default RestoreScroll;
