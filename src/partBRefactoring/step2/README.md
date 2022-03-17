# Test what you change

## Step 2

Let's start by splitting out the calculation of `countsForFirstWeek` (line 25 in step 1 code). Refactor this code by 
extracting a new function - you can use the IDE to help.

1. Introduce a `DateTime.ts` file with the new pure function. 
2. Create a `DateTime.micro.ts` file for micro tests. Hint - you can copy the structure from `LegacyCalculator.micro.ts`.

Once you've finished, compare your refactored code with the code in `LegacyCalculator.ts` under Step 2

3. Try writing some micro tests for the new function. Hint - if you look in step 3 you will see some tests you can reference
but see how far you can get first! 

All tests will be automatically picked up when you run:

```npm run test```

Or you can run micro tests for a single step (see `scripts` in `package.json` for other possibilities)

```npm run test:micro-part-b-step-2```

5. Once you have tests in place, replace the duplicate logic in LegacyCalculator with the same function.

6. Now write some tests to understand what `(7 * 24 * 60 * 60 * 1000)` means. 
7. Introduce a constant to replace all instances of `(7 * 24 * 60 * 60 * 1000)`.
Where should the new constant live? What is a good name for it?
8. If you'd like a challenge, try the advanced step! 

### Advanced:
Try encapsulating the remaining logic into another class that makes a PlannedStart. Write some tests to clarify your
understanding of how it works before you refactor.

If you skip this step you can go to Step 3 and use the code there to continue.
