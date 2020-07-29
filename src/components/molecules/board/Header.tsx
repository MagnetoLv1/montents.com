import React, { FC } from 'react';

import styled from 'libs/styled';

import IBoard from 'types/response/IBoard';

import RightArrowBase from 'svg/right_filled_arrow.svg';

import Anchor from 'components/atoms/Anchor';
import Icon from 'components/atoms/Icon';

const HeaderWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: stretch;
`;

const GroupIconContainer = styled.div`
    display: flex;
    margin-right: 0.8rem;
`;

const GroupIcon = styled(Icon)`
    width: 4rem;
    height: 4rem;
`;

const TitleDateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-grow: 1;
`;

const TitleContainer = styled.div`
    display: block;
    margin: 0.5rem 0;
    line-height: 1.33;
`;

const GroupAnchor = styled(Anchor)`
    font-weight: bold;
    display: inline;
`;

const RightArrow = styled(RightArrowBase)`
    fill: #5e6871;
    vertical-align: text-bottom;
`;

const TitleAnchor = styled(Anchor)`
    display: inline;
`;

interface IHeader {
    board: IBoard;
}

const Header: FC<IHeader> = ({ board }: IHeader) => {
    const { group } = board;

    return (
        <HeaderWrap>
            {/* 커뮤니티 그룹 아이콘역 영역 */}
            <GroupIconContainer>
                <GroupIcon src={group.icon} alt={group.name} href={group.url} />
            </GroupIconContainer>

            {/* 제목 및 날짜 등 정보 노출 영역 */}
            <TitleDateContainer>
                {/* 제목 노출 영역 */}
                <TitleContainer>
                    {/* 커뮤니티 그룹 이름 */}
                    <GroupAnchor href={group.url}>{group.name}</GroupAnchor>
                    <RightArrow />

                    <TitleAnchor href={board.url} target="_blank">
                        {board.title}
                    </TitleAnchor>
                </TitleContainer>
            </TitleDateContainer>
        </HeaderWrap>
    );
};

export default Header;
