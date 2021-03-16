import React, { FC, HTMLAttributes, useContext, useMemo } from 'react';
import styled from '@emotion/styled';
import moment from 'moment';

import RightArrowSvg from 'assets/images/right_filled_arrow.svg';

import TypeError from 'errors/TypeError';

import { isPost } from 'types/api/response/Post';

import { useRebuild } from 'libs/react-tooltip';
import withLoading, { LoadableComponentProps } from 'libs/hoc/withLoading';

import PostItemContext from 'components/molecules/post/PostItem.context';
import Anchor from 'components/atoms/Anchor';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';

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

const DateText = styled(Text)`
    margin-top: 0.3rem;
    width: 20rem;
`;

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header: FC<HeaderProps> = ({ ...props }: HeaderProps) => {
    const post = useContext(PostItemContext);
    if (!isPost(post)) throw new TypeError('post', 'Post');

    const { group, created_at: createAt } = post;

    const { pastTimeText, dateText } = useMemo(() => {
        const date = moment(createAt);
        return {
            pastTimeText: date.fromNow(),
            dateText: date.format('YYYY년 M월 D일 dddd a h:m')
        };
    }, [createAt]);

    // tooltip rebuild
    useRebuild();

    return (
        <HeaderStyle {...props}>
            {/* 커뮤니티 그룹 아이콘역 영역 */}
            <GroupIconContainer>
                <Anchor href={group.url} target="_blank">
                    <GroupIcon src={group.icon} alt={group.name} />
                </Anchor>
            </GroupIconContainer>

            {/* 제목 및 날짜 등 정보 노출 영역 */}
            <TitleDateContainer>
                {/* 제목 노출 영역 */}
                <TitleContainer>
                    {/* 커뮤니티 그룹 이름 */}
                    <GroupAnchor href={group.url} target="_blank">
                        {group.name}
                    </GroupAnchor>

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

// 헤더 로딩 컴포넌트
const LoadingHeader: FC<HTMLAttributes<HTMLDivElement>> = (
    props: HTMLAttributes<HTMLDivElement>
) => (
    <HeaderStyle {...props}>
        {/* 커뮤니티 그룹 아이콘역 영역 */}
        <GroupIconContainer>
            <GroupIcon loading data-testid="header-icon-loading" />
        </GroupIconContainer>

        {/* 제목 및 날짜 등 정보 노출 영역 */}
        <TitleDateContainer>
            {/* 제목 노출 영역 */}
            <TitleContainer>
                <Text loading data-testid="header-title-loading" />
            </TitleContainer>

            {/* 날짜 노출 영역 */}
            <DateContainer>
                <DateText loading data-testid="header-date-loading" />
            </DateContainer>
        </TitleDateContainer>
    </HeaderStyle>
);

export type LoadableHeaderProps = LoadableComponentProps<HeaderProps>;
export default withLoading(Header, LoadingHeader);
