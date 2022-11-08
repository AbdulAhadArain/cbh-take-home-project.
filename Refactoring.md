# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

Moved TRIVIAL_PARTITION_KEY and MAX_PARTITION_KEY_LENGTH to a seperate file as these are constans and are not changing, these can also be read from evn in future,
Moved cyrpto createHash to cryptoUtility file so that readability can be improved and also that it can reused at other places in future
Moved typeOf to typesUtility where more types check can be addded to be reused at other places
Combined the candidate and typeOf check to increas readability

Added bellow test cases to increase coverage

- Returns the literal '0' when given input without partitionKey
- Doesnot return the literal '0' when given input with partitionKey is not String
- Returns the literal '0' when given input with partitionKey is String
