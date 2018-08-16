<p align="center">
    <a href="https://neptune.kcz.me" target="_blank" rel="noopener noreferrer">
        <img src="https://png.icons8.com/material-outlined/96/000000/touch-id.png" alt="Neptune Logo">
    </a>
</p>

<p align="center">
  <a href="https://circleci.com/gh/kcz/neptune">
    <img src="https://circleci.com/gh/kcz/neptune.svg?style=svg" alt="Circle CI">
  </a>
  <a href="https://travis-ci.org/kcz/neptune">
    <img src="https://travis-ci.org/kcz/neptune.svg?branch=master" alt="Travis CI">
  </a>
</p>

# Neptune SPA

Neptune Web UI in Single Page Application

## Table of Contents

- [Neptune SPA](#neptune-spa)
  - [Table of Contents](#table-of-contents)
  - [Prerequisite](#prerequisite)
  - [Get Started](#get-started)
  - [Project Architecture](#project-architecture)
    - [Dependencies](#dependencies)
      - [Core Libs](#core-libs)
      - [Dev Support Tools](#dev-support-tools)
    - [Project Structure](#project-structure)
  - [How to](#how-to)
    - [Add a New Page](#add-a-new-page)
  - [Milestones](#milestones)
  - [Workflow](#workflow)
  - [CI](#ci)
  - [Error Tracking](#error-tracking)
  - [State and Data](#state-and-data)
    - [Selector](#selector)
    - [API(Swagger)](#apiswagger)
    - [Side Effects](#side-effects)
  - [Hosting](#hosting)
  - [Package Managing](#package-managing)
  - [Styles](#styles)
    - [Why Styled Components?](#why-styled-components)
  - [Style Guide and Coding Convetions](#style-guide-and-coding-convetions)
    - [Commit Log & Change Log](#commit-log--change-log)
    - [Linting](#linting)
    - [Absolute path imports](#absolute-path-imports)
  - [Docs](#docs)
    - [Storybook](#storybook)
    - [Icons](#icons)
  - [Tooling](#tooling)
  - [Todos](#todos)

## Prerequisite

`NodeJS` and `Yarn` is required.
You can install them in Mac as follows:

- `brew install node`
- `brew install yarn`

## Get Started

- `yarn install`
- `yarn start`

## Project Architecture

### Dependencies

#### Core Libs

- React 16
- Redux
- React-Router
- React-Intl
- AntD
- Redux-Saga
- Styled-Components

#### Dev Support Tools

- Swagger UI & Editor
- CommitLint & ConventionalChangelog

### Project Structure

- [feature-u: a feature-based project organization for React](https://medium.freecodecamp.org/feature-u-cf3277b11318)
- [CRUV: Structure React apps in 4 directories and 3 files](http://jamesknelson.com/cruv-react-project-structure/)
- [The Three Pigs: how to structure your React-Redux application](https://medium.com/front-end-hacking/the-three-pigs-how-to-structure-react-redux-application-67f5e3c68392)
- [My journey toward a maintainable project structure for React/Redux](https://hackernoon.com/my-journey-toward-a-maintainable-project-structure-for-react-redux-b05dfd999b5)
- [Code Structure](https://redux.js.org/faq/codestructure)
- [Project Structure Links](https://github.com/markerikson/react-redux-links/blob/master/project-structure.md)

## How to

### Add a New Page

## Milestones

- v0.1: Init Project Structure & Dev Libs
- v0.2: Add Sidebar and Sample Pages
- v0.3: Add Circle CI and Firebase

## Workflow

- [Create React App](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md)
- [Understanding the GitHub Flow](https://guides.github.com/introduction/flow/)
- [GitHub Flow Tutorial](https://www.youtube.com/watch?v=GgjIvUrOpmg&t=181s)

## CI

- [Configuring CircleCI](https://circleci.com/docs/2.0/configuration-reference/)
- [使用 CircleCI 2.0 Workflows 挑戰三倍速](https://medium.com/@evenchange4/%E4%BD%BF%E7%94%A8-circleci-2-0-workflows-%E6%8C%91%E6%88%B0%E4%B8%89%E5%80%8D%E9%80%9F-9691e54b0ef0)

## Error Tracking

- [Getting the most out of Redux + Sentry](https://blog.lingoapp.com/getting-the-most-out-of-redux-sentry-ecd8c737410d)

## State and Data

- [Normalizing State Shape](https://redux.js.org/recipes/structuringreducers/normalizingstateshape)

### Selector

- [Selectors in Redux are a MUST](https://hackernoon.com/selectors-in-redux-are-a-must-d6b0637c79b7)
  - Most of the times domain and UI data have different needs and lifecycles.
  - In other words, on one side the application works with flat state. Which is more convenient for data management. On the other side, the application works with nested data. Which is more convenient for the UI.
  - In general, the shape of the state is something only reducers should know about. The moment it leaks out of the store, code becomes structurally coupled.

* [Understanding Javascript Selectors With and Without Reselect](https://medium.com/@pearlmcphee/selectors-react-redux-reselect-9ab984688dd4)

### API(Swagger)

- [swagger-codegen](https://github.com/swagger-api/swagger-codegen)
- [Swagger Tools and Integrations](https://swagger.io/tools/open-source/open-source-integrations/)
- [Swagger 从入门到精通](https://huangwenchao.gitbooks.io/swagger/content/)
- [定制 SwaggerUI（React 的实现，有插件机制）](https://github.com/swagger-api/swagger-ui/tree/c9e8a67579abcf2b87224b0f058c02fa63561fba/docs/customization)

### Side Effects

- [彻彻底底教会你使用 Redux-saga](https://github.com/forthealllight/blog/issues/14)

## Hosting

- [Firebase](https://console.firebase.google.com/)
- [Redux Saga Firebase](https://redux-saga-firebase.js.org/guides/multiple-apps)

## Package Managing

- [Lern](https://github.com/lerna/lerna)
- [Workspaces](https://yarnpkg.com/en/docs/workspaces)
- [Workspaces in Yarn](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/)

## Styles

### Why Styled Components?

[CSS Evolution: From CSS, SASS, BEM, CSS Modules to Styled Components](https://medium.com/@perezpriego7/css-evolution-from-css-sass-bem-css-modules-to-styled-components-d4c1da3a659b)

## Style Guide and Coding Convetions

### Commit Log & Change Log

- [Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
- [commitlint](http://marionebl.github.io/commitlint/#/./guides-local-setup?id=guides-local-setup)
- [conventionalChangelog](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli)
-

### Linting

- [Introducing Prettier with Eslint](https://medium.com/@evenchange4/introducing-prettier-with-eslint-13f567ae0184)
- [Linting in VSCode](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial#_linting)

### Absolute path imports

- [Create-react-app with VS Code](https://itnext.io/create-react-app-with-vs-code-1913321b48d)
  - .env
  - jsconfig.json

## Docs

### Storybook

- [Storybook for React](https://storybook.js.org/basics/guide-react/)

### Icons

- [Ionicons Cheatsheet](https://ionicons.com/v2/cheatsheet.html)

## Tooling

- [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)

## Todos

- [react-loadable](https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html)

- Write test cases with Jest
- Integrate Swagger Editor in the form of npm module
- [How to avoid nested relative reference path](https://github.com/sorrycc/roadhog/issues/349)
- react-app-rewired
- [前端持续集成解决方案](https://zhuanlan.zhihu.com/p/23093540)
