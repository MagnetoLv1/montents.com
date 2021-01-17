import React from 'react';
import { Story } from '@storybook/react';

import Post from 'types/api/response/Post';

import postsResponse from 'data/posts/get_1.json';

import styled from 'libs/styled';

import PostBase, { PostProps } from 'components/molecules/post/Post';

const postData = postsResponse.data[0];

export default {
    title: 'Components/Molecules/Post',
    component: PostBase,
    parameters: {
        docs: {
            description: {
                component: '게시글 컴포넌트'
            }
        }
    },
    argTypes: {
        post: {
            control: 'object',
            description: '게시글 json data'
        }
    },
    args: {
        post: postData
    }
};

const BodyWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Post = styled(PostBase)`
    width: 68rem;
    margin: 0.8rem 0;
`;

/**
 * 기본 게시글 story
 * @param post
 * @constructor
 */
export const DefaultPostStory: Story<PostProps> = ({ post }: PostProps) => (
    <BodyWrap>
        <Post post={post} />
    </BodyWrap>
);

DefaultPostStory.storyName = 'Default';

/**
 * 게시글 예시 story
 * @param title
 * @param content
 * @param created_at
 * @param group
 * @param idx
 * @param images
 * @param url
 * @constructor
 */
interface ExamplePostProps extends Post {}

export const ExamplePostStory: Story<ExamplePostProps> = ({
    title,
    content,
    created_at,
    group,
    idx,
    images,
    url
}: ExamplePostProps) => (
    <Post
        post={{
            idx,
            title,
            content,
            created_at,
            group,
            images,
            url
        }}
    />
);

ExamplePostStory.args = {
    ...postData
};

ExamplePostStory.argTypes = {
    post: {
        table: {
            disable: true
        }
    },
    idx: {
        control: 'number',
        description: '게시글 고유 번호'
    },
    title: {
        control: 'text',
        description: '게시글 제목'
    },
    content: {
        control: 'text',
        description: '게시글 내용'
    },
    url: {
        control: 'text',
        description: '게시글 원문 url'
    },
    created_at: {
        control: 'date',
        description: '작성 날짜'
    },
    images: {
        control: 'array',
        description: '게시글 이미지 리스트'
    },
    group: {
        control: 'object',
        description: '게시글 작성된 그룹'
    }
};