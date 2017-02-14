# callasync

  [![Build Status](https://travis-ci.org/yefremov/callasync.svg?branch=master)](https://travis-ci.org/yefremov/callasync)

  [![Coverage Status](https://coveralls.io/repos/github/yefremov/callasync/badge.svg?branch=master)](https://coveralls.io/github/yefremov/callasync?branch=master)

  Essential function to group all your asynchronous function calls into
  a single queue.

## Installation

  ```bash
  $ npm install --save callasync
  ```

## Usage

  ```js
  var callasync = require('callasync');

  // both functions fill be called on a same tick

  callasync(function () {
    // code
  });

  callasync(function () {
    // code
  });
  ```

## Running tests

  ```bash
  $ npm install
  $ npm test
  ```

## License

  [MIT](LICENSE)
