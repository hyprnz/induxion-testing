# Part A step 1

Have a look at `Cat.ts` - it's pretty silly, but it gives us some simple pure functions
to practice testing.

1. Create a new file called `Cat.micro.ts` in the `step1` directory
2. We'll start with testing the function named `isACat()`. What are some test cases we need to cover?
Write down all the scenarios you can think of. When you're done, check the "Possible solutions" 
at the bottom of this Readme.
3. Try writing tests! Use the example test in `ExampleSetup.micro.ts` 
as a template to get started. See [this video](https://drive.google.com/file/d/1wNhddvPtJOMQ7XOfHOURXzOTagxxv27s/view?usp=sharing) 
for more.
4. If you want some examples to compare your tests with, check out `CatExampleTests.micro.ts`


## Structuring your tests

The example tests are structured to follow the format of the code. You may see other ways of formatting - basically it's 
good to be consistent so that it's easy to follow. Here's an example:

* File or class name: Cat
* Method or function name: isACat()
* Test: fails when the family is wrong

Outer `describe` wrappers are used to wrap all the tests for a file or class. These are generally in one file anyway, 
but the name you use in the `describe` will appear when you run the tests and make it easy to find where you're getting 
any failures.

Inner `describe` wrappers are used to wrap all the tests for a particular method or function. Again, the name will 
appear in the test output.

`it` wrappers are used to wrap a specific test case, and the naming should reflect what the test is doing or expecting.



## Possible solutions
2 - Here are some test cases you might have considered:
* If `family` argument is something other than "Felidae", e.g. "Canidae" (dog family) function should return `false`
* If no `family` argument is provided, the other arguments have to match purrfectly (i.e. it's wrong if one or more
 arguments is wrong)
* If correct `family` argument is provided, all the other arguments can be "wrong"
* If correct `family` argument is provided, it should work regardless of casing (e.g. "FELIDAE" is fine)

