import React, { HTMLAttributes } from 'react';
import { FC, ImgHTMLAttributes } from 'react';
import styled from '@emotion/styled';

import withLoading, { LoadableComponentProps } from 'libs/hoc/withLoading';

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

interface IconProps
    extends Pick<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'>,
        HTMLAttributes<HTMLDivElement> {}

const Icon: FC<IconProps> = ({
    children,
    src,
    alt,
    title,
    ...divProps
}: IconProps) => (
    <IconStyle {...divProps}>
        {children && children}
        {!children && src && <Image src={src} alt={alt} title={title} />}
    </IconStyle>
);

// 로딩 아이콘 컴포넌트
const LoadingIcon = styled(Icon)`
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.loadingBackground};
`;

export type LoadableIconProps = LoadableComponentProps<IconProps>;
export default withLoading(Icon, LoadingIcon);
