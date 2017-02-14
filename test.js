var test = require('tape');
var callAsync = require('.');

test('callAsync should call `func` asynchronously', function (t) {
  var i = 0;
  var callback = function (n, msg) {
    return function () {
      t.equal(++i, n, msg);
    }
  };

  t.plan(4);

  callback(1, 'should execute first')();

  callAsync(callback(3, 'should execute third'));

  callAsync(callback(4, 'should execute fourth'));

  callback(2, 'should execute second')();
});
