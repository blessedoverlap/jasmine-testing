require('../src/hello.js');

describe('hello', function() {
  it('returns "hello world"', function() {
    expect(hello()).toEqual('hello world');
  });
});
