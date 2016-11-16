# javascript-starter-kit
A starter kit for JavaScript applications

## Building a JavaScript Starter Project

### 1: Editors and Configuration

Choose a JavaScript editor.

Currently 4 of the best choices:

1. Atom
2. WebStorm
3. Brackets
4. VSCode

Use .editorconfig to standardize your editor settings.

### 2: Package Management

#### Options:

* npm
* bower
* jspm
* jam
* volo

Package security checks via node module nsp. `nsp check`

Also retire.js

### 3: Development Webserver

Dev servers:

* `http-server` bare-bones simple
* `live-server` live reload, simple
* `express`
* `koa` ES6 generators
* `hapi`
* `budo` hot reloading, Browserify
* `webpack dev server` hot reloading
* `browsersync` great tool for cross-device testing

Share your work online:

* `localtunnel`

Simply temporarily punches a hole in your firewall so external traffic can see your site

* ngrok

Similar to localtunnel, more complicated, more secure. Requires signup and an auth token.

* Surge

Move static files to a webserver quickly and easily.

* now

Easily push code to the cloud.

### 4: Automation

* Grunt
* Gulp
* npm scripts

### 5: Transpilers

Can use babel, typescript, etc

#### babel

.babelrc

Write build scripts in ES6 / transpiled JS, or write in ES5

### 6: Bundlers

Use ES6 module style as much as possible

* Browserify
* Webpack
* Rollup
* JSPM

### 7: Linter

Use ESLint, or TSLint for TypeScript

ESLint plugins: https://github.com/dustinspecker/awesome-eslint

eslint-loader, load via webpack
eslint-watch, npm package to watch files and lint

### 8: Testing

* Mocha

Chai for expectations
Sinon for spies / mocks

* Jasmine
* Jest

Helpers: JSDOM

### 9: HTTP Calls

https://cdn.polyfill.io/v2/polyfill.js?features=fetch

Nock to mock HTTP

JSON Schema Faker
Faker.js, chance.js, randexp.js

JSON Server
