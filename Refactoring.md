# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

I first created 3 new test cases to test all scenarios I found out debugging the code, as you may see in dpk.test.je.
Then, I started removing the function hash, because it was duplicated in the code, 
and write it as separated function makes it easier to change the hash method and the digest parameter if we need.
Last, I tried to simplify as much as I could the conditions to make it short and clear to the next developers, 
maintaining the same expected results we got using the old function.
