import React, { FC } from 'react';

interface IPostContent {
    body: string;
}

const PostContent: FC<IPostContent> = ({ body }: IPostContent) => (
    <div>
        {body.split('\n').map((row, index) => {
            return row.length > 0 ? (
                <p key={index}>{row}</p>
            ) : (
                <br key={index} />
            );
        })}
    </div>
);

export default PostContent;
