/*
Jasmine test suite

'decribe' function opens up a new testing suite, within this block you place your test functions

'it' function opens up a test case inwhich you call a function, with arguments if applicable, and declare
what you expect it to return

expect() takes any object as an argument, if it is a function it must return something for the test to work

.toBe is a === comparison of the result of what is being tested to whatever you put in the parens

other comparison methods {  toEqual() : == , .toContain() : checks for membership, toMatch() : works well
with RegEx, toBeGreaterThan : > , toBeLessThan : < } not an exhaustive list...

test suites are not well suited for DOM manipulation, s exixting elements in the HTML are required, I am
sure there are ways to hande this, reading continues

to test a given peice of software requires two files, the source code fo the js logic and a Spec.js file. The naming of the Spec.js file can start with any valid file name but must end with Spec.js, no exceptions.

these files are linked to the SpecRunner.html file that comes with the Jasmine Download. There is also a way to run Jasmine with node if you install it with npm
*/


describe("Tip Calculator", function(){
  it("returns tip amount", function (){
    expect(clacTip(10, 0.15)).toBe("1.50");
  });
});