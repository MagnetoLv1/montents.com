export const isDev = process.env.NODE_ENV === 'development'; // 개발서버 여부
export const isTest = process.env.NODE_ENV === 'test'; // 테스트 환경 여부
export const isProd = process.env.NODE_ENV === 'production'; // 실 환경 여부
export const USE_API_MOCK = process.env.USE_API_MOCK === 'true'; // api mocking 사용 여부
