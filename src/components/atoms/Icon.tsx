import React from 'react';
import { FC, ImgHTMLAttributes } from 'react';

import styled from 'libs/styled';

const IconWrap = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;

    & > * {
        width: 100%;
    }
`;

type TIcon = ImgHTMLAttributes<{}>;

const Icon: FC<TIcon> = ({
    className,
    children,
    src,
    alt,
    ...imageProps
}: TIcon) => (
    <IconWrap className={className}>
        {children && children}
        {!children && src && <img src={src} alt={alt} {...imageProps} />}
    </IconWrap>
);

export default Icon;
