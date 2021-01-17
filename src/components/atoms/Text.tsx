import React, { FC, HTMLAttributes } from 'react';

import styled from 'libs/styled';
import withLoading, { LoadableComponentProps } from 'libs/hoc/withLoading';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {}

const Text: FC<TextProps> = ({ children, ...props }: TextProps) => (
    <p {...props}>{children}</p>
);

// 텍스트 로딩 컴포넌트
const LoadingText = styled(Text)`
    min-height: 1.4rem;
    border-radius: 0.7rem;
    background: ${({ theme }) => theme.colors.loadingBackground};
`;

export type LoadableTextProps = LoadableComponentProps<TextProps>;
export default withLoading(Text, LoadingText);
