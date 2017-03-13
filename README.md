# No Mutation Cheatsheet
A quick reference for alternatives to mutable methods for Javascript collections.

## Arrays
Arrays have lots of methods that will introduce side effects into your functions. It's possible to avoid the following _mutating_ methods, with a mixture of `slice`, `filter`, `reduce` and the `...` (rest and spread) operator.

### pop/shift
`pop` and `shift` remove the last and first element from an array, respectively.

```js
// remove the first element
return arr.slice(1);

// remove the last element
return arr.slice(0, -1);
```

### push/unshift
`push` and `unshift` add an element to the end and start of an array, respectively.

```js
// add element at the end
return [...arr, element];

// add element at the start
return [element, ...arr];
```

### reverse
`reverse` reverses the ordering of an array in-place.

```js
return arr.reduce((reversed, item) => (
  [item, ...reversed]
), []);
```

### sort
It's possible to re-implement `sort` in a side effect free way --- as shown with reverse --- but it requires a lot more code.

A simpler alternative is to copy the array, then use the mutable sort method on the new copy.

```js
return [...arr].sort();
```

### splice
`splice` is a multipurpose method for removing and inserting items into an array.

```js
// to remove `count` items at `index`
return arr.filter((item, i) => (i < index || i >= index + count));

// insert items at `index`
return ([
  ...arr.slice(0, index),
  ...items,
  ...arr.slice(index)
]);

// insert items at `index` and remove `count`
return ([
  ...arr.slice(0, index),
  ...items,
  ...arr.slice(index + count)
]);
```

## Objects
Unlike arrays, the interface for objects is minimal and most of our interactions with them are syntactic. Unfortunately, this makes it much harder to work with them in an immutable way.

Rather than looking at alternatives to existing methods we'll look at some strategies for creating new objects rather than mutating them. The essential quality here is that we have to make sure that the updated version is not a reference to the original object.

The simplest way is to create new objects with the appropriate properties changed.

```js
const counter = { count: 0 };
return { count: counter.count + 1 };
```

This can work well for simple cases, but the more properties in your object, the more code you'll have to write each time you want to change it. Instead we can create a new object with the properties we care about and let `Object.assign` handle the rest.

```js
const counter = { count: 0 };
return Object.assign({}, counter, { count: counter.count + 1 });
```

A [new syntax proposal](https://github.com/sebmarkbage/ecmascript-rest-spread) for ECMAScript makes use of the spread syntax (`...`) which can help us translate this example into much more readable code.

```js
return { ...counter, count: counter.count + 1 };
```
