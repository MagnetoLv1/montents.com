import React, { FC, HTMLAttributes, useMemo } from 'react';
import moment from 'moment';

import RightArrowSvg from 'assets/images/right_filled_arrow.svg';

import Post from 'types/api/response/Post';

import styled from 'libs/styled';

import Anchor from 'components/atoms/Anchor';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';

const HeaderStyle = styled.div`
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

const RightArrow = styled(Image)`
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

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
    post: Post;
}

const Header: FC<HeaderProps> = ({ post, ...props }: HeaderProps) => {
    const { group, created_at: createAt } = post;

    const { pastTimeText, dateText } = useMemo(() => {
        const date = moment(createAt);
        return {
            pastTimeText: date.fromNow(),
            dateText: date.format('YYYY년 M월 D일 dddd a h:m')
        };
    }, [createAt]);

    return (
        <HeaderStyle {...props}>
            {/* 커뮤니티 그룹 아이콘역 영역 */}
            <GroupIconContainer>
                <Anchor href={group.url}>
                    <GroupIcon src={group.icon} alt={group.name} />
                </Anchor>
            </GroupIconContainer>

            {/* 제목 및 날짜 등 정보 노출 영역 */}
            <TitleDateContainer>
                {/* 제목 노출 영역 */}
                <TitleContainer>
                    {/* 커뮤니티 그룹 이름 */}
                    <GroupAnchor href={group.url}>{group.name}</GroupAnchor>

                    <RightArrow src={RightArrowSvg} alt="arrow" />

                    {/* 제목 영역 */}
                    <TitleAnchor href={post.url} target="_blank">
                        {post.title}
                    </TitleAnchor>
                </TitleContainer>

                {/* 날짜 노출 영역 */}
                <DateContainer>
                    <DateAnchor data-tip={dateText}>{pastTimeText}</DateAnchor>
                </DateContainer>
            </TitleDateContainer>
        </HeaderStyle>
    );
};

export default Header;
