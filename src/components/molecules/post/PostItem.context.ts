import { createContext } from 'react';

import Post from 'types/api/response/Post';

const PostItemContext = createContext<Post | null>(null);

export default PostItemContext;
