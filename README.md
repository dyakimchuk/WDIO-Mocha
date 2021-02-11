These tests are developed in TypeScript with [WebDriverIO V6](http://webdriver.io/) and [Mocha](https://mochajs.org/)

## Features

-   TypeScript
-   [Expect-webdriverio](https://github.com/webdriverio/expect-webdriverio)
-   [Visual regression tests](https://github.com/wswebcreation/wdio-image-comparison-service)
-   Page Object Pattern
-   [Commit lint](https://github.com/conventional-changelog/commitlint) and [Commitizen](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly)
-   ESlint
-   Prettier
-   Husky
-   Github Actions example
-   Allure report (screenshots on failure)

## Requirements

-   node >= 12.18.x - [how to install Node](https://nodejs.org/en/download/)
-   npm >= 6.14.x - [how to install NPM](https://www.npmjs.com/get-npm)

## Getting Started

Install the dependencies:

```bash
npm install
```

Compile TypeScript:

```bash
npm run build
```

## Reports

### Allure

Run this command to generate the allure report in the directory `./test-report/allure-report`:

```bash
npm run report:generate
```

You can run this command to start a server on your machine and open the allure report on the browser:

```bash
npm run report:open
```

## Prettier and Eslint

Run to format the code:

```bash
npm run code:format
```

## Commit

Best practices for message's commit, using [Commit lint](https://github.com/conventional-changelog/commitlint) and [Commitizen](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly) we can generate changelogs automatically.

Run `npm run commit` and commitizen will help you.
