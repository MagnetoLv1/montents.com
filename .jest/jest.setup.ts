import '@testing-library/jest-dom/extend-expect';
import {store} from "modules";
import {storeAction} from "modules/StoreModule";

// jest 타입아웃 30초로 설정
jest.setTimeout(30000);

beforeEach(() => {
    // 매 테스트 마다 store state 초기화
    store.dispatch(storeAction.resetStore());
});