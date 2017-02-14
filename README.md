# Call Async

  Essential function to group all your asynchronous function calls into
  a single queue.

## Installation

  ```bash
  $ npm install --save callasync
  ```

## Usage

  ```js
  var callasync = require('callasync');

  // both function fill be called on a same tick
  callasync(function () {
    // code
  });

  callasync(function () {
    // code
  });
  ```

## Running tests

```
$ npm install
$ npm test
```

## License

  [MIT](LICENSE)
