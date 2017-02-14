
/**
 * Expose `callAsync`.
 */

module.exports = callAsync;

var waiting = [];
var waitingID = 0;

var callWaiting = function () {
  var index = -1;
  var length = waiting.length;
  var funcs = waiting;

  waiting = [];
  waitingID = 0;

  while (++index < length) {
    funcs[index]();
  }
};

function callAsync(func) {
  waiting.push(func);
  if (waitingID === 0) {
    waitingID = setTimeout(callWaiting, 0);
  }
}
