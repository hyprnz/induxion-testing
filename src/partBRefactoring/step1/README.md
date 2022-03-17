

## Step 1

Your customers could greatly benefit from enhancing the capabilities of the legacy calculator.

Currently, the calculator processes a collection of dates to calculate a planned start date.

There is a new market segment which needs a different algorithm to calculate the planned start date.

Our goal is to refactor the existing code to a point where it is clearer where the new algorithm can be introduced.

Here's a [video walkthrough of the code](https://drive.google.com/file/d/10e7grHG7DLYRFd0YZkaDUFsKUYCMcUUJ/view?usp=sharing) 
if you're feeling overwhelmed!

### Questions

* We spend 60-70% of our time as developers reading code, why is this code hard to read and understand?

* Look at the code and identify code smells. How could you refactor to make the code easier to read and understand?

* Why is the legacy calculator doing too much?

* What are some concerns that could be split out?

### Possible answers

If you're working with someone else, discuss the question prompts together. You may like to look at some possible answers
 or [watch this video](https://drive.google.com/file/d/1gKkdN-bWOmEb9yj9RPnq4a2arPIfqDte/view?usp=sharing)
after you've had a go on your own: 

* __We spend 60-70% of our time as developers reading code, why is this code hard to read and understand?__

  * variable naming doesn't make it clear what is happening at each step
  * the method is long and does multiple things

* __Look at the code and identify code smells. How could you refactor to make the code easier to read and understand?__

  * Some code smells:

    * the `calculate` method is long
    * the `calculate` method has more than one responsibility
    * there is repetition
    * the logic for `countsForSecondWeek` was added by copying existing code and changing a variable name, without refactoring
    * the `LegacyCalculator` class is dealing with lots of different concepts
    * the use of very general variable names like `x`

  * Some possible refactoring:
    * pull out a function/method that has one small piece of functionality
    * pull out a constant instead of writing (7 * 24 * 60 * 60 * 1000) each time

* __Why is the legacy calculator doing too much?__
  * it's doing input validation, calculations about when weeks begin, calculations of which dates are within which weeks, and calculating the planned start date

* __What are some concerns that could be split out?__
  * The calculation for countsForFirstWeek is complicated, it's not easy to tell at a glance what it's doing, and there is repeated code. This would be a great candidate to start with.
