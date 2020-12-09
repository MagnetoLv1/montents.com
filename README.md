# next-ts-template

[Next js](https://nextjs.org/) template with [Typescript](https://www.typescriptlang.org/).

[Learn how to use github template.](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)

# Scripts

Use `yarn` or `npm run`

```
$ yarn dev [--hostname=test.choseohwan.com --port=80]
```

-   Run Next JS development server.

```
$ yarn build
```

-   Build Next JS application.

```
$ yarn start
```

-   Run Next Js production server with built Next JS application.

```
$ yarn export
```

-   Export Next JS application for production server.

```
$ yarn storybook
```

-   Run Storybook development server

```
$ yarn build-storybook
```

-   Build Storybook Application for production server.

```
$ yarn lint-staged
```

-   Run [lint-staged](https://www.npmjs.com/package/lint-staged) to clean up code.

```
$ yarn test
```

-   Test Next JS application using [Jest](https://jestjs.io/)

```
$ yarn git-hook-reset
```

-   Run when husky's 'git hook' does not work.

# Directory Structure

```bash
|-- .env
|-- .eslintrc       : eslint configure file
|-- .gitignore      : git ignore file
|-- .prettierrc     : prettier configure file
|-- README.md       : README file
|-- babel.config.js : babel configure file (for jest)
|-- next-env.d.ts   : next type declare file
|-- next.config.js  : next configure file
|-- package.json
|-- tsconfig.json   : typescript compiler configure file
|-- yarn.lock
|--[.storybook      : directory for storybook settings
|   |-- config.js
|   |-- main.js
|   |-- webpack.config.js
|--[config          : directory for other settings
|   |-- jest.config.js
|   |-- jest.setup.ts
|   |-- lint-staged.config.js
|   |-- tsconfig.jest.json
|--[public          : resource directory
|--[src             : source root
    |--[components      : component directory (used atomic design)
    |   |--[atoms
    |   |--[molecules
    |   |--[organisms
    |   |--[templates
    |--[constants       : constant directory
    |--[data            : directory for sample json of response data
    |--[libs            : internal library directory
    |   |-- axios.ts
    |   |-- test-utils.tsx
    |--[modules         : reducer module directory (used immer-reducer)
    |   |-- reducer.ts
    |   |-- store.ts
    |--[pages           : Next JS pages directory
    |   |-- _app.tsx
    |   |-- index.tsx
    |--[sagas           : Redux-saga directory
    |   |-- index.ts
    |--[stories         : storybook directory
    |--[styles          : styles directory (used @emotion/core)
    |--[types           : types directory
```

-   [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)

# Dependencies

## Main

### [Next JS](https://nextjs.org/)

-   The React framework for SSR

### [Typescript](https://www.typescriptlang.org/)

-   TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

### [Redux](https://redux.js.org/)

-   A Predictable State Container for JS Apps

### [Redux Saga](https://redux-saga.js.org/)

-   redux-saga is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.

## Development

### [ESLint](https://eslint.org/)

-   Find and fix problems in JavaScript code.

### [Prettier](https://prettier.io/)

-   An opinionated code formatter

### [Storybook](https://storybook.js.org/)

-   Storybook is a user interface development environment and playground for UI components.

### [Lint Staged](https://www.npmjs.com/package/lint-staged)

-   Run linters against staged git files and don't let slip into your code base.

### [Husky](https://www.npmjs.com/package/husky)

-   Husky can prevent bad git commit, git push and more.

## Test

### [Jest](https://jestjs.io/)

-   JavaScript Testing Framework with a focus on simplicity.

### [React Testing Library](https://github.com/testing-library/react-testing-library)

-   Simple and complete React DOM testing utilities that encourage good testing practices.

### [Axios Mock Adapter](https://www.npmjs.com/package/axios-mock-adapter)

-   Axios adapter that allows to easily mock requests

## ETC..

### [Axios](https://github.com/axios/axios)

-   Promise based HTTP client for the browser and node.js

### [Immer](https://immerjs.github.io/immer/docs/introduction)

-   Immer (German for: always) is a tiny package that allows you to work with immutable state in a more convenient way.

### [Immer Reducer](https://www.npmjs.com/package/immer-reducer)

-   Type-safe and terse reducers with Typescript for React Hooks and Redux using Immer.

### [@emotion/core](https://emotion.sh/docs/introduction)

-   Emotion is a library designed for writing css styles with JavaScript.

--- build
