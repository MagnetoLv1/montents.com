import React, { FC, useMemo } from 'react';
import moment from 'moment';

import styled from 'libs/styled';

import IClassName from 'types/IClassName';
import IBoard from 'types/response/IBoard';

import RightArrowBase from 'svg/right_filled_arrow.svg';

import Anchor from 'components/atoms/Anchor';
import Icon from 'components/atoms/Icon';

const HeaderWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    padding: 1.2rem 1.6rem 0 1.6rem;
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
    margin-bottom: 0.3rem;
    line-height: 1.33;
    font-size: 1.5rem;
`;

const GroupAnchor = styled(Anchor)`
    font-weight: bold;
    display: inline;
`;

const RightArrow = styled(RightArrowBase)`
    fill: ${({ theme }) => theme.colors.grayIcon};
    vertical-align: text-bottom;
`;

const TitleAnchor = styled(Anchor)`
    display: inline;
`;

const DateContainer = styled.div`
    display: block;
    font-size: 1.2rem;
`;

const DateAnchor = styled(Anchor)`
    color: ${({ theme }) => theme.colors.secondaryText};
`;

interface IHeader extends IClassName {
    board: IBoard;
}

const Header: FC<IHeader> = ({ board, className }: IHeader) => {
    const { group, created_at: createAt } = board;

    const { pastTimeText, dateText } = useMemo(() => {
        const date = moment(createAt);
        return {
            pastTimeText: date.fromNow(),
            dateText: date.format('YYYY년 M월 D일 dddd a h:m')
        };
    }, [createAt]);

    return (
        <HeaderWrap className={className}>
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

                    {/* 제목 영역 */}
                    <TitleAnchor href={board.url} target="_blank">
                        {board.title}
                    </TitleAnchor>
                </TitleContainer>

                {/* 날짜 노출 영역 */}
                <DateContainer>
                    <DateAnchor data-tip={dateText}>{pastTimeText}</DateAnchor>
                </DateContainer>
            </TitleDateContainer>
        </HeaderWrap>
    );
};

export default Header;
