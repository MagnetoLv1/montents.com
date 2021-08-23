import { AnchorHTMLAttributes, FC, MouseEvent, useMemo } from 'react';
import styled from '@emotion/styled';

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const Anchor: FC<AnchorProps> = ({
    children,
    href = '#',
    onClick,
    ...anchorProps
}: AnchorProps) => {
    const handleClick = useMemo(() => {
        // 링크가 없을 경우 이벤트 캔슬
        if ((!href || href === '' || href === '#') && onClick === undefined) {
            return (event: MouseEvent<HTMLAnchorElement>) => {
                event.preventDefault();
            };
        }

        return onClick;
    }, [href, onClick]);

    return (
        <a href={href} onClick={handleClick} {...anchorProps}>
            {children}
        </a>
    );
};

export default styled(Anchor)``;
