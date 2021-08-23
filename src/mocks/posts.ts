import postsResponseGroup1 from '~/data/posts/1/get_1.json';
import postsResponse1 from '~/data/posts/get_1.json';
import postsResponse2 from '~/data/posts/get_2.json';
import postsResponse3 from '~/data/posts/get_3.json';
import postsResponse4 from '~/data/posts/get_4.json';
import { ApiMock } from '~/mocks/index';

const posts: ApiMock = (mock) => {
    mock.onGet('/posts').reply(({ params }) => {
        const { last = null, group = null } = params;

        // 그룹 조건으로 검색 시
        if (group !== null) return [200, postsResponseGroup1];

        let result = postsResponse1;
        if (last !== null) {
            if (last <= postsResponse1.data[postsResponse1.data.length - 1].idx)
                result = postsResponse2;
            if (last <= postsResponse2.data[postsResponse2.data.length - 1].idx)
                result = postsResponse3;
            if (last <= postsResponse3.data[postsResponse3.data.length - 1].idx)
                result = postsResponse4;
            if (last <= postsResponse4.data[postsResponse4.data.length - 1].idx)
                return [515, { message: '리스트가 없습니다.' }];
        }

        return [200, result];
    });
};

export default posts;
