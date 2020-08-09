import React, { AnchorHTMLAttributes } from 'react';
import { FC, ImgHTMLAttributes } from 'react';

import styled from 'libs/styled';

import Anchor from 'components/atoms/Anchor';
import Image from 'components/atoms/Image';

const IconWrap = styled(Anchor)`
    display: inline-flex;
    flex-direction: column;
    align-items: center;

    & > * {
        width: 100%;
    }
`;

interface IIcon
    extends Pick<ImgHTMLAttributes<{}>, 'src' | 'alt'>,
        AnchorHTMLAttributes<{}> {}

const Icon: FC<IIcon> = ({ children, src, alt, ...anchorProps }: IIcon) => (
    <IconWrap {...anchorProps}>
        {children && children}
        {!children && src && <Image src={src} alt={alt} />}
    </IconWrap>
);

export default Icon;
