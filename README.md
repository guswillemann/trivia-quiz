# Trivia Quiz!

Deploy: [https://trivia-quiz.guswillemann.vercel.app/](https://trivia-quiz.guswillemann.vercel.app/)
![Trivia Quiz!](/.github/trivia-quiz.png)

## Tools
- [Axios](https://axios-http.com/)
- [Cypress](https://www.cypress.io/)
- [Material UI](https://material-ui.com/)
- [NextJS](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## Overview

This project was created as a means to practice the MaterialUI library.

It draws the questions from the [Open Trivia Database](https://opentdb.com/).

The main app flow is tested with Cypress.

It uses the Local Storage to save the following data:
- One game instance.
- The game history, with reports for each game.

## How to run this project

- ### Clone
Clone with the terminal command:

    git clone https://github.com/guswillemann/trivia-quiz

- ### Install
Install the dependencies:

```
npm install
# or
yarn install
```

- ### Running in development mode

```
npm run dev
# or
yarn dev
```

It will be hosted at [http://localhost:3000](http://localhost:3000).

- ### Build for production

```
npm run build
# or
yarn build
```

- ### Running the build version locally

```
npm run start
# or
yarn start
```

It will be hosted at [http://localhost:3000](http://localhost:3000).

### Running Cypress test

While running the project, with one of the options above. Use the script on it's own terminal:
```
npm run test:integration:open
# or
yarn test:integration:open
```
