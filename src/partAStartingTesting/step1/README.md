# Part A step 1

Have a look at `Cat.ts` - it's pretty silly, but it gives us some simple pure functions
to practice testing.

1. Create a new file called `Cat.micro.ts` in the `step1` directory
2. We'll start with testing the function named `isACat()`. What are some test cases we need to cover?
Write down all the scenarios you can think of. When you're done, check the "Possible solutions" 
at the bottom of the Readme.
3. Try writing tests! Use the example test in `ExampleSetup.micro.ts` 
as a template if you wish
4. If you want some examples to compare your tests with, check out `CatExampleTests.micro.ts`







## Possible solutions
2 - Here are some test cases you might have considered:
* If `family` argument is something other than "Felidae", e.g. "Canidae" (dog family) function should return `false`
* If no `family` argument is provided, the other arguments have to match purrfectly (i.e. it's wrong if one or more
 arguments is wrong)
* If correct `family` argument is provided, all the other arguments can be "wrong"
* If correct `family` argument is provided, it should work regardless of casing (e.g. "FELIDAE" is fine)

