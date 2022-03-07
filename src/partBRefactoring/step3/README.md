# Test what you change

## Step 3

We have introduced DateTime.ts to encapsulate pure date functions. 

We have also now introduced the PlannedStartMaker class which encapsulates the making of a `PlannedStart` object based on
logic. 

We have been able to use dependency injection within the legacy calculator to control the creation 
of the object. This also allows us to use mocks within the legacy calculator to simplify testing.
Have a look at the tests in the `LegacyCalculator` in step 3 and see if you can understand how the mock
works.

### Advanced:

Write the missing micro tests for minDateAsTime in DateTime.ts.

How would you introduce a new type of planned start maker? 
Try and introduce a NoopPlannedStartMaker that always returns ```{startTime: 0, count: 0}```
from the factory when the dates array contains 2018-01-01:00:00:00.


