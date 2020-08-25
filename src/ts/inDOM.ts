import { childOf } from './childOf';

/**
 * Check if an element is in the DOM
 */
export function inDOM (
    /**
     * The element to be checked.
     */
    el: Element,
): boolean {

    return childOf(el, document.documentElement);

}
