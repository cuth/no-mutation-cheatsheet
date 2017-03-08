// mocha tests - http://mochajs.org/
/* eslint-env node, mocha */

const assert = require('assert');

const pop = arr => (arr.slice(0, -1));
const shift = arr => (arr.slice(1));

describe('pop and shift', () => {
    it('should remove the last element from an array', () => {
        const arr = ['a', 'b', 'c'];
        const copy = ['a', 'b', 'c'];
        const result = pop(arr);
        const expect = ['a', 'b'];
        assert.deepEqual(result, expect);
        assert.deepEqual(arr, copy);
    });
    it('should remove the first element from an array', () => {
        const arr = ['a', 'b', 'c'];
        const copy = ['a', 'b', 'c'];
        const result = shift(arr);
        const expect = ['b', 'c'];
        assert.deepEqual(result, expect);
        assert.deepEqual(arr, copy);
    });
});

const push = (arr, element) => ([...arr, element]);
const unshift = (arr, element) => ([element, ...arr]);

describe('push and unshift', () => {
    it('should add an element to the end of an array', () => {
        const arr = ['a', 'b', 'c'];
        const copy = ['a', 'b', 'c'];
        const result = push(arr, 'x');
        const expect = ['a', 'b', 'c', 'x'];
        assert.deepEqual(result, expect);
        assert.deepEqual(arr, copy);
    });
    it('should add an element to the start of an array', () => {
        const arr = ['a', 'b', 'c'];
        const copy = ['a', 'b', 'c'];
        const result = unshift(arr, 'x');
        const expect = ['x', 'a', 'b', 'c'];
        assert.deepEqual(result, expect);
        assert.deepEqual(arr, copy);
    });
});

const reverse = arr => (
    arr.reduce((reversed, item) => (
        [item, ...reversed]
    ), [])
);

describe('reverse', () => {
    it('should reverse the elements of an array', () => {
        const arr = ['a', 'b', 'c'];
        const copy = ['a', 'b', 'c'];
        const result = reverse(arr);
        const expect = ['c', 'b', 'a'];
        assert.deepEqual(result, expect);
        assert.deepEqual(arr, copy);
    });
});

const sort = arr => ([...arr].sort());

describe('sort', () => {
    it('should sort the elements of an array', () => {
        const arr = ['c', 'b', 'a'];
        const copy = ['c', 'b', 'a'];
        const result = sort(arr);
        const expect = ['a', 'b', 'c'];
        assert.deepEqual(result, expect);
        assert.deepEqual(arr, copy);
    });
});

const splice = (arr, start, deleteCount, ...items) => (
    [
        ...arr.slice(0, start),
        ...items,
        ...arr.slice(start + deleteCount)
    ]
);

describe('splice', () => {
    it('should delete items at index', () => {
        const arr = ['a', 'b', 'c', 'd', 'e'];
        const copy = ['a', 'b', 'c', 'd', 'e'];
        const result = splice(arr, 2, 2);
        const expect = ['a', 'b', 'e'];
        assert.deepEqual(result, expect);
        assert.deepEqual(arr, copy);
    });
    it('should add items at index', () => {
        const arr = ['a', 'b', 'c', 'd', 'e'];
        const copy = ['a', 'b', 'c', 'd', 'e'];
        const result = splice(arr, 1, 2, 'x', 'y');
        const expect = ['a', 'x', 'y', 'd', 'e'];
        assert.deepEqual(result, expect);
        assert.deepEqual(arr, copy);
    });
});
