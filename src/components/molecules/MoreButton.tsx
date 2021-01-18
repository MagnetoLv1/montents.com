import React, { FC, HTMLAttributes } from 'react';

import DownArrowSvg from 'assets/images/down_arrow.svg';

import styled from 'libs/styled';

import Button, { ButtonIcon, ButtonText } from 'components/atoms/Button';
import Image from 'components/atoms/Image';

const MoreIcon = styled(ButtonIcon)`
    width: 3.6rem;
    height: 3.6rem;
    background: ${({ theme }) => theme.colors.loadingBackground};
    border-radius: 50%;

    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-content: center;
`;

interface MoreButtonProps extends HTMLAttributes<HTMLDivElement> {}

const MoreButton: FC<MoreButtonProps> = (props: MoreButtonProps) => (
    <Button {...props}>
        <MoreIcon>
            <Image src={DownArrowSvg} alt={'down arrow'} />
        </MoreIcon>
        <ButtonText>더 보기</ButtonText>
    </Button>
);

export default MoreButton;
