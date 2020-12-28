import React, { HTMLAttributes } from 'react';
import { FC, ImgHTMLAttributes } from 'react';

import styled from 'libs/styled';

import Image from 'components/atoms/Image';

const IconStyle = styled.div`
    position: relative;
    display: inline-flex;
    flex-direction: column;
    align-items: center;

    & > * {
        width: 100%;
    }
`;

export interface IconProps
    extends Pick<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'>,
        HTMLAttributes<HTMLDivElement> {}

const Icon: FC<IconProps> = ({
    children,
    src,
    alt,
    ...divProps
}: IconProps) => (
    <IconStyle {...divProps}>
        {children && children}
        {!children && src && <Image src={src} alt={alt} />}
    </IconStyle>
);

export default Icon;
