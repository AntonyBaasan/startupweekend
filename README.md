[![Build Status](https://travis-ci.org/antonybaasan/startupweekend.svg?branch=master)](https://travis-ci.org/antonybaasan/startupweekend)


# Calgary Startup Weekend 2016 project 


Seed project: [https://github.com/r-park/todo-angular2-firebase](https://github.com/r-park/todo-angular2-firebase)

Quick Start
-----------

```shell
$ npm install
$ npm start
```


Commands
--------

|Script|Description|
|---|---|
|`npm start`|Start webpack development server @ `localhost:3000`|
|`npm run build`|Lint, test, and build the application to `./target`|
|`npm run dev`|Same as `npm start`|
|`npm run lint`|Lint `.ts` and `.js` files|
|`npm run lint:js`|Lint `.js` files with eslint|
|`npm run lint:ts`|Lint `.ts` files with tslint|
|`npm run server`|Start express server @ `localhost:3000` to serve built artifacts from `./target` (must run `npm run build` first)|
|`npm test`|Run unit tests with Karma and Jasmine|
|`npm run test:watch`|Run unit tests with Karma and Jasmine; watch for changes to re-run tests|
|`npm run typings`|Install ambient typings|
