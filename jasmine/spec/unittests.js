/**
 * Created by red on 10/20/16.
 */

function helloWorld() {
  return "Hello world!";
}

describe("Hello world", function() {
    it("says hello", function() {
        expect(helloWorld()).toEqual("Hello world!");
    });
});
