# BIG O

1. Big O - a measure how efficient your code is. Helps you decide which data structure or algorithm to use. When we are measuring the Big O we are always measuring the worst case.
2. Time complexity - measured in number of operations not the "time the code runs".
3. Space complexity - measured in a number of memory the code uses.

4. Big O can have 3 types of cases:

- best case(Ω omega letter) - when looking for element in array, which is 7 elements long, the first element you checked,
- average case(Θ theta letter) - when looking for element in array, which is 7 elements long, the fourth element you checked,
- worst case(Ο omicron letter) - when looking for element in array, which is 7 elements long, the seventh element you checked,

5. O notation - shows us the Big O notation. Written as O(n) or O($n^2$) or similar.

6. O(n) example:

```js
function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
```

7. Droping constants - this means that when we are representing the big O for code where there would be for example two loops independently looping over an array, we would not say that this code is O(2n) but that it is O(n).
8. O(2n) example:

```js
function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  for (let j = 0; j < n; j++) {
    console.log(j);
  }
}
```

Even though this code has two loop we would drop the constants and present its big O notation just as O(n).

8. O($n^2$) example:

```js
function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```

Solution that has O($n^2$) complexity is always least attractive one than O(n).

8. O($n^2$) example:

```js
function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let z = 0; z < n; z++) {
        console.log(i, j, z);
      }
    }
  }
}
```

Even though this code has 3 nested loops we would still categorize it as O($n^2$). This is another example of dropping constants.

9. Dropping non-dominants - in this example O notation would be O($n^2$ + n) because the first for is $n^2$ and the second is n. We know however that the first argument of O notation would impact more our code, thus we are naming it the dominant term. The second one, called non-dominant one can be omitted because, it should not affect overall code complexity that much.

```js
function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j, z);
    }
  }

  for (let i = 0; i < n; i++) {
    console.log(i, j, z);
  }
}
```

10. O(1) - a lot of the times referred to as constant time. The amount of operations does not change as n parameter changes. Noting is more efficient than O(1).

11. O(1) example:

```js
function returnDoubleSum(n) {
  return n + n;
}
```

Here the n would not impact the code complexity because it does not matter if we will pass here 1 or 1mld as n parameter.

12. O(1) example:

```js
function returnDoubleSum(n) {
  return n + n + n;
}
```

Here this code would be written as O(1) even if there are actually 2 operations because of the simplifying.

13. O($log{n}$) - good example is looking for element in sorted array. The array we want to search has 8 elements with each containing an number from 1 to 8. We can find element 1 by using divide and conquer (divide elements in equal parts and check for element you are looking for until you will find your element). This would cause to make 3 operations to find element 1 so 
