import React, { AnchorHTMLAttributes, FC, MouseEvent, useMemo } from 'react';

const Anchor: FC<AnchorHTMLAttributes<{}>> = ({
    children,
    href = '#',
    onClick,
    ...anchorProps
}: AnchorHTMLAttributes<{}>) => {
    const handleClick = useMemo(() => {
        if ((!href || href === '' || href === '#') && onClick === undefined) {
            return (event: MouseEvent<HTMLAnchorElement>) => {
                event.preventDefault();
            };
        }

        return onClick;
    }, []);

    return (
        <a href={href} onClick={handleClick} {...anchorProps}>
            {children}
        </a>
    );
};

export default Anchor;
