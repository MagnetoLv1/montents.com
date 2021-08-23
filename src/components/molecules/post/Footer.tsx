import styled from '@emotion/styled';
import LikeSvg from 'assets/images/like.svg';
import { FC, HTMLAttributes, useContext } from 'react';

import Icon from '~/components/atoms/Icon';
import PostItemContext from '~/components/molecules/post/PostItem.context';
import TypeError from '~/errors/TypeError';
import { isPost } from '~/types/api/response/Post';

const FooterStyle = styled.section`
    display: flex;
    flex-direction: column;

    align-items: stretch;
`;

const LikeIcon = styled(Icon)`
    width: 1.6rem;
    height: 1.6rem;

    margin-right: 0.8rem;
`;

const InfoContainer = styled.article`
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    padding: 1rem 0;
    margin: 0 1.6rem;
`;

const InfoItem = styled.div`
    display: flex;
    flex-direction: row;

    flex-grow: 0;
    align-items: center;
`;

const CountText = styled.span`
    display: inline-block;
    color: ${({ theme }) => theme.colors.secondaryText};
`;

interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

const Footer: FC<FooterProps> = (props: FooterProps) => {
    const post = useContext(PostItemContext);
    if (!isPost(post)) throw new TypeError('post', 'Post');

    return (
        <FooterStyle {...props}>
            <InfoContainer>
                {/* 좋아요 갯수 */}
                <InfoItem>
                    <LikeIcon src={LikeSvg} alt="좋아요" />
                    <CountText>{post.like_cnt.convertKorean()}</CountText>
                </InfoItem>

                {/* 댓글 갯수 */}
                <InfoItem>
                    <CountText>
                        댓글 <span>{post.comment_cnt.convertKorean()}</span>개
                    </CountText>
                </InfoItem>
            </InfoContainer>
        </FooterStyle>
    );
};

export default Footer;
