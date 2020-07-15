import path from 'path';

require('dotenv').config({ path: path.resolve(__dirname, '../.env.test') });

import '@testing-library/jest-dom/extend-expect';
import { matchers } from 'jest-emotion';

import { initApiMock } from 'mocks';

import { axiosMock } from 'libs/axios';

// emotion style 테스트를 위한 matcher 추가
expect.extend(matchers);

// 테스트 시 mocking 을 안할 경우 기본 mocking 추가
initApiMock(axiosMock({ delayResponse: 300 }));

// jest 타입아웃 30초로 설정
jest.setTimeout(30000);
