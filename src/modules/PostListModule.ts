import {
    createActionCreators,
    createReducerFunction,
    ImmerReducer
} from 'immer-reducer';
import { cloneDeep } from 'lodash';

import PaginationModule from 'types/api/PaginationModule';
import Post from 'types/api/response/Post';

import ApiStatus from 'constants/ApiStatus';

interface PostListModuleState extends PaginationModule<Post[]> {
    group: number | null;
}

const initialState: PostListModuleState = {
    data: [],
    status: ApiStatus.CLEAR,
    error: null,
    meta: {
        more: false,
        last: null
    },
    group: null
};

class PostListModule extends ImmerReducer<PostListModuleState> {
    /**
     * 게시글 리스트 조회
     * @param group
     */
    public fetchPostList(group: number | null) {
        this.clearPostList();

        this.draftState.status = ApiStatus.LOADING;
        this.draftState.group = group;
    }

    /**
     * 다음 게시글 리스트 조회
     */
    public fetchMorePostList() {
        this.draftState.status = ApiStatus.MORE_LOADING;
    }

    /**
     * 게시글 리스트 조회 성공
     * @param data
     * @param more
     */
    public fetchPostListSuccess(data: Post[], more: boolean) {
        this.draftState.status = ApiStatus.SUCCESS;
        this.draftState.data = this.draftState.data.concat(data);

        this.draftState.meta = {
            more,
            last: data.length === 0 ? null : data[data.length - 1].idx
        };
    }

    /**
     * 게시글 리스트 조회 실패
     * @param error
     */
    public fetchPostListError(error: string): void {
        this.draftState = { ...initialState };
        this.draftState.status = ApiStatus.ERROR;
        this.draftState.error = error;
    }

    /**
     * 게시글 리스트 초기화
     */
    public clearPostList(): void {
        this.draftState = cloneDeep(initialState);
    }
}

export const postListReducer = createReducerFunction(
    PostListModule,
    initialState
);
export const postListAction = createActionCreators(PostListModule);
