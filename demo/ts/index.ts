/* eslint-disable no-console */

import '../styles/index.scss';

import {
    selectOne, insertAfter, removeChildren, isElement, isWindow, selectAll, inDOM,
} from '../../src/ts/index';

// select one element
console.warn('select one element');
console.log(selectOne(window));
console.log(selectOne(document.documentElement));
console.log(selectOne('h1'));
console.log(selectOne('h1', document.body));
console.log(selectOne('h1', document.head));
console.log(selectOne('p', '.children'));

// select all elements
console.warn('select all elements');
console.log(selectAll('p'));
console.log(selectAll('*', '.children'));
console.log(selectAll(document.querySelectorAll('*')));
console.log(selectAll(selectOne('h1')));
console.log(selectAll([selectOne('h1'), selectOne('h2')]));

// insert after
insertAfter(selectOne('h1'), selectOne('h2'));

// remove children
removeChildren(selectOne('.children'));

// isElement
console.warn('isElement');
console.log(`'.children' is an element: ${isElement(selectOne('.children'))}`);
console.log(`'false' is an element: ${isElement(false)}`);
console.log(`'window' is an element: ${isElement(window)}`);

// isWindow
console.warn('isWindow');
console.log(`'.children' is an element: ${isWindow(selectOne('.children'))}`);
console.log(`'false' is an element: ${isWindow(false)}`);
console.log(`'window' is an element: ${isWindow(window)}`);

// if elements are in the DOM
console.warn('isDOM');
console.log(`'h1' is in DOM: ${inDOM(selectOne('h1'))}`);
const myEl = document.createElement('div');
console.log(`'div' is in DOM: ${inDOM(myEl)}`);
