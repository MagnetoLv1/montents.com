import '@testing-library/jest-dom/extend-expect';
import { matchers } from 'jest-emotion';

expect.extend(matchers);

jest.setTimeout(30000);
