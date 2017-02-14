
/**
 * Expose `callAsync`.
 */

module.exports = callAsync;

var waiting = [];
var waitingID = 0;

var callWaiting = function () {
  var funcs = waiting;

  waiting = [];
  waitingID = 0;

  while (funcs.length) {
    funcs.shift()();
  }
};

function callAsync(func) {
  waiting.push(func);
  if (waitingID === 0) {
    waitingID = setTimeout(callWaiting, 0);
  }
}
