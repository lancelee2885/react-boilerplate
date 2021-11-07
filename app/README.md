# Cryptocurrency List

This application is a simple crytocurrency listing app allowing to display cryptocurrencies fetched from backend and add additional cryptocurrencies by making a post request. Please see `backend` information below for more detailed information.

This application includes features:
- display cryptocurrency information fetched from `/api`.
- add additional cryptocurrency by sumbitting a form. 
    - Data need: Symbol, Name, Description, and a valid icon image link(.svg, .jpg, .png, and other image formats).

<br>

## Setup Instructions

1. Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
2. Clone the parent repository (the whole boilerplate, not just the app tree).
3. Run `npm i` in order to install dependencies.
4. Start the React App `npm start`.

<br>

## Test

This app is tested with Jest.
Run `npm test` or `jest --coverage` for test.

<br>

## Backend

### Endpoints
- Get `/api`
    - No authorization/authentication needed. Simply make a get request to `/api` to fetch all cryptocurrencies information in JSON.
- Post `/api`
    - No authorization/authentication needed. Validation is provided with JsonSchema.
    - Accepts JSON body.
    - Accepted data:
        - symbol: required, minLength: 1 chr.
        - name: required, minLength: 1 chr.
        - description: required, minLength: 1 chr.
        - iconURL: required, url format.

<br>

## Technologies Used

- [React](https://reactjs.org/) - Javascript frontend framework
- [Node.js](https://nodejs.org/en/) - Javascript backend environment
- [Express](https://expressjs.com/) - Node.js backend framework
- [React Redux](https://react-redux.js.org/) - State management library.
- [Redux Saga](https://redux-saga.js.org/) - Redux middleware for handling asynchronous api call. 
- [Redux Reselect](https://github.com/reduxjs/reselect) - Selector library for redux.

<br>

## Authors 

This app is authored by [Lance Lee](https://github.com/lancelee2885).
Template is provided from [React Boilerplate](https://www.reactboilerplate.com/).

<br>