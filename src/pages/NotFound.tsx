import React, { FC } from 'react';

import NotFoundSvg from 'assets/images/not_found.svg';

import styled from 'libs/styled';

import { ButtonText } from 'components/atoms/Button';
import IconBase from 'components/atoms/Icon';
import LinkButtonBase from 'components/atoms/LinkButton';

const NotFoundStyle = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    align-items: center;
    justify-content: center;
`;

const Icon = styled(IconBase)`
    width: 30rem;

    margin-bottom: 1rem;
`;

const MessageContainer = styled.article`
    margin-bottom: 1.8rem;

    text-align: center;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.secondaryText};

    & > h2 {
        font-size: 2.8rem;
        margin-bottom: 0.8rem;
    }
`;

const LinkButton = styled(LinkButtonBase)`
    padding: 0 2rem;

    background: ${({ theme }) => theme.colors.primaryButtonBackground};
    color: ${({ theme }) => theme.colors.whiteText};
`;

const NotFound: FC = () => {
    return (
        <NotFoundStyle>
            <Icon src={NotFoundSvg} />
            <MessageContainer>
                <h2>이용하실 수 없는 페이지입니다.</h2>
                <p>컨텐츠가 삭제되었거나, 잘못된 링크일 수 있습니다.</p>
                <p>이동하려는 링크가 정상적인지 확인해보세요.</p>
            </MessageContainer>
            <LinkButton path="/">
                <ButtonText>메인으로 이동하기</ButtonText>
            </LinkButton>
        </NotFoundStyle>
    );
};

export default NotFound;
